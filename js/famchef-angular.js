var FamChefMaster = angular.module('FamChefMaster', [])
.factory('Factories', ['$route','$http', function($http){
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

      var meals = 
      [
            {
              "id": "1",
              "title": "Gallo Pinto",
              "description": "Gallo Pinto a lo tico",
              "servings": {
                "unit": "persons",
                "text": "4"
              },
              "preparation-time": "0:20:00",
              "tags": {
                "locale": "es",
                "text": "gallo pinto, arroz, frijoles, desayuno, tipico, costa rica "
              },
              "media": {
                "images": {
                  "img": {
                    "id": "1",
                    "src": "http://www.gallopinto.com/gallopinto.jpg",
                    "alt": "Gallo Pinto",
                    "title": "Gallo Pinto"
                  }
                },
                "videos": {
                  "img": {
                    "id": "1",
                    "src": "http://www.gallopinto.com/gallopinto.jpg",
                    "alt": "Gallo Pinto",
                    "title": "Gallo Pinto"
                  }
                }
              },
              "ingredients": [
                {
                  "id": "1",
                  "title": "Lista de Ingredientes",
                  "ingredient": [
                    {
                      "id": "1",
                      "name": "Arroz",
                      "quantity": {
                        "unit": "cups",
                        "text": "4"
                      },
                      "description": "Arroz para el Pinto"
                    },
                    {
                      "id": "2",
                      "name": "Frijoles",
                      "quantity": {
                        "unit": "cups",
                        "text": "1.5"
                      },
                      "description": "Frijoles para el Pinto",
                      "nutricional_info": {
                        "grams": "15",
                        "calories": {
                          "unit": "gr",
                          "text": "15"
                        },
                        "fat": {
                          "unit": "gr",
                          "text": "15"
                        },
                        "protein": {
                          "unit": "gr",
                          "text": "15"
                        },
                        "carb": {
                          "unit": "gr",
                          "text": "15"
                        },
                        "sodium": {
                          "unit": "mg",
                          "text": "15"
                        },
                        "other": {
                          "name": "otros",
                          "unit": "kg",
                          "text": "Otros"
                        }
                      },
                      "brand": "Marca Don Pedro"
                    },
                    {
                      "id": "3",
                      "name": "Aceite",
                      "quantity": {
                        "unit": "cups",
                        "text": "0.5"
                      },
                      "description": "Natural"
                    },
                    {
                      "id": "4",
                      "name": "Sal",
                      "quantity": {
                        "unit": "ts",
                        "text": "1"
                      }
                    },
                    {
                      "id": "5",
                      "name": "Chile Dulce",
                      "quantity": {
                        "unit": "cups",
                        "text": "Chile dulce"
                      },
                      "description": "Chile dulce picado"
                    }
                  ]
                },
                {
                  "id": "2",
                  "ingredient": {
                    "id": "8",
                    "name": "Cebolla",
                    "quantity": { "unit": "cups" },
                    "description": "Cebolla picada"
                  }
                }
              ],
              "equipments": {
                "equipment": [
                  {
                    "id": "1",
                    "text": "Sarten"
                  },
                  { "id": "2" },
                  { "id": "3" },
                  { "id": "4" }
                ]
              },
              "directions": {
                "direction": [
                  {
                    "title": "Preparation",
                    "step": [
                      "Caliente el sarten",
                      "Coloque el chile dulce y la cebolla",
                      "Fria durante 4 minutos revolviendo ",
                      "Coloque el arroz y los frijoles"
                    ]
                  },
                  {
                    "title": "Serving",
                    "step": [
                      "Sirve caliente",
                      "Disfrute"
                    ]
                  }
                ]
              },
              "notes": "Esta es una receta"
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
        //$scope.recipes = [];

        /*factory.getRecipies = function() {
          var recipes;
          this.$http.get('recipes.json').
            success(function(data, status, headers, config) {
              recipes = data;
              // console.log($scope.recipes);
            }).
            error(function(data, status, headers, config) {
              // log error
            });
            return recipes;
        }*/
      return factory;

}])
.controller('MainController', function($scope, $http, Factories) {
  $scope.days = Factories.getDays();
  $scope.meals = Factories.getMeals();

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
