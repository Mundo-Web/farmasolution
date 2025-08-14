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
            'email' => 'admin@clickdentalperu.com'
        ], [
            'name' => 'Click Dental',
            'lastname' => 'Perú',
            'password' => 'C!1ckD3nt@lP3ru',
        ])->assignRole('Admin');
    }
}
