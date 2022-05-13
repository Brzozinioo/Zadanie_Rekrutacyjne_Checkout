<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ShippingMethodSeeder::class,
            PaymentMethodSeeder::class,
            DiscountSeeder::class,
            ItemSeeder::class,
            UserSeeder::class
        ]);
    }
}
