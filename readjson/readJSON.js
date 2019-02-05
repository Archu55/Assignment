var fs = require('fs');

fs.readFile('input.json', function(err, data){
   if(err) throw err;
   let info = JSON.parse(data);
   console.log(info);
   info.company = 'Wipro Ltd.';
   let newdata = JSON.stringify(info);
   fs.writeFileSync('output.json', newdata);
   console.log(newdata);
   }
);