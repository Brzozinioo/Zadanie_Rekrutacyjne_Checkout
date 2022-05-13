<?php

namespace App\Interfaces;

interface PaymentMethodRepositoryInterface
{
    public function createPaymentMethod(array $paymentMethod);
    public function getPaymentMethodById(int $id);
    public function getAllPaymentMethods();
    public function deletePaymentMethod(int $id);
    public function updatePaymentMethod(int $id, array $paymentMethod);
    public function getPaymentMethodByName(string $name);
}
