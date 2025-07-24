<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BasicController;
use App\Http\Controllers\Controller;
use App\Models\General;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Routing\ResponseFactory;
use Illuminate\Support\Facades\Log;
use SoDe\Extend\Response;

class GeneralController extends BasicController
{
    public $model = General::class;
    public $reactView = 'Admin/Generals';

    public function setReactViewProperties(Request $request)
    {
        $generals = General::all();
        return [
            'generals' => $generals
        ];
    }

    public function save(Request $request): HttpResponse|ResponseFactory
    {
        $response = Response::simpleTryCatch(function () use ($request) {
            $body = $request->all();
            
            // Debug logging para ver qué datos llegan
            Log::info('GeneralController save - Request data:', $body);
            
            $processedCount = 0;
            
            // Si el cuerpo no es un array de arrays, entonces es un array directo de objetos
            // Verificamos si es un array directo de configuraciones generales
            $isDirectArray = !empty($body) && is_array($body) && isset($body[0]);
            
            if ($isDirectArray) {
                // Es un array directo de objetos de configuración
                foreach ($body as $record) {
                    if (isset($record['correlative']) && isset($record['name'])) {
                        General::updateOrCreate([
                            'correlative' => $record['correlative']
                        ], [
                            'name' => $record['name'],
                            'description' => $record['description'] ?? ''
                        ]);
                        $processedCount++;
                    }
                }
            } else {
                // Formato anterior - cada clave es un correlativo y el valor es un objeto
                foreach ($body as $correlative => $record) {
                    if (is_array($record) && isset($record['name'])) {
                        General::updateOrCreate([
                            'correlative' => $correlative
                        ], [
                            'name' => $record['name'],
                            'description' => $record['description'] ?? ''
                        ]);
                        $processedCount++;
                    }
                }
            }
            
            Log::info("GeneralController save - Processed {$processedCount} records successfully");
            
            return [
                'message' => "Configuración general actualizada exitosamente ({$processedCount} elementos procesados)",
                'processed_count' => $processedCount
            ];
        });
        return response($response->toArray(), $response->status);
    }
}
