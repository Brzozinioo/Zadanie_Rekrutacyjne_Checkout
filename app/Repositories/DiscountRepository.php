<?php

namespace App\Repositories;

use App\Models\Discount;
use App\Interfaces\DiscountRepositoryInterface;

class DiscountRepository implements DiscountRepositoryInterface
{
    public function createDiscount(array $discount)
    {
        $discount = Discount::create($discount);
        return $discount;
    }
    public function getDiscountById(int $id)
    {
        $discount = Discount::find($id);
        return $discount;
    }
    public function getDiscountByCode(string $code)
    {
        $discount = Discount::where('code', $code)->first();
        return $discount;
    }
    public function getAllDiscounts()
    {
        $discounts = Discount::all();
        return $discounts;
    }
    public function deleteDiscount(int $id)
    {
        $discount = Discount::find($id);
        $discount->delete();
        return $discount;
    }
    public function updateDiscount(int $id, array $discount)
    {
        $discount = Discount::find($id);
        $discount->update($discount);
        return $discount;
    }
    public function increseCount(int $id)
    {
        $discount = Discount::find($id);
        $discount->uses++;
        $discount->save();
        return $discount;
    }
}
