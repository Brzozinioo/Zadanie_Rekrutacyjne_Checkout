<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class DiscountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('discounts')->insert([
           ['name' => 'Rabat 10%', 'code' => 'RABAT10', 'uses'=> 0, 'discountAmount' => '10.00', 'is_fixed'=> true, 'is_active' => true, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
           ['name' => 'Rabat 35 zł', 'code' => '35PLN', 'uses'=> 0, 'discountAmount' => '35.00', 'is_fixed'=> false, 'is_active' => true, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
           ['name' => 'Rabat 50 zł', 'code' => '50PLN', 'uses'=> 0, 'discountAmount' => '50.00', 'is_fixed'=> false, 'is_active' => false, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}