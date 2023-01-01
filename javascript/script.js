var name;
function Hello() {
     alert("Hello, World");
 }
 function checkscope() {
    alert("welcome");
 }
 function i9pdf(name, age) {

     document.writeln(name + "<br />");
     document.writeln(age);
     //alert("I-9 PDF1");
     var a = 10;
     var b = 2;
     var breakline = "<br />";
     document.writeln(a + b);
     document.writeln(a - b);
     document.writeln(a * b);
     document.writeln(a / b);
     document.writeln(a % b);
     document.write(a==b);
     document.write("<br/>" + (a<<1));
     a /= b;
     document.write("<br/>" + a);
     var result = a>b?null:false;
     document.write("<br />" + result);
     document.write(typeof result);
     document.write(breakline);
     if (a > b) {
         document.write("a is greater");
     }
     else {
         document.write("b is not greater");
     }
     document.write(breakline);
     var c = 3;
     switch (c) {
         case 1: document.write("Jan");document.write(breakline);break;
         case 2: document.write("Feb");document.write(breakline);break;
         case 3: document.write("Mar");document.write(breakline);break;
         case 4: document.write("Apr");document.write(breakline);break;
         case 5: document.write("May");document.write(breakline);break;
         case 6: document.write("June");document.write(breakline);break;
         case 7: document.write("July");document.write(breakline);break;
         case 8: document.write("Aug");document.write(breakline);break;
         case 9: document.write("Sep");document.write(breakline);break;
         case 10: document.write("Oct");document.write(breakline);break;
         case 11: document.write("Nov");document.write(breakline);break;
         case 12: document.write("Dec");

     }
     document.write(breakline);
     for (aProperty in navigator) {
         document.write(aProperty);
         document.write("<br />");
     }
     outerloop:     // This is the label name

         for (var i = 0; i < 3; i++) {
             document.write("Outerloop: " + i + "<br />");
             innerloop:
             for (var j = 0; j < 5; j++) {
                 if (j == 3) {
                     break innerloop;
                 }
                 document.write("Innerloop: " + j + "<br />");
             }
         }
    //Hello();
         var func = function(x,y) { return x*y;};
         document.write(func(10,10));
         var ret = confirm("Do you want to continue");
         document.write(ret);
     var name = prompt("Enter your name : ", "your name here");
     document.write(breakline);
     document.write(name);
 }
function range() {
sumresult.value = parseInt(z1.value)+parseInt(z2.value)+parseInt(z3.value);
}

    function afterprint() {
        alert("Document printing");
    }
    function beforeprint() {
        alert("Document is about to print");
        window.print();
    }
    function beforeunload() {
        return "Before unload";
    }
    function imagenotloaded() {
     document.getElementById("demo").innerHTML = "The image could not be loaded.";
    }
function loadImage() {
    alert("Image is loaded");
}
function onFunction() {
    alert ("Your browser is working online.");
}

function offFunction() {
    alert ("Your browser is working offline.");
}
function showFunction() {
    alert("Welcome!");
}
function hideFunction() {
    alert("Hide!");
}
function redofunc() {
    alert("redo");
}
function resizefunc() {
    alert("resize to Width = " + window.outerWidth + " Height = " + window.outerHeight);
    document.getElementById("w1").innerHTML = window.outerWidth;
    document.getElementById("h1").innerHTML = window.outerHeight;
}
function inputfunc() {
    document.getElementById("q").innerHTML = user_id.value;
}
function invalid() {
    alert("please fill the form");
}
function reset1() {
    alert("reset done");
}
function dragging() {
    document.getElementById("q").innerHTML = "dragging in process";
}
function empty() {
    alert("Video ended");
}
function onseek() {
    alert("Seek operation completed!");
}
function volumechange() {
    alert("volume change");
}
function validate() {
    cookievalue = escape(document.myform.user_id.value) + ";";
    document.cookie = "name=" + cookievalue;
        var allcookies = document.cookie;
        document.write ("All Cookies : " + allcookies );
        // Get all the cookies pairs in an array
        cookiearray = allcookies.split(';');

        // Now take key value pair out of this array
        for(var i=0; i<cookiearray.length; i++) {
            name = cookiearray[i].split('=')[0];
            value = cookiearray[i].split('=')[1];
            document.write ("Key is : " + name + " and Value is : " + value);
        }
    var now = new Date();
    now.setMonth( now.getMonth() + 1 );
    document.write(now);
}
function durationchange() {
    alert("duration change");
}
function autorefresh() {
    setTimeout("location.reload(true);", 5000);
    /*var browsername = navigator.appName;
    alert(browsername);*/
}
function autoredirect() {
    setTimeout('redirect()', 10000);
}
function redirect() {
    window.location="https://bingsport.com/";
}

