<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'League of Legends',
                'price' => 59.99,
                'discount' => 50,
                'image_url' => '/images/league-of-legends.jpg',
                'category' => 'MOBA',
                'description' => 'Join the legendary MOBA experience with over 140 champions to master. Team up with friends and compete in the world\'s most popular PC game.',
                'rating' => 5,
                'difficulty' => 'Medium'
            ],
            [
                'name' => 'Mario Kart 8 Deluxe',
                'price' => 59.99,
                'discount' => 30,
                'image_url' => '/images/mario-kart-8.jpg',
                'category' => 'Racing',
                'description' => 'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere!',
                'rating' => 5,
                'difficulty' => 'Easy'
            ],
            [
                'name' => 'DOTA II',
                'price' => 89.99,
                'discount' => 30,
                'image_url' => '/images/dota2.jpg',
                'category' => 'MOBA',
                'description' => 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes.',
                'rating' => 4,
                'difficulty' => 'Medium'
            ],
            [
                'name' => 'King of Fighters XV',
                'price' => 69.99,
                'discount' => 20,
                'image_url' => '/images/kof15.jpg',
                'category' => 'Fighting',
                'description' => 'After KOF XIV\'s story came to an epic climax, a new saga continues in KOF XV with a new story.',
                'rating' => 4,
                'difficulty' => 'Hard'
            ],
            [
                'name' => 'Forza Horizon 5',
                'price' => 129.00,
                'discount' => 0,
                'image_url' => '/images/forza-horizon-5.jpg',
                'category' => 'Racing',
                'description' => 'Your greatest Horizon Adventure awaits! Explore the vibrant open world landscapes of Mexico.',
                'rating' => 5,
                'difficulty' => 'High'
            ],
            [
                'name' => 'Halo Infinite',
                'price' => 99.99,
                'discount' => 15,
                'image_url' => '/images/halo-infinite.jpg',
                'category' => 'Shooter',
                'description' => 'The legendary Halo series returns with the most expansive Master Chief story yet.',
                'rating' => 4,
                'difficulty' => 'Medium'
            ],
            [
                'name' => 'Fortnite Spider-Man',
                'price' => 69.99,
                'discount' => 60,
                'image_url' => '/images/fortnite-spiderman.jpg',
                'category' => 'Battle Royale',
                'description' => 'Swing into action with Spider-Man in this epic Fortnite crossover event.',
                'rating' => 4,
                'difficulty' => 'Easy'
            ],
            [
                'name' => 'Diablo III',
                'price' => 49.99,
                'discount' => 0,
                'image_url' => '/images/diablo3.jpg',
                'category' => 'RPG',
                'description' => 'Prepare yourself for the darkest chapter of the Diablo saga.',
                'rating' => 4,
                'difficulty' => 'High'
            ],
            [
                'name' => 'Cyberpunk 2077',
                'price' => 79.99,
                'discount' => 40,
                'image_url' => '/images/cyberpunk2077.jpg',
                'category' => 'RPG',
                'description' => 'An open-world, action-adventure story set in Night City, a megalopolis obsessed with power.',
                'rating' => 4,
                'difficulty' => 'High'
            ],
            [
                'name' => 'Among Us',
                'price' => 14.99,
                'discount' => 25,
                'image_url' => '/images/among-us.jpg',
                'category' => 'Party',
                'description' => 'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship.',
                'rating' => 5,
                'difficulty' => 'Easy'
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
