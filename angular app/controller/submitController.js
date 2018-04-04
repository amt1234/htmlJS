angularApp1.controller('submitController1', [function() {
var self = this;
self.submit = function() {
console.log('User clicked submit with ', self.user);
};
}]);
