<?php

namespace App;

use App\Models\User;

class Auth
{
    public static $session = 'peril-vault.auth';

    public static function user()
    {
        return User::find(optional(session(self::$session))->id);
    }

    public static function hash($password)
    {
        return password_hash($password, PASSWORD_BCRYPT);
    }

    public static function login($name, $password)
    {
        $user = User::where('name', $name)
            ->get()
            ->skipUntil(function ($user) use ($password) {
                return (password_verify($password, $user->password));
            })
            ->first();

        session([self::$session => $user]);

        return $user;
    }

    public static function logout()
    {
        session()->forget(self::$session);
    }
}
