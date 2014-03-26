var FamChefMaster = angular.module('FamChefMaster', []);

FamChefMaster.controller('MainController', function($scope) {
  $scope.days = [
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
  $scope.meals = [
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
  ]
});