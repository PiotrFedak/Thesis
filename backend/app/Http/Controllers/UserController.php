<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::paginate(3);
        return response()->json($users, 200);
    }

    public function getCurrentUser()
    {
        if (Auth::check()) {
            $user = Auth::user();

            return response()->json(["user" => $user], 200);
        }

        return response()->json(["message" => "Użytkownik niezalogowany"], 401);
    }
}
