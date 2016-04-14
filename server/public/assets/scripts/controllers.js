myApp.controller('MainCtrl', ['$scope', 'HeroService', function ($scope, HeroService) {
    var heroService = HeroService;


    heroService.getNightfall();
    var song = heroService.nightfallData;
    console.log(heroService.nightfallData);
    console.log('song ', song);
    $scope.songs = heroService.nightfallData;
    console.log($scope.songs);
}]);

// myApp.controller('MainCtrl', ['$scope', 'HeroService', function ($scope, HeroService) {
//     $scope.songs = [
//             {
//                 id: '1',
//                 title: 'Special Services',
//                 artist: 'A couple on their way to visit a sick aunt are run off the road by an ambulance. The husband is rushed to a _special services_ hospital which claims to treat only the elite of society, but his wife suspect the doctors are lying about his sudden demise in the operating room.',
//                 url: 'https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/Nightfall_CBC_80-10-10_15_Special_Services.mp3'
//             },
//             {
//                 id: '2',
//                 title: 'Dentist',
//                 artist: 'A dentist begins to realize that a long lost friends strange behavior may coincide with the recent string of child murders.',
//                 url: 'https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/Nightfall_CBC_82-10-29_05_The_Dentist.mp3'
//             },
//             {
//                 id: '3',
//                 title: 'Weather Station Four',
//                 artist: 'Two men are trapped at a remote weather station in the Arctic by a violent storm. One is a veteran of the far north, but the other is an emotionally unstable rookie who begins to hear a female voice on the radio goading him to murder and madness.',
//                 url: 'https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/Nightfall_CBC_83-01-14_15_Weather_Station_Four.mp3'
//             },
//             {
//                 id: '4',
//                 title: 'Appetite of Mr Lucraft',
//                 artist: 'In Victorian England, a mans voracious appetite leads him to some very interesting people.',
//                 url: 'https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/Nightfall_CBC_81-12-25_13_Appetite_of_Mr_Lucraft.Mp3'
//             },
//             {
//                 id: '5',
//                 title: 'Beyond the Law',
//                 artist: 'When his partners start being murdered, a real estate developer decides to retaliate against the Tenants Association that he blames for their deaths.',
//                 url: 'https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/Nightfall_CBC_82-06-04_27_Beyond_the_Law.mp3'
//             }
//         ];
// }]);






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
  console.log($scope.nightfallArray);

  heroService.getVpoint();
  $scope.vpointArray = heroService.vpointData;


  $scope.openEpisode = heroService.openEpisode;
  // $scope.episodePick = heroService.playEpisode;
  $scope.episode = heroService.playEpisode;
  // console.log('playEpisode ', heroService.playEpisode);
  // console.log("Episode url: ", $scope.episode.episodeURL);


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
