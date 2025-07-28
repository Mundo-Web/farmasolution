<?php

namespace App\Helpers;

use App\Models\General;

class CulqiConfig
{
    public static function getPublicKey()
    {
        try {
            $general = General::where('correlative', 'checkout_culqi_public_key')->first();
            return $general ? $general->description : env('CULQI_PUBLIC_KEY');
        } catch (\Throwable $th) {
            return env('CULQI_PUBLIC_KEY');
        }
    }

    public static function getSecretKey()
    {
        try {
            $general = General::where('correlative', 'checkout_culqi_private_key')->first();
            return $general ? $general->description : env('CULQI_PRIVATE_KEY');
        } catch (\Throwable $th) {
            return env('CULQI_PRIVATE_KEY');
        }
    }

    public static function isEnabled()
    {
        try {
            $general = General::where('correlative', 'checkout_culqi')->first();
            return $general ? filter_var($general->description, FILTER_VALIDATE_BOOLEAN) : false;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public static function getName()
    {
        try {
            $general = General::where('correlative', 'checkout_culqi_name')->first();
            return $general ? $general->description : 'Culqi';
        } catch (\Throwable $th) {
            return 'Culqi';
        }
    }

    public static function getApiUrl()
    {
        return env('CULQI_API', 'https://api.culqi.com/v2');
    }
}
