@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">

        <form action="{{url('culture')}}" method ="post">
        {{csrf_field()}}
            <div class="form-group">
            <label for="culture">Culture:</label>
            <input type="text" name="culture"  class="form-control" placeholder="Entrer la culture"></div>

           
            
            <input type="submit"   class="form-control btn btn-primary" value="Enregistrer"></div>

        </form>
        </div>
    </div>
</div>



@endsection