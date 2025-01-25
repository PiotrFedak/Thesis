<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var User $user */
        $user = User::create([
            "name" => $data["name"],
            "email" => $data["email"],
            "password" => bcrypt($data["password"]),
            'role' => 'user',
        ]);
        $token = $user->createToken("auth_token")->plainTextToken;

        $res = [
            "user" => $user,
            "token" => $token,
        ];

        return response($res);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
    
        if (!Auth::attempt($credentials)) {
            return response()->json(["message" => "Invalid credentials"], 401);
        }
    
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken("auth_token")->plainTextToken;
    
        return response()->json([
            "user" => [
                "id" => $user->id,
                "name" => $user->name,
                "email" => $user->email,
                "role" => $user->role,
            ],
            "token" => $token,
        ]);
    }
    

    public function logout(Request $request)
    {
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete;

        return response("", 204);
    }
}
