<?php

namespace App\Repositories;

use App\Models\PaymentMethod;
use App\Interfaces\PaymentMethodRepositoryInterface;

class PaymentMethodRepository implements PaymentMethodRepositoryInterface
{
    public function createPaymentMethod(array $paymentMethod)
    {
        $paymentMethod = PaymentMethod::create($paymentMethod);
        return $paymentMethod;
    }
    public function getPaymentMethodById(int $id)
    {
        $paymentMethod = PaymentMethod::find($id);
        return $paymentMethod;
    }
    public function getAllPaymentMethods()
    {
        $paymentMethods = PaymentMethod::all();
        return $paymentMethods;
    }
    public function deletePaymentMethod(int $id)
    {
        $paymentMethod = PaymentMethod::find($id);
        $paymentMethod->delete();
        return $paymentMethod;
    }
    public function updatePaymentMethod(int $id, array $paymentMethod)
    {
        $paymentMethod = PaymentMethod::find($id);
        $paymentMethod->update($paymentMethod);
        return $paymentMethod;
    }
    public function getPaymentMethodByName(string $name)
    {
        $paymentMethod = PaymentMethod::where('name', $name)->first();
        return $paymentMethod;
    }
}
