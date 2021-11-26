@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">

        <form action="{{url('domaine')}}" method ="post">
        {{csrf_field()}}
            <div class="form-group">
            <label for="domaine">domaine</label>
            <input type="text" name="domaine"  class="form-control" placeholder="Entrer le domaine"></div>

           
            
            <input type="submit"   class="form-control btn btn-primary" value="Enregistrer"></div>

        </form>
        </div>
    </div>
</div>



@endsection