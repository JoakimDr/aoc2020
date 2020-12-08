var fs = require('fs');

var inputData = [];
try {  
    var data = fs.readFileSync('aoc2020/aoc4.txt', 'utf8');
//    console.log(data.toString());
    inputData = data.split(/\r?\n/);    
} catch(e) {
    console.log('Error:', e.stack);
}


var variables = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']

var varNames = '00000000';

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

var re = /^[a-f0-9]+$/gm;

const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

var rowElements;
var varName;
var varValue;
var validPassports = 0;
var sign = '';
var hexVal = '';

inputData.forEach(row => {
    if(row.length === 0){
        //new passport        
        console.log(varNames);
        if(varNames === '11111110' || varNames === '11111111' ){
//            console.log('valid passport');
            validPassports++;
//            console.log(validPassports + ' valid passport');
        }
//        console.log('new passport - clearing vars');
        varNames = '00000000';
    }
    else {        
        rowElements = row.split(' ');
        rowElements.forEach( elem => {
            varName = elem.split(':')[0];
            varValue = elem.split(':')[1];
            varOk = false;
            switch (varName) {
                case 'byr':
//                    console.log('byr ' + varValue);
                    if(varValue.length == 4 && !isNaN(varValue) && parseInt(varValue) >= 1920 && parseInt(varValue) <= 2002 ){
                        varOk = true;
                    }
                    break;
                case 'iyr':
//                    console.log('iyr ' + varValue);
                    if(varValue.length == 4 && !isNaN(varValue) && parseInt(varValue) >= 2010 && parseInt(varValue) <= 2020 ){
                        varOk = true;
                    }
                    break;
                case 'eyr':
//                    console.log('eyr ' + varValue);
                    if(varValue.length == 4 && !isNaN(varValue) && parseInt(varValue) >= 2020 && parseInt(varValue) <= 2030 ){
                        varOk = true;
                    }
                    break;
                case 'hgt':
//                    console.log('hgt' + varValue);
                    if(                        
                        (
                            varValue.substring(varValue.length - 2) == 'cm' 
                            && !isNaN(varValue.substring(0, varValue.length -2)) 
                            && parseInt(varValue.substring(0, varValue.length -2)) >= 150
                            && parseInt(varValue.substring(0, varValue.length -2)) <= 193
                        ) 
                        || (
                            varValue.substring(varValue.length - 2) == 'in'
                            && !isNaN(varValue.substring(0, varValue.length - 2)) 
                            && parseInt(varValue.substring(0, varValue.length - 2)) >= 59
                            && parseInt(varValue.substring(0, varValue.length - 2)) <= 76
                        )                                                 
                    ){
                        varOk = true;
                    }
                    break;
                case 'hcl':
                    sign = varValue.substring(0,1);
                    hexVal = varValue.substring(1);
                    if(sign == '#' && re.test(hexVal))
                    {
//                        console.log('hcl true '  + varValue);
                        varOk = true;
                    }
                    break;
                case 'ecl':
//                    console.log('ecl ' + varValue);
                    if(eyeColors.indexOf(varValue) > -1)
                    {
                        varOk = true;
                    }
                    break;
                case 'pid':
//                    console.log('pid ' + varValue);
                    if(varValue.length = 9 && !isNaN(varValue))
                    {
                        varOk = true;
                    }
                    break;
                case 'cid':
//                    console.log('cid' + varValue);
                    varOk = true;
                    break;
                                    
                default:
                    varOk = false;
                    break;
            }
            if(varOk){
                varNames = setCharAt(varNames, variables.findIndex(p => p === varName), '1');
            }
//            console.log(varName + ' ' + varNames);
        })
    }
});

console.log(validPassports);