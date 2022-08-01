const puppeteer = require('puppeteer');


async function main () {
    console.clear();
    console.log("My First Every Program in javaScript");
    console.log("");
    puppeteer.launch({ headless: true, executablePath: 'C://Program Files (x86)//Google//Chrome//Application//chrome.exe'}).then(async browser => { 
    await page.setViewport({ width: 1920, height: 1080});
    await page.goto('https://github.com/Asmodeus-was-taken') 
    var setTitle = require('First Js Program');
    addition();
    subtraction();
    Multiplication();
    Divide();
	main();
    })
}


function addition()
{
   a = 5;
   b = 10;

   console.log("Your Answer Is ", a + b );
   return 0;
}

function subtraction()
{
    a = 2;
    b = 4;
 
    console.log("Your Answer Is ", a - b );
    return 0;
}

function Multiplication()
{
    a = 9;
    b = 3;
 
    console.log("Your Answer Is ", a * b );
    return 0;
}

function Divide()
{
    a = 9;
    b = 3;
 
    console.log("Your Answer Is ", a / b );
    return 0;
}
