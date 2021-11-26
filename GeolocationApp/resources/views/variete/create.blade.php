@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">
           
        <form action="/variete" method ="POST">
            {{csrf_field()}}
            <div class="form-group">
            <label for="cultures"> Culture:</label>
            
            <select name="cultures">
             @foreach($culture as $culture)
            <option value="{{$culture->id}}">{{$culture->cultures}}</option>
            @endforeach
            </select>
           </div>

            <div class="form-group">
            <label for="variete"> Variété:</label>
            <input type="text" name="variete"  class="form-control"></div>

            <div class="form-group">
            
            <input type="submit"   class="form-control btn btn-primary" value="Enregistrer"></div>

        </form>
        </div>
    </div>
</div>



@endsection