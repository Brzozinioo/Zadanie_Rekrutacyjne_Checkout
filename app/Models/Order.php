<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'shipingMethod_id',
        'paymentMethod_id',
        'discount_id',
        'message',
        "total_price",
        'different_address',
        'first_name',
        'last_name',
        'country',
        'city',
        'street',
        'postal_code',
        'phone_number',
    ];
}
