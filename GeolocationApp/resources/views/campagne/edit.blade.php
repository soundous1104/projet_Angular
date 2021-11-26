@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">

        <form action="{{url('campagne/'.$campagne->id)}}" method ="POST">
        
        <input name="_method" type="hidden" value="PUT">
        {{csrf_field()}}
            <div class="form-group">
            <label for="campagne">Campagne</label>
            <input type="text" name="campagne"  class="form-control" value="{{$campagne->campagne}}"></div>
            
            <input type="submit"   class="form-control btn btn-danger" value="Modifier"></div>

        </form>
        </div>
    </div>
</div>



@endsection