angular.module('myApp', ['angularSoundManager'])

    .controller('MainCtrl', ['$scope', function ($scope) {
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
