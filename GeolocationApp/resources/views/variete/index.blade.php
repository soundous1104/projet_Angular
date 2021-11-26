@extends('layouts.master')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12">
       
            <h3>VARIETES:</h3>
            <div class="pull-right">
                <a href="{{url('variete/create')}}">Nouvelle variete</a>
            </div>
            <table class="table">
                <head>
                <tr>
               
                    <th>Cultures: </th>
                    <th>Varietes: </th>
                    <th>Actions</th>
                </tr>
                </head>
                <body>
                    
                    @foreach($varietes as $variete)
                    
                    <tr>                           
                        
                        <td>{{$variete->culture->cultures}}</td>
                        <td>{{$variete->varietes}}</td>
                       
                      
                      
                        <td>  

                            <form action="{{url('variete/'.$variete->id)}}"  method="post">
                            {{csrf_field()}}
                            {{method_field('DELETE')}}

                            <a href="" class="btn btn-primary" >Delails</a>
                            <a href="{{url('variete/'.$variete->id.'/edit')}}" class="btn btn-default">Editer</a>

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