<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/serre','SerreController@index');
Route::get('serre/create','SerreController@create');
Route::post('serre','SerreController@store');
Route::get('serre/{id}/edit','SerreController@edit');
Route::put('serre/{id}','SerreController@update');
Route::delete('serre/{id}','SerreController@destroy');



Route::get('/culture','CultureController@index');
Route::get('culture/create','CultureController@create');
Route::post('culture','CultureController@store');
Route::get('culture/{id}/edit','CultureController@edit');
Route::put('culture/{id}','CultureController@update');
Route::delete('culture/{id}','CultureController@destroy');




Route::get('/domaine','DomaineController@index');

//Route::get('/domaine','App\Http\Controllers\DomaineController@newDomaine');
Route::get('domaine/create','DomaineController@create');
Route::post('domaine','DomaineController@store');
Route::get('domaine/{id}/edit','DomaineController@edit');
Route::put('domaine/{id}','DomaineController@update');
Route::delete('domaine/{id}','DomaineController@destroy');


Route::get('/campagne','CampagneController@index');
Route::get('campagne/create','CampagneController@create');
Route::post('campagne','CampagneController@store');
Route::get('campagne/{id}/edit','CampagneController@edit');
Route::put('campagne/{id}','CampagneController@update');
Route::delete('campagne/{id}','CampagneController@destroy');

Route::get('/variete','VarieteController@index');
Route::get('variete/create','VarieteController@create');
Route::post('variete','VarieteController@store');
Route::get('variete/{id}/edit','VarieteController@edit');
Route::put('variete/{id}','VarieteController@update');
Route::delete('variete/{id}','VarieteController@destroy');


Route::get('/assolement','AssolementController@index');
Route::get('assolement/create','AssolementController@create');
Route::post('assolement','AssolementController@store');
Route::get('assolement/{id}/edit','AssolementController@edit');
Route::put('assolement/{id}','AssolementController@update');
Route::delete('assolement/{id}','AssolementController@destroy');


//Route::get('/domaine', 'DomaineController@create');
/*
Route::get('/domaine',function(){
    return view('domaine');
});

Route::get('/serre',function(){
    return view('serre');
});
Route::get('/culture',function(){
    return view('culture');
});
Route::get('/variete',function(){
    return view('variete');
});

Route::get('/assolement',function(){
    return view('assolement');
});*/




#Route::get('/serres', 'App\Http\Controllers\SerreController@newSerre');
#Route::get('/serrelist', 'App\Http\Controllers\SerreController@serreList');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
