@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">

        <form action="{{url('serre/'.$serre->id)}}" method ="POST">
        
        <input name="_method" type="hidden" value="PUT">
        {{csrf_field()}}
            <div class="form-group">
            <label for="domaine">Domaine</label>
            <select name="domaines" value="$selection">
             @foreach($domaine as $domaine)
            <option value="{{$domaine->id}}">{{$domaine->domaines}}</option>
            @endforeach
            </select>
           </div>
 
            <div class="form-group">
            <label for="numSerre"> Numero Serre</label>
            <input type="text" name="numSerre"  class="form-control" value="{{ $serre->num_serre}}"></div>

            <div class="form-group">
            <label for="superficie">Superficie en ha</label>
            <input type="text"  name="superficie" class="form-control" value="{{$serre->sup_serre_ha}}"></div>
            
            <input type="submit"   class="form-control btn btn-danger" value="Modifier"></div>

        </form>
        </div>
    </div>
</div>



@endsection