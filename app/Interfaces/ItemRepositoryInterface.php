<?php

namespace App\Interfaces;

interface ItemRepositoryInterface
{
    public function createItem(array $item);
    public function getItemById(int $id);
    public function getAllItems();
    public function deleteItem(int $id);
    public function updateItem(int $id, array $item);
}
