var https = require('https');
var https.post = require('https-post');

https.post(' https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, function(res){
    res.on('data', data => {
        console.log(res.statusCode);
        function verifystatuscode() {
            return res.statusCode === 201;
        }
        console.log(verifystatuscode());
        let info = JSON.parse(data);
        data = JSON.stringify(info);
        console.log(data);
        function verifyuserid() {
            return info.userId === '1';
        }
        console.log(verifyuserid());
    })

});