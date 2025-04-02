<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'destination'], function (){
    Route::get('/', 'App\Http\Controllers\DestinationController@index');
    Route::get('/{id}', 'App\Http\Controllers\DestinationController@show');
    Route::post('/', 'App\Http\Controllers\DestinationController@store');
    Route::put('/{id}', 'App\Http\Controllers\DestinationController@update');
    Route::delete('/{id}', 'App\Http\Controllers\DestinationController@destroy');
});

Route::group(['prefix' => 'plan'], function (){
    Route::get('/', 'App\Http\Controllers\PlanController@index');
    Route::get('/{id}', 'App\Http\Controllers\PlanController@show');
    Route::post('/', 'App\Http\Controllers\PlanController@store');
    Route::put('/{id}', 'App\Http\Controllers\PlanController@update');
    Route::delete('/{id}', 'App\Http\Controllers\PlanController@destroy');
});

Route::group(['prefix' => 'calculator'], function (){
    Route::get('/', 'App\Http\Controllers\CalculatorController@calculate');
});