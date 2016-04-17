myApp.controller('NightfallCtrl', ['$scope', 'HeroService', function ($scope, HeroService) {
    var heroService = HeroService;

    //get data from nightfall.json
    heroService.getNightfall();
    $scope.songs = heroService.nightfallData;

}]);

myApp.controller('VpointCtrl', ['$scope', 'HeroService', function ($scope, HeroService) {
    var heroService = HeroService;

    //get data from vpoint.json
    heroService.getVpoint();
    $scope.songs = heroService.vpointData;

}]);

myApp.controller('SingleEpCtrl', ['$scope', 'HeroService', function ($scope, HeroService) {
    var heroService = HeroService;


    $scope.openEpisode = heroService.openEpisode;
    $scope.songs = heroService.playEpisode;
}]);






myApp.controller("DummyController", ["$scope", "SweetFactory", function($scope, SweetFactory){
   $scope.something = SweetFactory.something;
}]);

// myApp.controller("DummyController", ["$scope", "SweetFactory", function($scope, SweetFactory){
//    SweetFactory.something = "something awesome";
// }]);


myApp.controller("EpisodeController", ["$scope", "HeroService", "$http",
"$location", "$route", "$window",
function($scope, HeroService, $http, $location, $route, $window){

  // $scope.reloadPage=$route.reload();
  // $route.reload();

  // var currentPageTemplate = $route.current.templateUrl;
  // $templateCache.remove(currentPageTemplate);
  // $route.reload();

// $scope.reloadRoute = function () {
// $route.reload();
// };

//this causes window to keep reloading... ============================== for friday
// $scope.reloadWindow = function () {
// $window.location.reload();
// };

// $scope.reloadWindow();
//=============================================================
  var heroService = HeroService;
  // $scope.epName = "";


  heroService.getNightfall();
  //data for nightfall page
  $scope.nightfallArray = heroService.nightfallData;




  heroService.getVpoint();
  $scope.vpointArray = heroService.vpointData;


  $scope.openEpisode = heroService.openEpisode;
  // $scope.episodePick = heroService.playEpisode;
  $scope.episode = heroService.playEpisode;



//updated save fav
var favObject = {};

$scope.saveFavorite = function(data){
    heroService.postFavData(data);
}

heroService.getFavData();

$scope.favoritesArray = heroService.favoritesData;

//delete favorite
$scope.deleteData = heroService.deleteData;



}]);



myApp.controller("AddController", ["$scope", "HeroService", function($scope, HeroService){
    var heroObject = {};
    var heroService = HeroService;

    $scope.saveHero = function(data){
        heroService.postData(data);
        $scope.heroObject = {};
    }
}]);


myApp.controller("ShowController", ["$scope", "HeroService", function($scope, HeroService){
    var heroService = HeroService;

    heroService.getData();
    $scope.heroArray = heroService.heroData;
    $scope.deleteData = heroService.deleteData;
}]);
