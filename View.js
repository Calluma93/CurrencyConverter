"use strict";

function CurrencyView(){
    
    var onekey = document.getElementById("one"),
        twokey = document.getElementById("two"),
        threekey = document.getElementById("three"),
        fourkey = document.getElementById("four"),
        fivekey = document.getElementById("five"),
        sixkey = document.getElementById("six"),
        sevenkey = document.getElementById("seven"),
        eightkey = document.getElementById("eight"),
        ninekey = document.getElementById("nine"),
        zerokey = document.getElementById("zero"),
        clearkey = document.getElementById("clear"),
        enterkey = document.getElementById("enter"),
        switchbutton = document.getElementById("switch"),
        openNav = true,
        originalDisplay,
 
    addMouseAndTouchUp = function (elementID, handler) {
        //utility function to add both mouseup and touchend events and prevent double events
        var element = document.getElementById(elementID),
            f = function (e) {
                e.preventDefault();//stops mobile browsers faking the mouse events after touch events
                handler(e);
                return false;
            };
        element.addEventListener("mouseup", f, false);
        element.addEventListener("touchend", f, false);
    },
            
    openCloseNav = function () {
        //doggle the side menu reveal
        if (openNav) {
            openNav = false;
            document.getElementById("nav").className = "closedmenu";
           // document.getElementById("mainsection").className = "closedmenu";
            document.getElementById("navelem").style.display = "none";
        } else {
            openNav = true;
            document.getElementById("nav").className = "";
          //  document.getElementById("mainsection").className = "";
            document.getElementById("navelem").style.display = "block";
        }
    };

    this.setonekeyCallback = function (cb){
        onekey.addEventListener("click", cb);
    };
    
    this.settwokeyCallback = function (cb){
        twokey.addEventListener("click", cb);
    };
    
    this.setthreekeyCallback = function (cb){
        threekey.addEventListener("click", cb);
    };
    
    this.setfourkeyCallback = function (cb){
        fourkey.addEventListener("click", cb);
    };
    
    this.setfivekeyCallback = function (cb){
        fivekey.addEventListener("click", cb);
    };
    
    this.setsixkeyCallback = function (cb){
        sixkey.addEventListener("click", cb);
    };
    
    this.setsevenkeyCallback = function (cb){
        sevenkey.addEventListener("click", cb);
    };
    
    this.seteightkeyCallback = function (cb){
        eightkey.addEventListener("click", cb);
    };
    
    this.setninekeyCallback = function (cb){
        ninekey.addEventListener("click", cb);
    };
    
    this.setzerokeyCallback = function (cb){
        zerokey.addEventListener("click", cb);
    };
    
    this.setclearkeyCallback = function (cb){
        clearkey.addEventListener("click", cb);
    };
    
    this.setenterkeyCallback = function (cb){
        enterkey.addEventListener("click", cb);
    };
    
    this.setswitchCallback = function (cb){
        switchbutton.addEventListener("click", cb);
    };

    this.updateDisplay = function(val){
      document.getElementById("displayscreen").value += val;
    };
    
    this.clearDisplay = function() {
        document.getElementById("displayscreen").value = document.getElementById("displayscreen").placeholder = "";
    };
    
    this.getFrom = function() {
       return document.getElementById("FROM").value;
    };
    
    this.getTo = function() {
       return document.getElementById("TO").value;
    };
      
    this.getDisplay = function() {
        return document.getElementById("displayscreen").value;
    };
    
    this.getCut = function() {
        return document.getElementById("CUT").value;
    };   
    
    this.setConverted = function(convertedAmount) {
        this.clearDisplay();
        originalDisplay = localStorage.getItem("originalDisplay");
        document.getElementById("displayscreen").placeholder = this.getFrom() + " " + originalDisplay + " -> " + convertedAmount + " " + this.getTo();  
    };
    
    this.switch = function(newFrom, newTo) {
       document.getElementById("FROM").value = newFrom;
       document.getElementById("TO").value = newTo;
    };
    
    this.init = function () {
        openCloseNav();
        addMouseAndTouchUp("navmenu", openCloseNav);    
            
        this.setInitFrom = function() {
        document.getElementById("FROM").value = localStorage.getItem("originalFrom");   
        };
            
        this.setInitTo = function() {
        document.getElementById("TO").value = localStorage.getItem("originalTo");   
        };
            
        this.setInitCut = function() {
        document.getElementById("CUT").value = localStorage.getItem("originalCut");   
        };
    };
}
