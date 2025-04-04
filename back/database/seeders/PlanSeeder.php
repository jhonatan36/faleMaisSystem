<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = [
            [
                'destination_id' => 1,
                'description' => 'FaleMais 30',
                'minutes' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'destination_id' => 3,
                'description' => 'FaleMais 60',
                'minutes' => 60, 
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'destination_id' => 6,
                'description' => 'FaleMais 120',
                'minutes' => 120, 
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ];

        DB::table('plans')->insert($plans);
    }
}
