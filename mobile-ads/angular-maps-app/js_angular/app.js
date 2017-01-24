'use strict';
/**
 * Created by David on 03.10.14.
 */


angular.module('ngMap', ['ngPlacesAutocomplete'])
	.controller('exampleController', function ($scope, $log) {
		$scope.query = "";
		$scope.paOptions = {
			updateModel : true
		};
		$scope.paTrigger 		= {};
		$scope.paTriggerDest 	= {};
		$scope.paDetails 		= {};
		$scope.paDetailsDest	= {};
		$scope.placesCallback = function (error, details) {
            
			if (error) {
				return console.error(error);
			} 
			
			$scope.paDetails 		= details.address_components[0].long_name;
			$scope.paDetailsDest 	= details.address_components[0].long_name;
		};
	});