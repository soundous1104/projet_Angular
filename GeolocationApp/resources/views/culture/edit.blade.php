@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">

        <form action="{{url('culture/'.$culture->id)}}" method ="POST">
        
        <input name="_method" type="hidden" value="PUT">
        {{csrf_field()}}
            <div class="form-group">
            <label for="culture">Culture</label>
            <input type="text" name="culture"  class="form-control" value="{{$culture->cultures }}"></div>
            
            <input type="submit"   class="form-control btn btn-danger" value="Modifier"></div>

        </form>
        </div>
    </div>
</div>



@endsection