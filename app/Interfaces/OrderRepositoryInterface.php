<?php

namespace App\Interfaces;

interface OrderRepositoryInterface
{
    public function createOrder(array $order);
    public function getOrderById(int $id);
    public function getAllOrders();
    public function deleteOrder(int $id);
    public function updateOrder(int $id, array $order);
}
