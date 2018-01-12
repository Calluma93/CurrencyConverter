/*jslint node: true, browser: true */

"use strict";

function CurrencyController() {

    this.init = function(){
      
        model.getRates();
        view.init();
                    
        view.setonekeyCallback(function(){
            view.updateDisplay("1");
        });
        
        view.settwokeyCallback(function(){
            view.updateDisplay("2");
        });
        
        view.setthreekeyCallback(function(){
            view.updateDisplay("3");
        });
        
        view.setfourkeyCallback(function(){
            view.updateDisplay("4");
        });
        
        view.setfivekeyCallback(function(){
            view.updateDisplay("5");
        });
        
        view.setsixkeyCallback(function(){
            view.updateDisplay("6");
        });
        
        view.setsevenkeyCallback(function(){
            view.updateDisplay("7");
        });
        
        view.seteightkeyCallback(function(){
            view.updateDisplay("8");
        });
        
        view.setninekeyCallback(function(){
            view.updateDisplay("9");
        });
        
        view.setzerokeyCallback(function(){
            view.updateDisplay("0");
        });
        
        view.setswitchCallback(function(){
            view.switch(model.switchFrom(view.getFrom(), view.getTo()), model.switchTo(view.getFrom(), view.getTo()));          
        });
        
        view.setclearkeyCallback(function(){
            view.clearDisplay();
        });
        
        view.setenterkeyCallback(function(){
            view.setConverted(model.conversion(view.getDisplay(), view.getFrom(), view.getTo(), view.getCut()));
        });
    };
}

var view = new CurrencyView(),
    controller = new CurrencyController(),
    model = new CurrencyModel();

window.addEventListener("load", controller.init(), false);
