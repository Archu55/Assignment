var https = require('https');
var assert = require('assert');
var https.post = require('https-post');

module.exports = function () {
	let requestURL = '';
	
	this.Given(/^I launch the request url with userid (.*)$/, function (userid) {
		requestURL = 'https://jsonplaceholder.typicode.com/posts';
		https.post(requestURL, { title: 'foo', body: 'bar', userId: 1 });
    });
	
	this.Then(/^I verify the (.*) (statuscode/userid) in the response$/, function (expectedValue,inputValue) {
		if(inputValue === "statuscode"){
			https.post(' https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, function(res){
				res.on('data', data => {
					console.log(res.statusCode);
					function verifystatuscode() {
					return res.statusCode === expectedValue;
					}
					console.log(verifystatuscode());
				})
			})	
		}
		else if(inputValue === "userid"){
			https.post(' https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, function(res){
				res.on('data', data => {
					let info = JSON.parse(data);
					data = JSON.stringify(info);
					console.log(data);
					function verifyuserid() {
						return info.userId === expectedValue;
					}
					console.log(verifyuserid());
				})
			})
		}			
	});
}	