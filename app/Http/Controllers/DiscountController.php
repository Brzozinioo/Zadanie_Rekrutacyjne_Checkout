<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckDiscountCodeRequest;
use App\Interfaces\DiscountRepositoryInterface;

class DiscountController extends Controller
{
    private DiscountRepositoryInterface $discountRepository;

    public function __construct(DiscountRepositoryInterface $discountRepository)
    {
        $this->discountRepository = $discountRepository;
    }

    // Kontroler zwracający informację o wprowadzonym przez użytkownika kodzie rabatowym
    public function check(CheckDiscountCodeRequest $request)
    {
        $validated = $request->validated();
        $code = $validated['code'];
        $discount = $this->discountRepository->getDiscountByCode($code);
        error_log($discount);
        if ($discount) {
            if ($discount['is_active']) {
                return response()->json([
                    'success' => true,
                    'discount' => $discount,
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Kod rabatowy jest już nieaktywny',
                ]);
            }
        } else
            return response()->json([
                'success' => false,
                'message' => 'Niepoprawny kod rabatowy'
            ]);
    }
}
