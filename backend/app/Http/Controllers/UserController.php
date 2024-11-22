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
    public function destroy($id)
    {
    $user = User::find($id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $user->delete();

    return response()->json(['message' => 'User deleted successfully'], 200);
    }
    public function update(Request $request, $id)
    {
    $user = User::find($id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255|unique:users,email,' . $id,
        'role' => 'sometimes|string|in:user,admin',
    ]);

    $user->update($validatedData);

    return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);
    }
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255|unique:users',
        'password' => 'required|string|min:1',
        'role' => 'required|string|in:user,admin',
    ]);

    $user = User::create([
        'name' => $validatedData['name'],
        'email' => $validatedData['email'],
        'password' => bcrypt($validatedData['password']),
        'role' => $validatedData['role'],
    ]);

    return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
}


}
