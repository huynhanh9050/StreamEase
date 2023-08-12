var myApp  =  angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http){
	$http.get('value.js').success(function (data){
		$scope.employees = [
            {
               "id" : 1,
                "title" :"The Shawshank Redemption",
                "year":1994,
                "genres":[9,10],
                "director":1,
               " actors":[1,2],
               " overview":"Andy Dufresne, a banker who is wrongly convicted of murdering his wife and her lover, is sentenced to life in Shawshank State Penitentiary. There, he befriends Ellis Red Redding and together they endure the challenges of prison life.",
               "country":1,
                "brand":[2],
                "img":"./images/flm1.jpg",
                "video":""
            },
            {
                "id":2,
                "title":"Schindler's List",
                "year":1993,
                "genres":[10,16],
                "director":2,
               " actors":[3,4],
               " overview":"Oskar Schindler, a German businessman, saved the lives of over a thousand Jews from the Holocaust by employing them in his factories.",
               "country":1,
                "brand":[2,8],
                "img":"film2.jpg",
                "video":""
            },
            {
               "id":3,
                "title":"Pulp Fiction",
                "year":1994,
                "genre":[1,9],
                "director":3,
                "actor":[5,6,7],
               " overview":"Pulp Fiction is a crime film by Quentin Tarantino that tells the story of three different tales. The first tale follows two bank robbers, Jules Winnfield and Vincent Vega, as they carry out a job. The second tale follows a man named Butch Coolidge who has been promised a large sum of money to lose a boxing match. The third tale follows a mob boss named Marsellus Wallace as he searches for his missing diamond-encrusted watch.",
               "country":1,
                "brand":[2,8],
                "img":"film3.jpg",
                "video":""
            },
            {
                "id":4,
                "title":"Star Wars: Episode V - The Empre Strikes Back",
                "year":1980,
                "genres":[1,8,15,12],
                "director":4,
               " actors":[8,9,10],
               " overview":"After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
               "country":1,
                "brand":[2,4,8],
                "img":"film4.jpg",
                "video":""
            },
            {
                "id":5,
                "title":"The Godfather",
                "year":1972,
                "genres":[9,10],
                "director":5,
               " actors":[11,12,13],
               " overview":"Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
               "country":1,
                "brand":[2],
                "img":"film5.jpg",
                "video":""
            },
            {
                "id":6,
                "title":"The Dark Knight",
                "year":2008,
                "genres":[1,5,9,10],
                "director":6,
               " actors":[14,15,16],
               " overview":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
               "country":1,
                "brand":[2,8],
                "img":"film6.jpg",
                "video":""
            },
            {
                "id":7,
                "title":"Mystic Land",
                "year":2003,
                "genres":[1,2,8],
                "director":7,
               " actors":[17,18,19],
               " overview":"His parents sacrificed everything for science, but in return had a bad reputation. Ideals carry in their hearts the steadfast will to return honor to their parents. Ideal tries to find the scientific item Kunlun Mirror, but is transported back to the Kunlun Mirror era. After many hardships and dangers, confronting mythical creatures, Ideal finally matured and untied the knot in his heart.",
               "country":2,
                "brand":[1,5,6],
                "img":"film7.jpg",
                "video":""
            },
            {
                "id":8,
                "title":"The Devildom Elephant Man",
                 "year":2023,
                "genre":[1],
                "director":8,
                "actor":[20,21,22],
               " overview":"In the Kangxi period, the overseas Siamese state bowed to the Qing government, the story begins with the Siamese princess being secretly assassinated, many forces involved. Hong Xiguan went to prison for revenge, and a major change took place in his life. However, he actively pushed forward and solved all difficulties, fighting against the magic elephants, wiping out evil forces and saving the poor people.A Siamese princess transforms into an oiranian and wise master",
               "country":2,
                "brand":[1,5,6],
                "img":"film8.jpg",
                "video":""
            },
            {
                "id":9,
                "title":"Jade Dynasty",
                "year":"2019",
                "genre":[2,3],
                "director":9,
                "actor":[23,24],
               " overview":"In one night, the whole village was killed, he joined Qing Yunmen on the Great Truc Feng, accidentally obtained the treasure of the Burning Flame Cone, thereby falling into a war between the evil and evil factions! Fascinating oriental fairy tales await you",
               "country":2,
                "brand":[1,5,6],
                "img":"film9.jpg",
                "video":""
            },
            {
                "id":10,
                "title":"Cross The Battlefield",
                "year":2023,
                "genre":[17,18],
                "director":10,
                "actor":[25,26,27],
               " overview":"High school student Tran Vu Phi loves e-sports but has never been supported by his father. In an accident, his father and Wang Kai swapped identities, initially wanting to upset his son esports career, but during competitions, they understood each other, grew up together, and became close friends.",
               "country":2,
                "brand":[1,5,6],
                "img":"film10.jpg",
                "video":""
            },
            {
                "id":11,
                "title":"Tomahawk Action 2 Bloodthirsty",
                "year":2023,
                "genres":[17,18],
                "director":11,
               " actors":[28,29,30],
               " overview":"A drug trafficking case in the border town of Xinnan City is under secret police surveillance, an accident deprives the most important evidence in the case, and undercover police begin a search. A Bu, who had just been released from prison and was about to welcome his new life, suddenly became the target of public criticism.",
               "country":2,
                "brand":[1,5,6],
                "img":"film11.jpg",
                "video":""
            },
            {
                "id":12,
                "title":"Blue Color of Life and Death",
                "year":2019,
                "genres":[3,18],
                "director":12,
               " actors":[31,32,33],
               " overview":"An Xi (played by Zhao Luoxi) and Han Ai (played by Meng Meiqi) are accidentally swapped by their older brother Tuan Xi (played by Xiao Yi). Tuan Xi best friend Han Tai (Hua Kai) after learning of Enxi identity decides to protect her, rejecting Han Ai feelings. And to Enxi, is Tuan Xi ultimately a brother or a lover? These are all arrangements of destiny.",
               "country":2,
                "brand":[1,5,6],
                "img":"film12.jpg",
                "video":""
            },
            {
                "id":13,
                "title":"The Good, the Bad and the Ugly",
                "year":1966,
                "genre":[8],
                "director":13,
               " actors":[35,36,37],
               " overview":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
               "country":3,
                "brand":[1,3,7],
                "img":"film13.jpg",
                "video":""
            }
        ];
	});

    $scope.addEmp = function(){
        $scope.employees.push({ title:$scope.empName, city:$scope.empCity, state:$scope.empState });
    }
    
    $scope.getTotalEmployees    =   function(){
        return $scope.employees.length;    
    }
        
    $scope.reversedMessage  =   function(){
        return $scope.empName.split("").reverse().join("");
    }
    
});

function testCtrl($scope){
  $scope.names = [
    {name:"Ramesh"},
    {name:"Vinod"},
    {name:"Ateendra"}
    ];
    
   $scope.addName = function(){
      $scope.names.push({ name:$scope.myName });
   }
   
    $scope.reversedMessage  =   function(){
        return $scope.myName.split("").reverse().join("");
    }
    
}