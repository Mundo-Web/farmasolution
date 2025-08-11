<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class NewUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate([
            'email' => 'admin@d2en1.com'
        ], [
            'name' => 'Admin',
            'lastname' => 'D2EN1',
            'password' => 'd2en12025#',
        ])->assignRole('Admin');
    }
}
