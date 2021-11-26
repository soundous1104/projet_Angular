<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

  <h3>list de serres</h3>
  <ul>
@foreach($serres as $serre)
<li> 
    <h4>{{$serre->fk_id_01_domaines}}</h4>
    <h4>{{$serre->num_serre}}</h4>
    <h4>{{$serre->sup_serre_ha}}</h4>
    <hr>
</li>
@endforeach
</ul>
</body>
</html>