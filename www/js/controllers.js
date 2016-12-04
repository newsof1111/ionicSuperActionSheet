angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicSuperActionSheet,Chats,$rootScope) {
	$scope.chats = Chats.all();
					$scope.inProgress = true;

	$scope.selectedChat=null;
						  
	$scope.openskmenu = function(chat) 
				{ 

					$scope.selectedChat=Chats.get(chat.id);
					$rootScope.$broadcast('open','sof1');
					 //$ionicSuperActionSheet.open();
					 $scope.inProgress = true;

			
			}
	
	
})

.controller('ChatsCtrl', function($scope, movies,$rootScope,$sce) {
  
  $scope.selectedmovie=null;
 $scope.trustSrc = function(src) {
		console.log(src)
	if(src==null)
	 {
		 return "";
	 }
    return $sce.trustAsResourceUrl(src);
  }

  $scope.movies = movies.all();
  $scope.openFavISAS = function(movie) {
	  $scope.selectedmovie=movie;
	 
 $rootScope.$broadcast('open','sof4');
   
  };
  
 
  $scope.$on('closing', function () {
    $scope.selectedmovie=null;

        });
})
.controller('RadioCtrl', function($scope,  $rootScope,countries) {
  $scope.countriesList=countries.all();
  console.log($scope.countriesList);
  $scope.openFavISAS = function() {
	  
 $rootScope.$broadcast('open','sof3');
   
  };
  $scope.data = {
    selectedcountry: ''
  };
  $scope.closeFavISAS = function() {
	  
 $rootScope.$broadcast('close','sof3');
   
  };
})

.controller('ChatDetailCtrl', function($scope, $window, $ionicSideMenuDelegate) {
  $scope.width = function () {
    return $window.innerWidth;
  };
  
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleRight(true);
  };
  
  $scope.isWalletShown = true;
  $scope.toggleWallet = function () {
    $scope.isWalletShown = $scope.isWalletShown === false ? true : false;
    console.log('Toggled');
  }})

.controller('AccountCtrl', function($scope,products,$rootScope,$ionicSuperActionSheet) {
   $scope.products = products.all(); 
   $scope.favproducts = products.get();
  $scope.switchFav = function(product) {
	  
   $scope.products =  products.setFav(product);
   $scope.favproducts = products.get();
   
  }; 
  $scope.openFavISAS = function() {
	  
 $rootScope.$broadcast('open','sof2');
   
  };
});
