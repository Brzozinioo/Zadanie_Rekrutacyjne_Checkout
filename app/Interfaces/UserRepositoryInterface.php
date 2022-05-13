<?php

namespace App\Interfaces;

interface UserRepositoryInterface
{
    public function createUser(array $user);
    public function getUserById(int $id);
    public function getAllUsers();
    public function deleteUser(int $id);
    public function updateUser(int $id, array $user);
    public function getUserByEmail(string $email);
    public function getUserByEmailOrUsername(string $email, string $username);
}
