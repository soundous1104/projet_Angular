@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">

        <form action="{{url('domaine/'.$domaine->id)}}" method ="POST">
        
        <input name="_method" type="hidden" value="PUT">
        {{csrf_field()}}
            <div class="form-group">
            <label for="domaine">domaine</label>
            <input type="text" name="domaine"  class="form-control" value="{{$domaine->domaines }}"></div>
            
            <input type="submit"   class="form-control btn btn-danger" value="Modifier"></div>

        </form>
        </div>
    </div>
</div>



@endsection