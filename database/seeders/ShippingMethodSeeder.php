<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class ShippingMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shipping_methods')->insert([
            ['name' => 'Inpost','description'=> 'Paczkomaty 24/7', 'image_url' => '/assets/inpost_logo.png', 'price' => '10.99', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'DPD','description'=> 'Kurier DPD', 'image_url' => '/assets/dpd_logo.png', 'price' => '18.00', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'DPDPaidOnDelivery','description'=> 'Kurier DPD pobranie', 'image_url' => '/assets/dpd_logo.png', 'price' => '22.00', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ]);
    }
}
