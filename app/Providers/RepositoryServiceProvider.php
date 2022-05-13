<?php

namespace App\Providers;


use Illuminate\Support\ServiceProvider;

use App\Interfaces\OrderRepositoryInterface;
use App\Interfaces\PaymentMethodRepositoryInterface;
use App\Interfaces\ShippingMethodRepositoryInterface;
use App\Interfaces\DiscountRepositoryInterface;
use App\Interfaces\ItemRepositoryInterface;
use App\Interfaces\OrderItemRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;

use App\Repositories\OrderRepository;
use App\Repositories\PaymentMethodRepository;
use App\Repositories\ShippingMethodRepository;
use App\Repositories\DiscountRepository;
use App\Repositories\ItemRepository;
use App\Repositories\OrderItemRepository;
use App\Repositories\UserRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            OrderRepositoryInterface::class,
            OrderRepository::class
        );
        $this->app->bind(
            PaymentMethodRepositoryInterface::class,
            PaymentMethodRepository::class
        );
        $this->app->bind(
            OrderItemRepositoryInterface::class,
            OrderItemRepository::class
        );
        $this->app->bind(
            DiscountRepositoryInterface::class,
            DiscountRepository::class
        );
        $this->app->bind(
            ShippingMethodRepositoryInterface::class,
            ShippingMethodRepository::class
        );
        $this->app->bind(
            ItemRepositoryInterface::class,
            ItemRepository::class
        );
        $this->app->bind(
            UserRepositoryInterface::class,
            UserRepository::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
