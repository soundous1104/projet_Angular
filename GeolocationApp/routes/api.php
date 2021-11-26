<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SerreController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();



});


   
 
    //Route::resource('serres', [SerreController::class]);
    Route::get('serres','SerreController@index');
    Route::get('domaines','DomaineController@index');
    Route::get('cultures','CultureController@index');
    Route::get('campagnes','CampagneController@index');
    Route::get('varietes','VarieteController@index');
    Route::get('assolements','AssolementController@index');
    Route::get('suivi','SuiviController@index');
    Route::get('map','MapController@index');




    Route::post('/domaines', 'DomaineController@store');
    Route::post('/cultures','CultureController@store');
    Route::post('/campagnes','CampagneController@store');
    Route::post('/serres','SerreController@store');
    Route::post('/varietes','VarieteController@store');
    Route::post('/assolements','AssolementController@store');
    Route::post('/suivi','SuiviController@store');
    Route::post('/map','MapController@store');
    
    Route::delete('domaines/{id}','DomaineController@destroy');
    Route::delete('cultures/{id}','CultureController@destroy');
    Route::delete('campagnes/{id}','CampagneController@destroy');
    Route::delete('serres/{id}','SerreController@destroy');
    Route::delete('varietes/{id}','VarieteController@destroy');
    Route::delete('assolements/{id}','AssolementController@destroy');
    Route::delete('suivi/{id}','SuiviController@destroy');

    Route::get('domaines/{id}/edit', 'DomaineController@edit');
    Route::get('cultures/{id}/edit', 'CultureController@edit');
    Route::get('campagnes/{id}/edit', 'CampagneController@edit');
    Route::get('serres/{id}/edit', 'SerreController@edit');
    Route::get('varietes/{id}/edit', 'VarieteController@edit');
    Route::get('suivi/{id}/edit','SuiviController@edit');



    Route::put('domaines/{id}', 'DomaineController@update');
    Route::put('cultures/{id}', 'CultureController@update');
    Route::put('campagnes/{id}', 'CampagneController@update');
    Route::put('serres/{id}', 'SerreController@update');
    Route::put('varietes/{id}', 'VarieteController@update');
    Route::put('assolements/{id}','AssolementController@update');
    Route::put('suivi/{id}','SuiviController@update');
