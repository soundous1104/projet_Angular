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
            <h3>ASSOLEMENT:</h3>
            <div class="pull-right">
                <a href="{{url('assolement/create')}}">Nouveau assolement</a>
            </div>
            <table class="table">
                <head>
                <tr>
                    
                    <th>Domaines: </th>
                    <th>serre: </th>
                    <th>Superfecie en ha: </th>
                    <th>Culture: </th>
                    <th>Cycle: </th>
                    <th>Actions</th>
                </tr>
                </head>
                <body>
                    
                    @foreach($assolements as $assolement)
                   
                    <tr>
                    
                        <td>{{$assolement->serre->domaine->domaines}}</td>
                        <td>{{$assolement->serre->num_serre}}</td>
                        <td>{{$assolement->serre->sup_serre_ha}}</td>
                        <td>{{$assolement->variete->culture->cultures }}</td>
                        <td>{{$assolement->id_cycle}}</td>
                      
                      
                        <td>  

                            <form action="{{url('assolement/'.$assolement->id)}}"  method="post">
                            {{csrf_field()}}
                            {{method_field('DELETE')}}

                            <a href="" class="btn btn-primary" >Delails</a>
                            <a href="{{url('assolement/'.$assolement->id.'/edit')}}" class="btn btn-default">Editer</a>

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