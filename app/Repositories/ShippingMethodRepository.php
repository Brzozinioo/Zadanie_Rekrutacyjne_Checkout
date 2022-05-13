<?php

namespace App\Repositories;

use App\Models\ShippingMethod;
use App\Interfaces\ShippingMethodRepositoryInterface;

class ShippingMethodRepository implements ShippingMethodRepositoryInterface
{
    public function createShippingMethod(array $shippingMethod)
    {
        $shippingMethod = ShippingMethod::create($shippingMethod);
        return $shippingMethod;
    }
    public function getShippingMethodById(int $id)
    {
        $shippingMethod = ShippingMethod::find($id);
        return $shippingMethod;
    }
    public function getAllShippingMethods()
    {
        $shippingMethods = ShippingMethod::all();
        return $shippingMethods;
    }
    public function deleteShippingMethod(int $id)
    {
        $shippingMethod = ShippingMethod::find($id);
        $shippingMethod->delete();
        return $shippingMethod;
    }
    public function updateShippingMethod(int $id, array $shippingMethod)
    {
        $shippingMethod = ShippingMethod::find($id);
        $shippingMethod->update($shippingMethod);
        return $shippingMethod;
    }
    public function getShippingMethodByName(string $name)
    {
        $shippingMethod = ShippingMethod::where('name', $name)->first();
        return $shippingMethod;
    }
}
