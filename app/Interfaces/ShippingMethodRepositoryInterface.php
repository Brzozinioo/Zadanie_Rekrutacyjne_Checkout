<?php

namespace App\Interfaces;

interface ShippingMethodRepositoryInterface
{
    public function createShippingMethod(array $shippingMethod);
    public function getShippingMethodById(int $id);
    public function getAllShippingMethods();
    public function deleteShippingMethod(int $id);
    public function updateShippingMethod(int $id, array $shippingMethod);
    public function getShippingMethodByName(string $name);
}
