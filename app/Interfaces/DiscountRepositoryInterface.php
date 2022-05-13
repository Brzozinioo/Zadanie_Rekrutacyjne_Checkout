<?php

namespace App\Interfaces;

interface DiscountRepositoryInterface
{
    public function createDiscount(array $discount);
    public function getDiscountById(int $id);
    public function getAllDiscounts();
    public function deleteDiscount(int $id);
    public function updateDiscount(int $id, array $discount);
    public function getDiscountByCode(string $code);
    public function increseCount(int $id);
}
