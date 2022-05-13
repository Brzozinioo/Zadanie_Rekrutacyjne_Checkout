<?php

namespace App\Repositories;


use App\Models\Order;
use App\Interfaces\OrderRepositoryInterface;


class OrderRepository implements OrderRepositoryInterface
{
    public function createOrder(array $order)
    {
        $order = Order::create($order);
        return $order;
    }

    public function getOrderById(int $id)
    {
        $order = Order::find($id);
        return $order;
    }

    public function getAllOrders()
    {
        $orders = Order::all();
        return $orders;
    }

    public function deleteOrder(int $id)
    {
        $order = Order::find($id);
        $order->delete();
        return $order;
    }

    public function updateOrder(int $id, array $order)
    {
        $order = Order::find($id);
        $order->update($order);
        return $order;
    }
}
