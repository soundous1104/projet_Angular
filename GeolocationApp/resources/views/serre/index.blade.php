@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">
        @if(session()->has('success'))
            <div class="alert alert-success">
                {{session()->get('success')}}

            </div>
            @endif
            <h3>SERRES:</h3>
            <div class="pull-right">
                <a href="{{url('serre/create')}}">Nouvelle serre</a>
            </div>
            <table class="table">
                <head>
                <tr>
                    
                    <th>Domaines: </th>
                    <th>serre: </th>
                    <th>Superfecie en ha: </th>
                    <th>Actions</th>
                </tr>
                </head>
                <body>
                    
                    @foreach($serres as $serre)
                  
                    <tr>
                    
                        <td>{{$serre->domaine->domaines}}</td>
                        <td>{{$serre->num_serre}}</td>
                        <td>{{$serre->sup_serre_ha}}</td>
                      
                      
                        <td>  

                            <form action="{{url('serre/'.$serre->id)}}"  method="post">
                            {{csrf_field()}}
                            {{method_field('DELETE')}}

                            <a href="" class="btn btn-primary" >Delails</a>
                            <a href="{{url('serre/'.$serre->id.'/edit')}}" class="btn btn-default">Editer</a>

                            <button type="submit" class="btn btn-danger">Supprimer</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </body>
               
            </table>


        </div>
    </div>
</div>




@endsection