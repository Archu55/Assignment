var fs = require('fs');
var xml2js = require('xml2js');
var parseString = require('xml2js').parseString;

fs.readFile('input.xml','UTF-8', function(err, xmlData){
	if(err) console.log(err);
	console.log(xmlData);
	parseString(xmlData, function(err, jsonObj){
		if(err) console.log(err);
		console.log(jsonObj);
		
		jsonObj.parent.company = 'Wipro Ltd.';
		
		let builder = new xml2js.Builder();
		let newXmlData = builder.buildObject(jsonObj);
		
		fs.writeFileSync('output.xml', newXmlData);
		
		fs.readFile('output.xml', 'UTF-8', function(err, newXmlData){
			if(err) console.log(err);
			console.log(newXmlData);}
		);
		}
	);
	}
);