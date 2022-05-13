<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            ['name' => 'Przedmiot 1', 'image_url' => 'item1.png', 'price' => '10.99', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Przedmiot 2', 'image_url' => 'item2.png', 'price' => '18.00', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Przedmiot 3', 'image_url' => 'item3.png', 'price' => '22.00', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ]);

    }
}
