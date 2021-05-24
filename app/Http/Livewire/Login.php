<?php

namespace App\Http\Livewire;

use App\Auth;
use Livewire\Component;

class Login extends Component
{
    public $username = '';
    public $password = '';
    public $error = '';
    public $url;

    public function render()
    {
        return view('livewire.login');
    }

    public function attemptLogin()
    {
        $this->error = '';
        if (Auth::login($this->username, $this->password)) {
            return redirect($this->url);
        }

        $this->error = 'We could not log you in, please try again.';
    }
}
