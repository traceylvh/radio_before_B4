// myApp.controller('NightfallCtrl', ['$scope', 'NightfallFactory', function ($scope, NightfallFactory) {
//     var nightfallFactory = NightfallFactory;
//
//     //get data from nightfall.json
//     nightfallFactory.getNightfall();
//     $scope.songs = nightfallFactory.nightfallData;
//
// }]);

myApp.controller('VpointCtrl', ['$scope', 'EpService', function ($scope, EpService) {
    var epService = EpService;

    //get data from vpoint.json
    epService.getVpoint();
    $scope.songs = epService.vpointData;

}]);

myApp.controller('SingleEpCtrl', ['$scope', 'EpService', function ($scope, EpService) {
    var epService = EpService;


    $scope.openEpisode = epService.openEpisode;
    $scope.songs = epService.playEpisode;
}]);






myApp.controller("DummyController", ["$scope", "SweetFactory", function($scope, SweetFactory){
   $scope.something = SweetFactory.something;
}]);

// myApp.controller("DummyController", ["$scope", "SweetFactory", function($scope, SweetFactory){
//    SweetFactory.something = "something awesome";
// }]);


myApp.controller("EpisodeController", ["$scope", "EpService", "$http",
function($scope, EpService, $http){

  var epService = EpService;
  // $scope.epName = "";


  epService.getNightfall();
  $scope.nightfallArray = epService.nightfallData;

  epService.getVpoint();
  $scope.vpointArray = epService.vpointData;


  $scope.openEpisode = epService.openEpisode;
  $scope.episode = epService.playEpisode;

  $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };



//updated save fav
var favObject = {};

$scope.saveFavorite = function(data){
    epService.postFavData(data);
}

epService.getFavData();

$scope.favoritesArray = epService.favoritesData;

//delete favorite
$scope.deleteData = epService.deleteData;



}]);



myApp.controller("AddController", ["$scope", "EpService", function($scope, EpService){
    var heroObject = {};
    var epService = EpService;

    $scope.saveHero = function(data){
        epService.postData(data);
        $scope.heroObject = {};
    }
}]);


myApp.controller("ShowController", ["$scope", "EpService", function($scope, EpService){
    var epService = EpService;

    epService.getData();
    $scope.heroArray = epService.heroData;
    $scope.deleteData = epService.deleteData;
}]);
