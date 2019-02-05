var https = require('https');
var assert = require('assert');

https.get(' https://jsonplaceholder.typicode.com/posts/1',
    res => {
        console.log(res.statusCode);
        function assertStatue() {
            return res.statusCode === 200
        }
        console.log(assertStatue());
        let body = '';
        res.on('data', data => {
            body += data;
            let info = JSON.parse(body);
            function verifyid() {
                return info.userId === 1
            }
            console.log(verifyid());
        })
        res.on('end', () => console.log(body));

    });
