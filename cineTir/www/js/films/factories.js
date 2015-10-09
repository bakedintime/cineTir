angular.module('cineTir.films.factories', [])

.factory('Peliculas', function($scope, $http){
  // Get data in spanish: http://theimdbapi.betaeasy.com/thread/7051

  // URL del API para obtener datos de películas
  var apiUrl = 'www.omdbapi.com/';
  // Formato default para obtener información del API
  var dataFormat = 'json';

  var service = {
    // Modifica el tipo de formato en el que
    // se devuelve la respuesta del API
    changeDataFormat:function(newFormat){
      if(newFormat!=='json' && newFormat!=='xml'){
        console.log('Tried to set an unsupported data format.');
        return false;
      }
      dataFormat = newFormat;
    },
    // Obtiene la información de una película
    // por medio de su título
    // Devuelve un objeto Promise del que se debe
    // definir una función en case de exito y una
    // en caso de error
    getByName:function(name){
      return $http({
        url: apiUrl,
        method: 'GET',
        params: {
          't':name,
          'plot':'short',
          'r':dataFormat,
          'tomatoes':true
        }
      });
    },
    // Obtiene la información de una película
    // por medio de su ID
    // Devuelve un objeto Promise del que se debe
    // definir una función en case de exito y una
    // en caso de error
    getByID:function(id){
      return $http({
        url: apiUrl,
        method: 'GET',
        params: {
          'i':id,
          'plot':'short',
          'r':dataFormat,
          'tomatoes':true
        }
      });
    }
  };
  return service;
});
