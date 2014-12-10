var FamChefMaster = angular.module('FamChefMaster', [])
.factory('Factories', function($scope, $http){
      var days = [
        {
          'name' : 'Domingo',
          'breakfastName' : 'Desayuno',
          'lunchName' : 'Almuerzo',
          'supperName' : 'Cena',
        },
        {
          'name' : 'Lunes',
          'breakfastName' : 'Desayuno',
          'lunchName' : 'Almuerzo',
          'supperName' : 'Cena',
        },
        {
          'name' : 'Martes',
          'breakfastName' : 'Desayuno',
          'lunchName' : 'Almuerzo',
          'supperName' : 'Cena',
        },
        {
          'name' : 'Miércoles',
          'breakfastName' : 'Desayuno',
          'lunchName' : 'Almuerzo',
          'supperName' : 'Cena',
        },
        {
          'name' : 'Jueves',
          'breakfastName' : 'Desayuno',
          'lunchName' : 'Almuerzo',
          'supperName' : 'Cena',
        },
        {
          'name' : 'Viernes',
          'breakfastName' : 'Desayuno',
          'lunchName' : 'Almuerzo',
          'supperName' : 'Cena',
        },
        {
          'name' : 'Sábado',
          'breakfastName' : 'Desayuno',
          'lunchName' : 'Almuerzo',
          'supperName' : 'Cena',
        },
      ];

      var meals = [
        {
          'name' : 'Gallo Pinto',
          'calories' : '95',
          'other' : 'Other data'
        },
        {
          'name' : 'Macarrones',
          'calories' : '34',
          'other' : 'Other data'
        },
        {
          'name' : 'Pizza',
          'calories' : '30',
          'other' : 'Other data'    
        },
        {
          'name' : 'Lentejas',
          'calories' : '8',
          'other' : 'Other data'    
        }
      ];

      var factory = {};

        factory.getDays = function(){
          return days;
        };

        factory.getMeals = function(){
          return meals;
        }

        $scope.recipes = [];

        factory.getRecipies = function($scope, $http) {
          $http.get('/data/recipes.json').
            success(function(data, status, headers, config) {
              $scope.recipes = data;
              // console.log($scope.recipes);
            }).
            error(function(data, status, headers, config) {
              // log error
            });
        }
      return factory;

})
.controller('MainController', function($scope, $http, Factories) {
  $scope.days = Factories.getDays();
  //$scope.meals = Factories.getRecipies();

  $scope.meals = [];
  $http.get('/data/recipes.json').success(function(data) { 
      console.log("success!");
      $scope.meals = data.meals;
          console.log(data.meals);
      });   
  });

var controllers = {};
var factories = {};

//init();

function init(){
  //$scope.days = FamChefMaster.Factories.getDays();
}

//$scope.days = $scope.Factories.getDays();