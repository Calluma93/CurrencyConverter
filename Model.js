/*jslint node: true, browser: true */

"use strict";

function CurrencyModel() {

    this.conversion = function(display, from, to, cut){
        
        var convertFrom = parseFloat(localStorage.getItem(from)),
            convertTo = parseFloat(localStorage.getItem(to)),
            convertedAmount = 0;    
            localStorage.originalDisplay = display,
            localStorage.originalFrom = from,
            localStorage.originalTo = to,
            localStorage.originalCut = cut;
            
            

    convertedAmount = display * ((1 / convertFrom) * convertTo) * cut ;
    
    return Math.floor(convertedAmount);
    };
    
    this.switchFrom = function(from, to){
       
        var switchFrom = to;
    
    return switchFrom;
    };
    
    this.switchTo = function(from, to){
       
        var switchTo = from;
    
    return switchTo;      
    };
    
    this.getRates = function(){
        
        var currentday = new Date(),
            time = new Date();
        
        if (currentday.getTime() - (parseInt(window.localStorage.getItem("time"))) > 86400000  || localStorage.getItem("time")=== null){
        
            var xhr = new XMLHttpRequest();
            xhr.open('get', 'https://devweb2015.cis.strath.ac.uk/~aes02112/ecbxml.php', true);

            xhr.onreadystatechange = function () {
                if (xhr.status === 200 && xhr.readyState === 4) {

                var xmlDoc = xhr.responseXML;

                localStorage.EUR = 1;
                localStorage.USD = xmlDoc.getElementsByTagName("Cube")[2].getAttribute("rate");
                localStorage.JPY = xmlDoc.getElementsByTagName("Cube")[3].getAttribute("rate");
                localStorage.BGN = xmlDoc.getElementsByTagName("Cube")[4].getAttribute("rate");
                localStorage.CZK = xmlDoc.getElementsByTagName("Cube")[5].getAttribute("rate");
                localStorage.DKK = xmlDoc.getElementsByTagName("Cube")[6].getAttribute("rate");
                localStorage.GBP = xmlDoc.getElementsByTagName("Cube")[7].getAttribute("rate");
                localStorage.HUF = xmlDoc.getElementsByTagName("Cube")[8].getAttribute("rate");
                localStorage.PLN = xmlDoc.getElementsByTagName("Cube")[9].getAttribute("rate");
                localStorage.RON = xmlDoc.getElementsByTagName("Cube")[10].getAttribute("rate");
                localStorage.SEK = xmlDoc.getElementsByTagName("Cube")[11].getAttribute("rate");
                localStorage.CHF = xmlDoc.getElementsByTagName("Cube")[12].getAttribute("rate");
                localStorage.NOK = xmlDoc.getElementsByTagName("Cube")[13].getAttribute("rate");
                localStorage.HRK = xmlDoc.getElementsByTagName("Cube")[14].getAttribute("rate");
                localStorage.RUB = xmlDoc.getElementsByTagName("Cube")[15].getAttribute("rate");
                localStorage.TRY = xmlDoc.getElementsByTagName("Cube")[16].getAttribute("rate");
                localStorage.AUD = xmlDoc.getElementsByTagName("Cube")[17].getAttribute("rate");
                localStorage.BRL = xmlDoc.getElementsByTagName("Cube")[18].getAttribute("rate");
                localStorage.CAD = xmlDoc.getElementsByTagName("Cube")[19].getAttribute("rate");
                localStorage.CNY = xmlDoc.getElementsByTagName("Cube")[20].getAttribute("rate");
                localStorage.HKD = xmlDoc.getElementsByTagName("Cube")[21].getAttribute("rate");
                localStorage.IDR = xmlDoc.getElementsByTagName("Cube")[22].getAttribute("rate");
                localStorage.ILS = xmlDoc.getElementsByTagName("Cube")[23].getAttribute("rate");
                localStorage.INR = xmlDoc.getElementsByTagName("Cube")[24].getAttribute("rate");
                localStorage.KRW = xmlDoc.getElementsByTagName("Cube")[25].getAttribute("rate");
                localStorage.MXN = xmlDoc.getElementsByTagName("Cube")[26].getAttribute("rate");
                localStorage.MYR = xmlDoc.getElementsByTagName("Cube")[27].getAttribute("rate");
                localStorage.NZD = xmlDoc.getElementsByTagName("Cube")[28].getAttribute("rate");
                localStorage.PHP = xmlDoc.getElementsByTagName("Cube")[29].getAttribute("rate");
                localStorage.SGD = xmlDoc.getElementsByTagName("Cube")[30].getAttribute("rate");
                localStorage.THB = xmlDoc.getElementsByTagName("Cube")[31].getAttribute("rate");
                localStorage.ZAR = xmlDoc.getElementsByTagName("Cube")[32].getAttribute("rate");
                localStorage.time = time.getTime();

                }          
            };
            xhr.send(null);
        }
    };   
}
