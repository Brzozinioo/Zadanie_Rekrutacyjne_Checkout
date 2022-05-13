<?php

namespace App\Repositories;

use App\Models\User;
use App\Interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
    public function createUser(array $user)
    {
        $user = User::create($user);
        return $user;
    }
    public function getUserById(int $id)
    {
        $user = User::find($id);
        return $user;
    }
    public function getAllUsers()
    {
        $users = User::all();
        return $users;
    }
    public function deleteUser(int $id)
    {
        $user = User::find($id);
        $user->delete();
        return $user;
    }
    public function updateUser(int $id, array $user)
    {
        $user = User::find($id);
        $user->update($user);
        return $user;
    }
    public function getUserByEmail(string $email)
    {
        $user = User::where('email', $email)->first();
        return $user;
    }
    public function getUserByEmailOrUsername(string $email, string $username)
    {
        $user = User::where('email', $email)->orWhere('login', $username)->first();
        return $user;
    }
}
