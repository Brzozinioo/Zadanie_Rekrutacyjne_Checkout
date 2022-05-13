<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payment_methods')->insert([
            ['name' => 'payu','description' => 'PayU','image_url' => '/assets/payu_logo.png', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'payment_on_delivery','description' => 'Płatność przy odbiorze','image_url' => '/assets/wallet.png', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'bank_transfer','description' => 'Przelew bankowy - zwykły','image_url' => '/assets/transfer_form.png', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ]);        
    }
}


