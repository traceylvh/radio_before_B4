myApp.controller('MainCtrl', ['$scope', 'HeroService', function ($scope, HeroService) {
    var heroService = HeroService;
    heroService.getNightfall();
    $scope.songs = heroService.nightfallData;
    console.log($scope.songs);
}]);






myApp.controller("DummyController", ["$scope", "SweetFactory", function($scope, SweetFactory){
   $scope.something = SweetFactory.something;
}]);

// myApp.controller("DummyController", ["$scope", "SweetFactory", function($scope, SweetFactory){
//    SweetFactory.something = "something awesome";
// }]);


myApp.controller("EpisodeController", ["$scope", "HeroService", "$http", "$location",
function($scope, HeroService, $http, $location){

  var heroService = HeroService;
  // $scope.epName = "";


  //test variable
  $scope.theUrl = heroService.theUrl;

  heroService.getNightfall();
  $scope.nightfallArray = heroService.nightfallData;

  heroService.getVpoint();
  $scope.vpointArray = heroService.vpointData;


  $scope.openEpisode = heroService.openEpisode;
  // $scope.episodePick = heroService.playEpisode;
  $scope.episode = heroService.playEpisode;
  console.log('playEpisode ', heroService.playEpisode);
  console.log("Episode url: ", $scope.episode.episodeURL);


  // $scope.episodeURL = $sce.trustAsResourceUrl(heroService.playEpisode.episodeURL);
  // $scope.episodeURL = heroService.playEpisode.episodeURL;

  // console.log("Sanitized url", $scope.episodeURL);



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
