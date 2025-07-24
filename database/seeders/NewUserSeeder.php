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
            'email' => 'admin@paani.pe'
        ], [
            'name' => 'Admin',
            'lastname' => 'Paani',
            'password' => 'paani2025#',
        ])->assignRole('Admin');
    }
}
