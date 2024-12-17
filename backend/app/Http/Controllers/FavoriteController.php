<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User; 

class FavoriteController extends Controller
{
    public function index()
    {
        /** @var User $user */
        $user = Auth::user();
        $favorites = $user->favorites ? json_decode($user->favorites, true) : [];
        return response()->json($favorites);
    }

    public function toggle(Request $request)
    {
        $request->validate(['team_id' => 'required|integer']);

        /** @var User $user */
        $user = Auth::user();
        $favorites = $user->favorites ? json_decode($user->favorites, true) : [];

        if (in_array($request->team_id, $favorites)) {
            $favorites = array_filter($favorites, fn ($id) => $id != $request->team_id);
        } else {
            $favorites[] = $request->team_id;
        }

        $user->favorites = json_encode(array_values($favorites));
        $user->save();

        return response()->json(['favorites' => $favorites]);
    }
}