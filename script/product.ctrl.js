angular.module('myApp').controller('myController',function($scope,ProductService){
$scope.addStt = true;
$scope.product = {};
$scope.productStt = false;
$scope.saveBtnStt = false;

$scope.updateProduct = function(){
ProductService.updateProduct($scope.product,$scope.key).then(function(res){
$scope.product = {};
$scope.getProducts();
}).catch(function(err){
console.log(err)
});
}

$scope.editProduct = function(productObj,key){
$scope.product = productObj;
$scope.key=key;
$scope.addStt = false;
}

$scope.saveProduct = function(){
$scope.saveBtnStt = true;	
ProductService.addProduct($scope.product).then(function(){
$scope.product = {};	
$scope.saveBtnStt = false;
$scope.getProducts();
});
}
$scope.getProducts = function(){
$scope.products = '';
$scope.productStt = false;
ProductService.getProductArray().then(function(res){
$scope.products = res;
$scope.productStt = true;
})
}

$scope.deleteProduct = function(key){
$scope.productStt = false;
ProductService.deleteProduct(key).then(function(res){
$scope.getProducts();
}).catch(function(err){
console.log(err);
});
}
});
