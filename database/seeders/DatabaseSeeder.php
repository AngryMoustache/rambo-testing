<?php

namespace Database\Seeders;

use AngryMoustache\Rambo\Facades\Rambo;
use AngryMoustache\Rambo\Models\Administrator;
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
        Administrator::create([
            'username' => 'admin',
            'email' => 'admin@rambo.com',
            'password' => Rambo::passwordHash('test')
        ]);
    }
}
