myApp.factory("HeroService", ["$http", "$location", function($http, $location){
    var heroData = {};
    var favoritesData = {};
    var nightfallData = [];
    var vpointData = [];
    var thisEpisode = {};
    var playEpisode = [];


    //when "play" button is clicked on a show page
    var openEpisode = function(data) {
      thisEpisode.data = data;
      var dataObject = thisEpisode.data;
      playEpisode.push(dataObject);
      // console.log("playEpisode", playEpisode);
        audioPage(playEpisode);
    };


    //redirect to audioplayer
    var audioPage = function(data){
      if(data !== null){
        $location.path("/playEpisode");
      };
    };


    var getNightfall = function() {
      $http.get('/nightfall').then(function(response){
        // console.log(response);
        // nightfallData = [];
        // console.log("nightfallData", nightfallData);
        for (var i = 0; i < response.data.length; i++) {
          var song = response.data[i];
          nightfallData.push(song);
          // console.log("nightfallData after push", nightfallData);
          // return nightfallData;
          // console.log("return nightfallData", nightfallData);
        }
      });
    };

    var getVpoint = function() {
      $http.get('/vpoint').then(function(response){
        for (var i = 0; i < response.data.length; i++) {
          var song = response.data[i];
          vpointData.push(song);
        }
      });
    };

    var getData = function(){
        $http.get("/userInfo").then(function(response){
          // console.log(response.data);
          heroData.allHeroes = response.data;
          // console.log(heroData.allHeroes);
        });
    };

    var postData = function(data){
        $http.post("/userInfo", data).then(function(response){
          // console.log("here is the", response.data);
          getData();
        });
    };

    var getFavData = function(){
        $http.get("/favorites").then(function(response){
          // console.log(response.data);
          favoritesData.allFavorites = response.data;
          // console.log(favoritesData.allFavorites);
        });
    };

    var postFavData = function(data){
        $http.post("/favorites", data).then(function(response){
          console.log("here is the", response.data);
          getFavData();
        });
    };

    var deleteData = function(data){
      $http.delete("/favorites/" + data).then(function(response){
        getFavData();
      });
    };


    return {

      openEpisode: openEpisode,
      playEpisode: playEpisode,

      getNightfall: getNightfall,
      nightfallData: nightfallData,

      getVpoint: getVpoint,
      vpointData: vpointData,

      postData: postData,
      getData: getData,

      postFavData: postFavData,
      getFavData: getFavData,

      favoritesData: favoritesData,

      heroData: heroData,

      deleteData: deleteData,
      // episodeData: episodeData
    };
}]);

myApp.factory("SweetFactory", function(){
   var something = "https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/Nightfall_CBC_80-10-10_15_Special_Services.mp3";

   return {
       something
   };
});

// myApp.factory("SweetFactory", function(){
//    var something = "";
//
//    return {
//        something : something
//    };
// });
