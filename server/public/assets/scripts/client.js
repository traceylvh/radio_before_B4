var myApp = angular.module("myApp", ["ngRoute", "ngSanitize", "angularSoundManager", "simple-accordion"]);

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
      .when("/nightfall", {
          templateUrl: "/assets/views/routes/nightfall.html",
          controller: "NightfallCtrl"
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
      .when("/playlist_nightfall", {
          templateUrl: "/assets/views/routes/playlist_nightfall.html",
          controller: "NightfallCtrl"
      })
      .when("/playlist_vpoint", {
          templateUrl: "/assets/views/routes/playlist_vpoint.html",
          controller: "VpointCtrl"
      })
      .otherwise({
          redirectTo: "/home"
      });

  }]);
