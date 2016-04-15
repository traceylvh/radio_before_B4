var myApp = angular.module("myApp", ["ngRoute", "ngSanitize", "angularSoundManager"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/home", {
          templateUrl: "/assets/views/routes/home.html",
      })
      .when("/userInfoAdd", {
          templateUrl: "/assets/views/routes/userInfoAdd.html",
          controller: "AddController"
      })
      .when("/view", {
          templateUrl: "/assets/views/routes/view.html",
          controller: "ShowController"
      })
      .when("/nightfall/", {
          templateUrl: "/assets/views/routes/nightfall.html",
          controller: "EpisodeController"
      })
      .when("/vpoint", {
          templateUrl: "/assets/views/routes/vpoint.html",
          controller: "EpisodeController"
      })
      .when("/favorites", {
          templateUrl: "/assets/views/routes/favorites.html",
          controller: "EpisodeController"
      })
      .when("/playEpisode", {
          templateUrl: "/assets/views/routes/playOneEpisode.html",
          controller: "SingleEpCtrl"
      })
      .when("/episode", {
          templateUrl: "/assets/views/routes/episode.html",
          controller: "DummyController"
      })
      .when("/audio_sm2", {
          templateUrl: "/assets/views/routes/audio_sm2.html",
          controller: "MainCtrl"
      })
      .otherwise({
          redirectTo: "/home"
      });

  }]);
