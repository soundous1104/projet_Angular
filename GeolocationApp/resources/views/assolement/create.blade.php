@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">
           
        <form action="/assolement" method ="POST">
            {{csrf_field()}}
            <div>
            
            <label for="domaineId"> Domaine:</label>
            <select name="domaines">
             @foreach($domaines as $domaine)
            <option value="{{$domaine->domaines}}">{{$domaine->domaines}}</option>
             @endforeach
            </select>
          


           
            <label for="serre"> Serre:</label>
            <select name="serres">
             @foreach($serres as $serre)
            <option value="{{$serre->num_serre}}">{{$serre->num_serre}}</option>
             @endforeach
            </select>

           </div>
           <div>
               
            <label for="culture"> Culture:</label>
            <select name="cultures">
             @foreach($cultures as $culture)
            <option value="{{$culture->cultures}}">{{$culture->cultures}}</option>
             @endforeach
            </select>
            <label for="variete"> Variété:</label>
            <select name="varietes">
             @foreach($varietes as $variete)
            <option value="{{$variete->varietes}}">{{$variete->varietes}}</option>
             @endforeach
            </select>
           </div>
           <label for="variete"> Campagnes:</label>
            <select name="campagnes">
             @foreach($campagnes as $campagne)
            <option value="{{$campagne->campagne}}">{{$campagne->campagne}}</option>
             @endforeach
            </select>
           <div>


           </div>


           

            <div class="form-group">
            
            <input type="submit"   class="form-control btn btn-primary" value="Enregistrer"></div>

        </form>
        </div>
    </div>
</div>



@endsection