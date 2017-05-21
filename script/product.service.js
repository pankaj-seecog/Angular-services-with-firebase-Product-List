angular.module('myApp').service('ProductService',function($http,$q){

this.updateProduct = function(product,key){
var obj = $q.defer();
$http.put('https://books-ad908.firebaseio.com/products/'+key+'.json',product).then(function(res){
obj.resolve(res)
}).catch(function(error){
obj.reject();
console.log(error)
});
return obj.promise;
}

this.deleteProduct = function(key){

var obj = $q.defer();
$http.delete('https://books-ad908.firebaseio.com/products/'+key+'.json').then(function(res){
obj.resolve(res)
}).catch(function(error){
obj.reject();
console.log(error)
});
return obj.promise;

}

this.addProduct = function(product){
var obj = $q.defer();
$http.post('https://books-ad908.firebaseio.com/products.json',product).then(function(res){
obj.resolve(res)
}).catch(function(error){
obj.reject();
console.log(error)
});
return obj.promise;
}
this.getProductArray = function(){
var obj = $q.defer();
$http.get('https://books-ad908.firebaseio.com/products.json').then(function(res){
console.log('The server data is ');
console.log(res);
obj.resolve(res.data);
}).catch(function(error){
obj.reject();
console.log(error)
});
return obj.promise;
}
});
