<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
<body>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="{{url('domaine')}}">Domaine</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="{{url('campagne')}}">Campagne <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="{{url('serre')}}">Serre <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="{{url('culture')}}">Culture <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="{{url('variete')}}">Variete <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="{{url('assolement')}}">Assolement <span class="sr-only">(current)</span></a></li>
        
      </ul>
     
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

@yield('content')






   <script src="{{asset('assets/js/jquery.min.js')}}"> </script>
   <script src="{{asset('assets/js/bootsrap.min.js')}}"> </script>
</body>
</html>