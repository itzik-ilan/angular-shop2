 var angularStore = angular.module("angularStore", ["ngStorage"]);
           angularStore.controller("mainController", function($scope, $localStorage) {
 
              var vm = this;

	//list of store
	vm.storeList = [];
                  vm.itemToAdd = "";

                vm.add = function(name){
		vm.storeList.push({"name": vm.itemToAdd, "state": false});
		vm.itemToAdd = "";
	}

                vm.save = function() {
                    $localStorage.savedList = vm.storeList;
                }
 
vm.test = "YYYEEP HE!";

                vm.load = function() {
                   vm.storeList = $localStorage.savedList;
                }


 
            });	