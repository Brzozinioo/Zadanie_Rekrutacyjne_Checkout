<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use Illuminate\Http\Response;

use App\Interfaces\OrderRepositoryInterface;
use App\Interfaces\PaymentMethodRepositoryInterface;
use App\Interfaces\ShippingMethodRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Interfaces\DiscountRepositoryInterface;
use App\Interfaces\OrderItemRepositoryInterface;

class OrderController extends Controller
{
    private OrderRepositoryInterface $orderRepository;
    private PaymentMethodRepositoryInterface $paymentMethodsRepository;
    private ShippingMethodRepositoryInterface $shippingMethodsRepository;
    private UserRepositoryInterface $userRepository;
    private DiscountRepositoryInterface $discountRepository;
    private OrderItemRepositoryInterface $orderItemRepository;

    public function __construct(OrderRepositoryInterface $orderRepository, PaymentMethodRepositoryInterface $paymentMethodsRepository, ShippingMethodRepositoryInterface $shippingMethodsRepository, UserRepositoryInterface $userRepository, DiscountRepositoryInterface $discountRepository, OrderItemRepositoryInterface $orderItemRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->paymentMethodsRepository = $paymentMethodsRepository;
        $this->shippingMethodsRepository = $shippingMethodsRepository;
        $this->userRepository = $userRepository;
        $this->discountRepository = $discountRepository;
        $this->orderItemRepository = $orderItemRepository;
    }

    // Kontroler obsługujący utworzenie nowego zamówienia złożonego przez użytkownika
    public function store(StoreOrderRequest $request)
    {

        $validatedData = $request->validated();
        if ($request['is_new_account']) {
            $userData = [
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'login' => $request['login'],
                'email' => $request['email'],
                'password' => $request['password'],
                'phone_number' => $request['phone'],
                'street' => $request['street'],
                'city' => $request['city'],
                'country' => $request['country'],
                'postal_code' => $request['post_code'],

            ];
            $userExist = $this->userRepository->getUserByEmailOrUsername($request['email'], $userData['login']);
            if (!$userExist) {
                $newUser = $this->userRepository->createUser($userData);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => ['login' => 'Użytkownik o podanym loginie lub adresie email już istnieje', 'email' => 'Użytkownik o podanym loginie lub adresie email już istnieje'],
                ]);
            }
        } else {
            $newUser = $this->userRepository->getUserById($request['user_id']);
        }


        $selectedShippingMethod = $this->shippingMethodsRepository->getShippingMethodByName($request['selected_delivery_method']);
        $selectedPaymentMethod = $this->paymentMethodsRepository->getPaymentMethodByName($request['selected_payment_method']);
        if ($request['discount_code']) {
            $discount = $this->discountRepository->getDiscountByCode($request['discount_code']);
            $this->discountRepository->increseCount($discount->id);
        }


        $sum = 0;
        foreach ($request['items'] as $item) {
            $sum += $item['price'] * $item['quantity'];
        }
        $sum += $selectedShippingMethod->price;
        if (isset($discount)) {
            if ($discount->is_fixed) {
                $sum -= $discount->discountAmount * 100;
            } else {
                $sum -= $discount->discountAmount;
            }
        }

        $orderData = [
            'user_id' => $newUser->id,
            'paymentMethod_id' => $selectedPaymentMethod->id,
            'shipingMethod_id' => $selectedShippingMethod->id,
            'discount_id' => isset($discount) ? $discount->id : null,
            'total_price' => $sum,
            'message' => $request['comment'],
            'different_address' => $request['diffrent_delivery_address'],
            'first_name' =>  $request['delivery_first_name'],
            'last_name' =>  $request['delivery_last_name'],
            'country' =>  $request['delivery_country'],
            'city' =>  $request['delivery_city'],
            'street' =>  $request['delivery_street'],
            'postal_code' =>  $request['delivery_post_code'],
            'phone_number' =>  $request['delivery_phone'],
        ];




        $order = $this->orderRepository->createOrder($orderData);
        foreach ($request['items'] as $item) {
            $this->orderItemRepository->createOrderItem([
                'order_id' => $order->id,
                'item_id' => $item['id'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
            ]);
        }

        if ($order) {
            return response()->json([
                'success' => true,
                'order' => $order,
            ], Response::HTTP_CREATED);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Nie udało się złożyć zamówienia',
            ], Response::HTTP_BAD_REQUEST);
        }
    }
}
