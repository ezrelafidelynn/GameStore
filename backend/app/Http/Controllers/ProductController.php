<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        try {
            $products = Product::all()->map(function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'price' => $product->price,
                    'discount' => $product->discount,
                    'final_price' => $product->final_price,
                    'image_url' => $product->image_url,
                    'category' => $product->category,
                    'description' => $product->description,
                    'rating' => $product->rating,
                    'difficulty' => $product->difficulty,
                    'created_at' => $product->created_at,
                    'updated_at' => $product->updated_at,
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $products
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch products'
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric|min:0',
                'discount' => 'sometimes|integer|min:0|max:100',
                'image_url' => 'sometimes|string|max:255',
                'category' => 'required|string|max:255',
                'description' => 'sometimes|string',
                'rating' => 'sometimes|integer|min:1|max:5',
                'difficulty' => 'sometimes|string|max:255'
            ]);

            $product = Product::create($validated);

            return response()->json([
                'success' => true,
                'data' => [
                    'id' => $product->id,
                    'name' => $product->name,
                    'price' => $product->price,
                    'discount' => $product->discount,
                    'final_price' => $product->final_price,
                    'image_url' => $product->image_url,
                    'category' => $product->category,
                    'description' => $product->description,
                    'rating' => $product->rating,
                    'difficulty' => $product->difficulty,
                    'created_at' => $product->created_at,
                    'updated_at' => $product->updated_at,
                ],
                'message' => 'Product created successfully'
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create product'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product): JsonResponse
    {
        try {
            return response()->json([
                'success' => true,
                'data' => [
                    'id' => $product->id,
                    'name' => $product->name,
                    'price' => $product->price,
                    'discount' => $product->discount,
                    'final_price' => $product->final_price,
                    'image_url' => $product->image_url,
                    'category' => $product->category,
                    'description' => $product->description,
                    'rating' => $product->rating,
                    'difficulty' => $product->difficulty,
                    'created_at' => $product->created_at,
                    'updated_at' => $product->updated_at,
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product): JsonResponse
    {
        try {
            $validated = $request->validate([
                'name' => 'sometimes|string|max:255',
                'price' => 'sometimes|numeric|min:0',
                'discount' => 'sometimes|integer|min:0|max:100',
                'image_url' => 'sometimes|string|max:255',
                'category' => 'sometimes|string|max:255',
                'description' => 'sometimes|string',
                'rating' => 'sometimes|integer|min:1|max:5',
                'difficulty' => 'sometimes|string|max:255'
            ]);

            $product->update($validated);

            return response()->json([
                'success' => true,
                'data' => [
                    'id' => $product->id,
                    'name' => $product->name,
                    'price' => $product->price,
                    'discount' => $product->discount,
                    'final_price' => $product->final_price,
                    'image_url' => $product->image_url,
                    'category' => $product->category,
                    'description' => $product->description,
                    'rating' => $product->rating,
                    'difficulty' => $product->difficulty,
                    'created_at' => $product->created_at,
                    'updated_at' => $product->updated_at,
                ],
                'message' => 'Product updated successfully'
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update product'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product): JsonResponse
    {
        try {
            $product->delete();

            return response()->json([
                'success' => true,
                'message' => 'Product deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete product'
            ], 500);
        }
    }
}
