<?php

namespace App\Repositories;

use App\Models\OrderItem;
use App\Interfaces\OrderItemRepositoryInterface;

class OrderItemRepository implements OrderItemRepositoryInterface
{
    public function createOrderItem(array $orderItem)
    {
        $orderItem = OrderItem::create($orderItem);
        return $orderItem;
    }

    public function getOrderItemById(int $id)
    {
        $orderItem = OrderItem::find($id);
        return $orderItem;
    }
    public function getAllOrderItems()
    {
        $orderItems = OrderItem::all();
        return $orderItems;
    }
    public function deleteOrderItem(int $id)
    {
        $orderItem = OrderItem::find($id);
        $orderItem->delete();
        return $orderItem;
    }
    public function updateOrderItem(int $id, array $orderItem)
    {
        $orderItem = OrderItem::find($id);
        $orderItem->update($orderItem);
        return $orderItem;
    }
    public function getOrderItemsByOrderId(int $id)
    {
        $orderItems = OrderItem::where('order_id', $id)->get();
        return $orderItems;
    }
}
