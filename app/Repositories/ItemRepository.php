<?php

namespace App\Repositories;

use App\Models\Item;
use App\Interfaces\ItemRepositoryInterface;

class ItemRepository implements ItemRepositoryInterface
{
    public function createItem(array $item)
    {
        $item = Item::create($item);
        return $item;
    }
    public function getItemById(int $id)
    {
        $item = Item::find($id);
        return $item;
    }
    public function getAllItems()
    {
        $items = Item::all();
        return $items;
    }
    public function deleteItem(int $id)
    {
        $item = Item::find($id);
        $item->delete();
        return $item;
    }
    public function updateItem(int $id, array $item)
    {
        $item = Item::find($id);
        $item->update($item);
        return $item;
    }
}
