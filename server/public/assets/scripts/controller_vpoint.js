myApp.controller('VpointCtrl', ['$scope', 'EpService', '$http', function ($scope, EpService, $http) {

  var epService = EpService;

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
};

epService.getFavData();

$scope.favoritesArray = epService.favoritesData;

//delete favorite
$scope.deleteData = epService.deleteData;


        $scope.songs = [
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_850419_28_Ground_Zero.mp3",
          "id": "1",
          "source": "original",
          "format": "32Kbps MP3",
          "title": "GroundZero",
          "md5": "bf10fbc1d67f859ee3c29710ef484cc5",
          "mtime": "1246209905",
          "size": "7176986",
          "crc32": "d7bd7549",
          "sha1": "3219aa32851ee46111844a8f7ebe9ceb4c280c6a",
          "length": "1794.24",
          "height": "0",
          "width": "0",
          "artist": "No description available."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_841102_05_Cage_of_Light.mp3",
          "id": "2",
          "format": "32Kbps MP3",
          "title": "Cage of Light",
          "md5": "978d354c4f946990244ec7493438549e",
          "mtime": "1246208329",
          "size": "7140615",
          "crc32": "7db68fb2",
          "sha1": "7bb53619c00575af2ad4b7b0de43d48794091412",
          "length": "1785.15",
          "height": "0",
          "width": "0",
          "artist": "A first contact mission specialist is put on trial for genocide when the alien race he made contact with 'disappeared' shortly after his visit to their home world."
          },

          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_850111_16_Point_of_Departure.mp3",
          "id": "3",
          "format": "VBR MP3",
          "title": "Point Of Departure",
          "creator": "Vanishing Point",
          "album": "CBC",
          "track": "16",
          "md5": "a242adc44354bd2154cc0b8890c13d93",
          "mtime": "1246209160",
          "size": "14473371",
          "crc32": "9f807c47",
          "sha1": "a14a42d826d7610dccb5c5fb71f9470e1b45064d",
          "length": "1615.15",
          "height": "0",
          "width": "0",
          "artist": "Vanishing Point",
          "comment": "01-11-1985",
          "artist": "Before leaving for a sun holiday, a woman is questioned by poilice about the husband she hasn't seen for five years."
          },

          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_841130_10_The_Silenian_Test.mp3",
          "id": "4",
          "format": "32Kbps MP3",
          "title": "Silenian Test",
          "md5": "3f9b1b8cb24272244eeb951b78c9eb50",
          "mtime": "1246208630",
          "size": "7125577",
          "crc32": "c541ffff",
          "sha1": "4617ef32ae6c522d87c40e56e2e6916096e17434",
          "length": "1781.39",
          "height": "0",
          "width": "0",
          "artist": "Giant alien ships descend on Earth, broadcasting telepathic messages that they are here to test mankind for inclusion in the galactic community, but they won't tell anyone what the test is beyond the cryptic phrase, 'the stars demand sacrifice'."
          },

          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_841228_14_The_Lost_Door.mp3",
          "id": "5",
          "format": "VBR MP3",
          "title": "Lost Door",
          "creator": "Vanishing Point",
          "album": "CBC",
          "track": "14",
          "md5": "4cd7827e71c4b19f41a3f470d362a42e",
          "mtime": "1246208984",
          "size": "14683020",
          "crc32": "ab5a669b",
          "sha1": "c89e935320b9b97f7f72a0341219a017fd47ee57",
          "length": "1655.4",
          "height": "0",
          "width": "0",
          "artist": "Vanishing Point",
          "comment": "12-28-1984",
          "artist": "A middle aged man disovers his home has vanished and he's lost proof of his existence."
          },

          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_841214_12_How_Love_Came_to_Professor_Guildea.mp3",
          "id": "6",
          "format": "VBR MP3",
          "title": "How Love Came To Professor Guildea",
          "creator": "Vanishing Point",
          "album": "CBC",
          "track": "12",
          "md5": "03528f82e97641e985d405d15c5c56cc",
          "mtime": "1246208810",
          "size": "15324402",
          "crc32": "1b05dfc5",
          "sha1": "a31927d7c3cb7f0f01fcd686a24cd55c6d447fc9",
          "length": "1732.44",
          "height": "0",
          "width": "0",
          "artist": "Vanishing Point",
          "comment": "12-14-84",
          "artist": "Said professor despises people and holds only contempt for human affection. But love cannot be denied, and if the good professor will not accept love from a human source, he must face the prospect of an inhuman love..."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_850322_24_Free_to_a_Good_Home.mp3",
          "id": "7",
          "format": "32Kbps MP3",
          "title": "Free to a Good Home",
          "md5": "25b19bf00212a6fdf5aa87e00b430c9e",
          "mtime": "1246209676",
          "size": "7087647",
          "crc32": "95e3d1e2",
          "sha1": "3b0786bee4864342c955ac6e499dec27d0890ecc",
          "length": "1771.91",
          "height": "0",
          "width": "0",
          "artist": "Tom and Nancy promise one of the kittens they've advertised to their first caller. But the caller phoned before the newspaper ad even appeared, and seems to have an uncanny knowledge of the kitten's activities."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_841116_08_The_Quickening.mp3",
          "id": "8",
          "format": "VBR MP3",
          "title": "Quickening",
          "md5": "17054e22a8a6f750a482631cfd7e4c3e",
          "mtime": "1246208512",
          "size": "15149125",
          "crc32": "2b1fc91e",
          "sha1": "b2b279c74bd670ba55fd5fda47d277b75ebdd5d2",
          "length": "1744.27",
          "height": "0",
          "width": "0",
          "artist": "A couple, thought perfect by their contemporaries, experience an evening of rising tensions among its upwardly mobile crowd, after which the relationship takes a irreversible turn."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_870612_xx_The_Dispossessed__Part_1_of_6.mp3",
          "id": "9",
          "format": "32Kbps MP3",
          "title": "Dispossessed - Part 1 of 6",
          "creator": "Vanishing Point",
          "album": "06/12/87, episode xx",
          "md5": "e4483a5315af9cecb7f4f5a7a9fef94a",
          "mtime": "1246213001",
          "size": "6156007",
          "crc32": "1c274a07",
          "sha1": "ef616510c74eba9e5dd2a481eb250b4c8665cf9e",
          "length": "1539",
          "height": "0",
          "width": "0",
          "artist": "The twin planets of Uras and Anara have pursued opposing socio-political ideals and thus avoided contact with each other for fear of cultural contamination. Now Shevek, a brilliant mathematician and physicist, has been invited to visit Uras, an invitation he accepts in spite of the objections of his fellow Anarans, who fear that Uras' leaders only want him to develop a new space-drive that will allow them rebuild their interstellar empire."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_841109_07_The_Baliff_and_the_Women.mp3",
          "id": "10",
          "format": "32Kbps MP3",
          "title": "Bailiff and the Women",
          "md5": "0222f4464cb4a958c74c586bb9a5e8ab",
          "mtime": "1246208389",
          "size": "7091409",
          "crc32": "10682769",
          "sha1": "df8c6fe37ef0d6422c8afa2fe8faab2f80f4d16c",
          "length": "1772.85",
          "height": "0",
          "width": "0",
          "artist": "A civil servant is transported to a dream court, charged with a lifetime of crime."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_851014_53_The_Enormous_Radio.mp3",
          "id": "11",
          "format": "32Kbps MP3",
          "title": "Enormous Radio",
          "md5": "ecd998b75fabd66a9068cc58f9f2b1b0",
          "mtime": "1246210363",
          "size": "7317629",
          "crc32": "7748f92a",
          "sha1": "31898496ec0e51afd7b738eb5e4ee0555404901a",
          "length": "1829.4",
          "height": "0",
          "width": "0",
          "artist": "A couple in an apartment acquire an unusual radio which picks up conversations from their neighbours in the building. Could anyone resist the temptation to learn all their neighbours' secrets?"
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_850510_31_The_Yellow_Wallpaper.mp3",
          "id": "12",
          "format": "32Kbps MP3",
          "title": "Yellow Wallpaper",
          "md5": "d3f72ee86a443839c77e9139c4cfa496",
          "mtime": "1246210074",
          "size": "7069675",
          "crc32": "95f3df10",
          "sha1": "cadf83e3c87dbe63c243520a735c5f26b10228ee",
          "length": "1767.41",
          "height": "0",
          "width": "0",
          "artist": "Charts a woman's descent into madness."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_850104_15_The_Blue_Devil.mp3",
          "id": "13",
          "format": "32Kbps MP3",
          "title": "Blue Devil",
          "md5": "a695fb43b852b375fe069487b540c4c9",
          "mtime": "1246209043",
          "size": "7108127",
          "crc32": "be3f898a",
          "sha1": "c24c8f533ea39df52320ca57f20a18371575ebff",
          "length": "1777.03",
          "height": "0",
          "width": "0",
          "artist": "A colony of women has survived a nuclear holocaust to create a new, matriarchal society, a world deliberately devoid of men."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_850222_21_Meteor.mp3",
          "id": "14",
          "format": "32Kbps MP3",
          "title": "Meteor",
          "md5": "ae6c6d10ad7fea31ee630b99fa0eff5e",
          "mtime": "1246209507",
          "size": "7100912",
          "crc32": "76a3828e",
          "sha1": "7dc1f58e9a0f10e7a83325492d4df7f6d37931ac",
          "length": "1775.22",
          "height": "0",
          "width": "0",
          "artist": "The planet Forta is old and dying. To preserve their civilization, the Fortans launch a series of inhabited 'globes' with the aim of colonizing distant planets. One such globe lands on Earth and is discovered by Sally Fontain, her father, and her fiancée Graham."
          },
          {
          "url": "https://ia800300.us.archive.org/29/items/VPoint/VP_851216_62_Past_Imperfect.mp3",
          "id": "15",
          "format": "32Kbps MP3",
          "title": "Past Imperfect",
          "md5": "656fea3e80d4850d7b8309432563d466",
          "mtime": "1246210882",
          "size": "7122024",
          "crc32": "fdbc301e",
          "sha1": "8c50f841ee03d3b1ea770849de6a6cbab0eff928",
          "length": "1780.5",
          "height": "0",
          "width": "0",
          "artist": "An inventor's ruthless, self-seeking nephew turns the tables on him with the aid of his new time machine. But time is not something easily trifled with..."
          }
        ];
    }]);
