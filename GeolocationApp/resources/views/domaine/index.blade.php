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
            
            <h3>DOMAINES:</h3>
            <div class="pull-right">
                <a href="{{url('domaine/create')}}">Nouveau domaine</a>
            </div>
            <table class="table">
                <head>
                <tr>
                    
                    <th>Domaines: </th>
                   
                    <th>Actions</th>
                </tr>
                </head>
                <body>
                    
                    @foreach($domaine as $domaine)
                    <tr>
                    
                        <td>{{$domaine->domaines}}</td>
                      
                      
                        <td>  

                            <form action="{{url('domaine/'.$domaine->id)}}"  method="post">
                            {{csrf_field()}}
                            {{method_field('DELETE')}}

                            <a href="" class="btn btn-primary" >Delails</a>
                            <a href="{{url('domaine/'.$domaine->id.'/edit')}}" class="btn btn-default">Editer</a>

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