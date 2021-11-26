@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">

        <form action="{{url('campagne')}}" method ="post">
        {{csrf_field()}}
            <div class="form-group">
            <label for="campagne">Campagne:</label>
            <input type="text" name="campagne"  class="form-control" placeholder="Entrer la campagne"></div>

           
            
            <input type="submit"   class="form-control btn btn-primary" value="Enregistrer"></div>

        </form>
        </div>
    </div>
</div>



@endsection