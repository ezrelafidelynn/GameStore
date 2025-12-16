<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Product API routes
Route::apiResource('products', ProductController::class);

// Additional product routes
Route::get('/products/category/{category}', [ProductController::class, 'getByCategory']);
Route::get('/products/search/{term}', [ProductController::class, 'search']);