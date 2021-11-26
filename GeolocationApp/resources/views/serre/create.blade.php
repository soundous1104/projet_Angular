@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">
           
        <form action="/serre" method ="POST">
            {{csrf_field()}}
            <div class="form-group">
            <label for="domaineId"> Domaine:</label>
            
            <select name="domaines">
             @foreach($domaine as $domaine)
            <option value="{{$domaine->domaines}}">{{$domaine->domaines}}</option>
            @endforeach
            </select>
           </div>

            <div class="form-group">
            <label for="numSerre"> Numero Serre</label>
            <input type="text" name="numSerre"  class="form-control"></div>

            <div class="form-group">
            <label for="superficie">Superficie en ha</label>
            <input type="text"  name="superficie" class="form-control"></div>

            <div class="form-group">
            
            <input type="submit"   class="form-control btn btn-primary" value="Enregistrer"></div>

        </form>
        </div>
    </div>
</div>



@endsection