function printdoc() {
    var str = "Arpit Khandelwal";
    window.print();
    /*alert("a");
    alert(document.title);
    alert("Arpit.Khandelwal".length);
*/    str.blink();

    var mybook = new book("abc","efg");
    mybook.addPrice(456);
    book.prototype.count=800;
   // alert(mybook.title + " " + mybook.author + " " + mybook.price + " " + mybook.count);
    var num = new Number(271.1233456);
    //alert(num.toExponential());
    alert(Number.MAX_VALUE);
    alert(num.toPrecision(4));
    var val = new Boolean(true);
  /*  alert(val.constructor);
    alert(val.toString());
    alert(val.valueOf());
    var str = new String("Arpit Khandelwal");
    alert(str.charCodeAt(3));
    alert(str.charCodeAt(15));
    alert(str.length);
    alert(str.indexOf("del"));
    alert(str.slice(1,5));
    alert(str.split(" ", 2));
    alert(str.anchor("Name"));
    alert(str.big("Name"));
    alert(str.blink());
    document.write(str.bold());
    document.write(str.fixed());
    document.write(str.fontcolor("red"));
    document.write(str.fontsize(5));
    alert(str.fontcolor("red"));
    alert(str.fontsize(5));
    alert(str.link("contact.html"));
    document.write(str.link("contact.html"));
    alert(str.strike());
    document.write(str.strike());
    alert(str.sub());
    alert(str.sup());
    document.write(str.sub());
    document.write(str.sup());*/
    var fruits = [ "apple", "orange", "mango" ];
    alert(fruits[0]);
    alert(fruits.index);
    alert(fruits.length);
// every function
    if (!Array.prototype.every) {
        Array.prototype.every = function(fun /*, thisp*/) {
            var len = this.length;
            if (typeof fun != "function")
                throw new TypeError();

            var thisp = arguments[1];
            for (var i = 0; i < len; i++) {
                if (i in this && !fun.call(thisp, this[i], i, this))
                    return false;
            }
            return true;
        };
    }
    function isBigEnough(element, index, array) {
        return (element >= 10);
    }
    var passed = [12, 5, 8, 130, 44].every(isBigEnough);
    document.write("First Test Value : " + passed );

    passed = [12, 54, 1, 130, 44].every(isBigEnough);
    document.write("Second Test Value : " + passed );
document.write("<br />");
    //filter function
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(fun /*, thisp*/) {
            var len = this.length;

            if (typeof fun != "function")
                throw new TypeError();

            var res = new Array();
            var thisp = arguments[1];

            for (var i = 0; i < len; i++) {
                if (i in this) {
                    var val = this[i];   // in case fun mutates this
                    if (fun.call(thisp, val, i, this))
                        res.push(val);
                }
            }
            return res;
        };
    }
    function isBigEnough(element, index, array) {
        return (element >= 10);
    }
    var filtered  = [12, 5, 8, 130, 44].filter(isBigEnough);
    document.write("Filtered Value : " + filtered );

    document.write(fruits.join("+"));
    document.write(fruits.pop());
    document.write(fruits.push("mango"));
    document.write("<br >");
    document.write(fruits.reverse());
    document.write("<br >");
    document.write(fruits.sort());

    var arr = new Array("orange", "mango", "banana", "sugar");
    var length = arr.unshift("water");
    document.write("Returned array is : " + arr );
    document.write("<br /> Length of the array is : " + length );
    var dt = new Date();
    document.write(dt.toDateString());
    document.write(dt.toLocaleTimeString());
    document.write("<br >");
    document.write(Math.SQRT1_2);
    document.write("<br >");
    document.write(window.document.URL);
    document.write("<br >");
    document.write(document.activeElement.tagName);
}
function addPrice(amount) {
    with(this) {
        price = amount;
    }
}

function book(title, author) {
        this.title = title;
        this.author  = author;
        this.price=0;
        this.addPrice = addPrice;  // Assign that method as property.
    }

