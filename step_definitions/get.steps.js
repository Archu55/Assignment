var https = require('https');
var assert = require('assert');

module.exports = function () {
	let requestURL = '';
	
	this.Given(/^I launch the request url with userid (.*)$/, function (userid) {
		requestURL = 'https://jsonplaceholder.typicode.com/posts/'+userid;
		console.log("requestURL is:"+requestURL);
        https.get(requestURL);	
    });
	
	this.Then(/^I verify the (.*) (statuscode/userid) in the response$/, function (expectedValue,inputValue) {
		
        if(inputValue === "statuscode"){
			https.get(requestURL,
			res => {
				console.log(res.statusCode);
				function assertStatue() {
					return res.statusCode === expectedValue;
				}
				console.log(assertStatue());
			}	
		}
		else if(inputValue === "userid"){
			https.get(requestURL,
			res => {
				let body = '';
				res.on('data', data => {
				body += data;
				let info = JSON.parse(body);
				function verifyid() {
					return info.userId === expectedValue;
				}
					console.log(verifyid());
				})
				res.on('end', () => console.log(body));	
			});
		}
    });
}	