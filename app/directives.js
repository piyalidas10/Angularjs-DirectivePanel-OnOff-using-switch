//dynamically generate boxes of social networks
app.directive('boxSocial', function() {
    return {
        restrict: 'A',
        scope : {
          optSrc : '='  //the '=' attribute will tells to angular to use a tw way binding with the array passed in the directive declaration in the HTML.
        },
		template : '<li class="col-lg-4 col-md-6 widget" data-ng-repeat="opt in optSrc"><panel app="{{opt}}"></panel></li>',
        link: function(scope, element, attrs) {
			
        }
    };
});

//dynamic onoffSwitch 
app.directive('onoffSwitch', function () {
    return {
        restrict: 'EA',
		replace:true,
        scope : {
          netwSrc : '=',  //the '=' attribute will tells to angular to use a tw way binding with the array passed in the directive declaration in the HTML.
		  opts : '='
        },
        templateUrl: 'partials/onoff.html',

		controller: function($scope, $attrs,Facebook) {
			$scope.toggleSelection = function(netw) {
                if($('#myonoffswitch-'+netw).is(':checked')){
                    var index = $scope.opts.indexOf(netw);
                    $scope.opts.splice(index, 1);
                }else{
                    $scope.opts.push(netw);
                    Facebook.login(function(response) {
                        // Do something with response.
                        console.log(response);
                        Facebook.api('/me', function(response) {
                            console.log(response);
                        });
                    });
                }

			}
        }
	};	
});


//Entry box for first time page load
app.directive('entry', function() {
    return {
        restrict: 'E',
        scope:true,
        templateUrl: 'partials/entry.html'
    };
});