<?php

namespace App\Http\Controllers;

use App\Interfaces\PaymentMethodRepositoryInterface;
use App\Interfaces\ShippingMethodRepositoryInterface;
use Illuminate\Http\Response;

class CheckoutController extends Controller
{
    private ShippingMethodRepositoryInterface $shippingMethodRepository;
    private PaymentMethodRepositoryInterface $paymentMethodsRepository;

    public function __construct(ShippingMethodRepositoryInterface $shippingMethodRepository, PaymentMethodRepositoryInterface $paymentMethodsRepository)
    {
        $this->shippingMethodRepository = $shippingMethodRepository;
        $this->paymentMethodsRepository = $paymentMethodsRepository;
    }

    // Kontroler zwracający dostępne metody płatności oraz dostawy

    public function methods()
    {
        $deliveryMethods = $this->shippingMethodRepository->getAllShippingMethods();
        $paymentMethods = $this->paymentMethodsRepository->getAllPaymentMethods();

        if ($deliveryMethods && $paymentMethods) {
            return response()->json([
                'success' => true,
                'deliveryMethods' => $deliveryMethods,
                'paymentMethods' => $paymentMethods,
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Nie udało się pobrać metod dostawy i płatności'
            ], Response::HTTP_NOT_FOUND);
        }
    }
}
