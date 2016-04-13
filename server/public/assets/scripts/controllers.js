myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.songs = [
        {
            id: '1',
            title: 'Nightfall-cbcRadioProgram-episodesMp3Format',
            artist: 'Drake',
            url: 'https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/Nightfall_CBC_80-10-10_15_Special_Services.mp3'
        },
        {
            id: '2',
            title: 'Walking',
            artist: 'Nicki Minaj',
            url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
        },
        {
            id: '3',
            title: 'Barrlping with Carl (featureblend.com)',
            artist: 'Akon',
            url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
        },
        {
            id: '4',
            title: 'Angry cow sound?',
            artist: 'A Cow',
            url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
        },
        {
            id: '5',
            title: 'Things that open, close and roll',
            artist: 'Someone',
            url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
        }
    ];
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
