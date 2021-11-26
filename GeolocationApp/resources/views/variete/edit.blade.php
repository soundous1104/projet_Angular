@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">

        <form action="{{url('variete/'.$variete->id)}}" method ="POST">
        
        <input name="_method" type="hidden" value="PUT">
        {{csrf_field()}}
            <div class="form-group">
            <label for="domaine">Culture</label>
            <select name="cultures" value="$selection">
             @foreach($culture as $culture)
            <option value="{{$culture->id}}">{{$culture->cultures}}</option>
            @endforeach
            </select>
           </div>
            <div class="form-group">
            <label for="superficie">Variété:</label>
            <input type="text"  name="superficie" class="form-control" value="{{$variete->varietes}}"></div>
            
            <input type="submit"   class="form-control btn btn-danger" value="Modifier"></div>

        </form>
        </div>
    </div>
</div>



@endsection

