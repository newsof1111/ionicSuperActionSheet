angular.module('ionic-SuperActionSheet', [])

	.factory('$ionicSuperActionSheet', ['$ionicScrollDelegate', '$ionicPosition', '$timeout', '$ionicGesture', function ($ionicScrollDelegate, $ionicPosition, $timeout, $ionicGesture) {


		return {

			open: function () {

				var skcontent = angular.element(document.querySelector('.skcontent'));
				var skscroll = angular.element(document.querySelector('.skscroll'));
				$ionicScrollDelegate.$getByHandle('skscrollScroll').scrollTo(0, 1, true);

				$ionicScrollDelegate.$getByHandle('skscrollScroll').freezeScroll(false);

				skcontent.css({
					"transition-duration": "300ms",
					"transform": "translate(0px,-20vh)"

				});
				skscroll.css({
					"background-color": "rgba(0,0,0,0)",
					"-webkit-transition": "background-color 300ms linear",
					"-moz-transition": "background-color 50ms linear",
					"-o-transition": "background-color 50ms linear",
					"-ms-transition": "background-color 50ms linear",
					"transition": "background-color 50ms linear",
					"background-color": "rgba(0,0,0,0.4)",
					"z-index": "20",
					"visibility": "visible"

				});



			},
			Close: function () {
				// $scope.IsClickEnable=false;	
				var skcontent = angular.element(document.querySelector('.skcontent'));
				var skscroll = angular.element(document.querySelector('.skscroll'));
				$ionicScrollDelegate.$getByHandle('skscrollScroll').scrollTop(true);

				skcontent.css({
					"transition-duration": "300ms",
					"transform": "translate(0px,20vh)"

				});
				skscroll.css({

					"background-color": "rgba(0,0,0,0)"


				});
				$ionicScrollDelegate.$getByHandle('skscrollScroll').freezeScroll(true);

				$timeout(function () {
					skscroll.css({
						"z-index": "-20",
						"visibility": "hidden"

					});
				}, 300);
				// $timeout(function() {
				// $scope.IsClickEnable=true;
				// }, 9000);



			}
		}
	}])
	.directive('ionSuperActionSheet', ['$ionicSuperActionSheet', '$ionicScrollDelegate', '$timeout', function ($ionicSuperActionSheet, $ionicScrollDelegate, $timeout) {

		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: true,

			link: function ($scope, $element, $attr) {

				var skcontent = angular.element($element.children()[2]);
				var back = angular.element($element.children()[0].childNodes[0]);
				var skscroll = angular.element($element);
				//console.log(skscroll);

				$scope.handelName = skscroll[0].attributes['delegate-handle'].value;
				//console.log($scope.handelName);

				$scope.getScrollPosition = function () {
					if ($scope.IsClickEnable === true) {
						if ($ionicScrollDelegate.$getByHandle($scope.handelName).getScrollPosition().top === 0) {


							back.css({
								"transition-duration": "50ms",
								"height": "100vh"

							});
							skscroll.css({
								"background-color": "rgba(0,0,0,0)"
							});
							$timeout(function () {
								skscroll.css({
									"z-index": "-20"

								});

							}, 300);
							$ionicScrollDelegate.$getByHandle($scope.handelName).freezeScroll(true);

							$scope.$emit('closing');
						}
						if ($ionicScrollDelegate.$getByHandle($scope.handelName).getScrollPosition().top > 0 && $ionicScrollDelegate.$getByHandle($scope.handelName).getScrollPosition().top < 200) {
							//console.log("rgba(0,0,0, "+((parseFloat($ionicScrollDelegate.$getByHandle('skscrollScroll').getScrollPosition().top/800)+0.4).toPrecision(1))+")");

							skscroll.css({
								"background-color": "rgba(0,0,0, " + ((parseFloat($ionicScrollDelegate.$getByHandle($scope.handelName).getScrollPosition().top / 500) + 0.4).toPrecision(1)) + ")",
								"-webkit-transition": "background-color 300ms linear",
								"-moz-transition": "background-color 300ms linear",
								"-o-transition": "background-color 300ms linear",
								"-ms-transition": "background-color 300ms linear",
								"transition": "background-color 300ms linear",

							});

							//console.log($ionicScrollDelegate.$getByHandle('skscrollScroll').getScrollPosition().top);
						}

					}
				};
				$scope.openskmenu1 = function () {
					// if($scope.IsClickEnable)
					// {
					if ($scope.IsClickEnable === true) {
						$scope.IsClickEnable = false;
						var skcontent = angular.element($element.children()[2]);
						var skscroll = angular.element($element);
						var back = angular.element($element.children()[0].childNodes[0]);
						$scope.handelName = skscroll[0].attributes['delegate-handle'].value;
						$ionicScrollDelegate.$getByHandle($scope.handelName).scrollTop(true);

						back.css({
							"transition-duration": "300ms",
							"height": "100vh"

						});

						$ionicScrollDelegate.$getByHandle($scope.handelName).freezeScroll(true);

						$timeout(function () {
							skscroll.css({
								"z-index": "-20",
								"opacity": "0"

							});
						}, 300);

						$scope.$emit('closing');
						// }
						//$emit('closing')$rootScope.$broadcast('backdrop.hidden');
						// $rootScope.$broadcast('closing');
					}
				};

				$scope.$on('open', function (event, data) {
					if ($scope.handelName === data) {
						// if(!$scope.IsClickEnable)
						// {
						var back = angular.element($element.children()[0].childNodes[0]);
						//console.log(back);
						var skcontent = angular.element($element.children()[2]);
						var skscroll = angular.element($element);
						// $timeout(function() {
						$ionicScrollDelegate.$getByHandle($scope.handelName).scrollTo(0, 2, true);
						$ionicScrollDelegate.$getByHandle($scope.handelName).freezeScroll(false);
						// }, 300);	


						skscroll.css({

							"-webkit-transition": "background-color 300ms linear",
							"-moz-transition": "background-color 50ms linear",
							"-o-transition": "background-color 50ms linear",
							"-ms-transition": "background-color 50ms linear",
							"transition": "background-color 50ms linear",
							"background-color": "rgba(0,0,0,0.4)",
							"z-index": "20",
							"opacity": "1"
						});
						back.css({
							"transition-duration": "300ms",
							"height": "60vh"

						});

						$scope.IsClickEnable = true;
						// }

					}
				});
				$scope.$on('close', function (event, data) {
					if ($scope.handelName === data) {
						$scope.IsClickEnable = false;
						var back = angular.element($element.children()[0].childNodes[0]);

						var skcontent = angular.element($element.children()[2]);
						var skscroll = angular.element($element);
						$ionicScrollDelegate.$getByHandle($scope.handelName).scrollTop(true);

						back.css({
							"transition-duration": "300ms",
							"height": "100vh"

						});
						skscroll.css({

							"background-color": "rgba(0,0,0,0)"


						});
						$ionicScrollDelegate.$getByHandle($scope.handelName).freezeScroll(true);

						$timeout(function () {
							skscroll.css({
								"z-index": "-20",
								"opacity": "0"

							});

						}, 300);


						$scope.$emit('opening');
					}
				});

			}
			,
			template: '<ion-content   has-header="true" has-bouncing="false" class="skscroll" style="z-index:-20;background-color:rgba(0,0,0,0);"     on-scroll="getScrollPosition()" scroll-event-interval="1" >' +
			'<div class="back"  ng-click="IsClickEnable?openskmenu1():null"  style="transition: height 0.15s ease-out; transition-duration:10ms;"></div>' +
			'<div><center><i style="color:white;" class="icon ion-chevron-up icon-accessory"></i></center></div>' +
			'<div class="skcontent"  ng-transclude></div></ion-content >',

		};
	}])


	;
