var FamChefMaster = angular.module('FamChefMaster', [])
.factory('Factories', function(){
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

      return factory;

})
.controller('MainController', function($scope, Factories, Recipes) {
  $scope.days = Factories.getDays();
  //$scope.meals = Factories.getMeals();
  $scope.recipeList = Recipes.getRecipes();

  //$scope.meals = [];
 
});

FamChefMaster.factory('Recipes', function($http){

  var localRecipes=[];

    $http.get('recipes.json').
      success(function(data, status, headers, config) {
        //$scope.recipes = data;
        localRecipes =data;
        console.log(localRecipes);
      }).
      error(function(data, status, headers, config) {
        // log error
      });

  var factory = {};

  factory.getRecipes = function(){
    return localRecipes;
  }

  return factory;


});

//var controllers = {};
//var factories = {};

//init();

//function init(){
  //$scope.days = FamChefMaster.Factories.getDays();
//}

//$scope.days = $scope.Factories.getDays();