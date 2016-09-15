(function()
{
    var app = angular.module('Karthik',['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider
            .when('/Login',{
           controller:'Login_Controller1',
           templateUrl:'lab3/Views/Login.html'
        }).when('/Home',{
            controller: 'Home_Controller1',
            templateUrl : 'lab3/Views/Home.html'
        }).when('/Reg',{
             controller:'Register_Controller1',
            templateUrl : 'lab3/Views/Register.html'
        })
        .otherwise({redirectTo:'/Login'});
        
    });
    
}());