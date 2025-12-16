<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'discount',
        'image_url',
        'category',
        'description',
        'rating',
        'difficulty'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'discount' => 'integer',
        'rating' => 'integer'
    ];

    // Calculate final price after discount
    public function getFinalPriceAttribute()
    {
        if ($this->discount > 0) {
            return round($this->price * (1 - $this->discount / 100), 2);
        }
        return $this->price;
    }
}
