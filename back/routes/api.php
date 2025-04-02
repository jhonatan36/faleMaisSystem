<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CalculatorController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\PlanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::group(['prefix' => 'destination'], function (){
        Route::get('/', [DestinationController::class, 'index']);
        Route::get('/{id}', [DestinationController::class, 'show']);
        Route::post('/', [DestinationController::class, 'store']);
        Route::put('/{id}', [DestinationController::class, 'update']);
        Route::delete('/{id}', [DestinationController::class, 'destroy']);
    });
    
    Route::group(['prefix' => 'plan'], function (){
        Route::get('/', [PlanController::class, 'index']);
        Route::get('/{id}', [PlanController::class, 'show']);
        Route::post('/', [PlanController::class, 'store']);
        Route::put('/{id}', [PlanController::class, 'update']);
        Route::delete('/{id}', [PlanController::class, 'destroy']);
    });
    
    Route::group(['prefix' => 'calculator'], function (){
        Route::get('/', [CalculatorController::class, 'calculate']);
    });
});