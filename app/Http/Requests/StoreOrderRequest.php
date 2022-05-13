<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'terms_and_conditions' => 'required',
            'selected_delivery_method' => 'required',
            'selected_payment_method' => 'required',
            'g_recaptcha_response' => 'required|captcha'

        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages()
    {
        return [

            'terms_and_conditions.required' => 'Musisz zaakceptować warunki korzystania z serwisu',
            'selected_delivery_method.required' => 'Musisz wybrać metodę dostawy',
            'selected_payment_method.required' => 'Musisz wybrać metodę płatności',
            'g_recaptcha_response.required' => 'Musisz rozwiązać kod zabezpieczający',
        ];
    }
}
