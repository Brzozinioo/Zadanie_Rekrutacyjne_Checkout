<?php

namespace App\Interfaces;

interface OrderItemRepositoryInterface
{
    public function createOrderItem(array $orderItem);
    public function getOrderItemById(int $id);
    public function getAllOrderItems();
    public function deleteOrderItem(int $id);
    public function updateOrderItem(int $id, array $orderItem);
    public function getOrderItemsByOrderId(int $id);
}
