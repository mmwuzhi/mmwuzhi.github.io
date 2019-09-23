function shout() {
    var beatles = ["John", "Paul", "George", "Ringo"];
    var lenoon = {name: "John", year: "1940", living: false};
    /*beatles[0] = lenoon;
    alert(beatles[0].name);
    beatles = {};
    beatles.vocalist = lenoon;
    alert(beatles.vocalist.living);*/
    for (var count = 0; count <= 3; count++) {
        alert(beatles[count]);
    }
}

/*function convertToCelsius(undou) {
    var sheshi_du = undou -32;
    sheshi_du/=1.8;
    return sheshi_du+"℃";
}
var huashi_du = 95;
var sheshi_du = convertToCelsius(huashi_du);
alert(sheshi_du);*/

var current_date = new Date();

var x=true;

function change() {

    if(x == true) {
        document.getElementsByTagName('h1')[0].style.color = '#663399';
        document.getElementsByTagName('h1')[0].style.textShadow = '3px 3px 3px #ADD8E6';
        x = false;
    }else{
        document.getElementsByTagName('h1')[0].style.color = '#ADD8E6';
        document.getElementsByTagName('h1')[0].style.textShadow = '3px 3px 3px #663399';
        x = true;
    }
}
// var members = document.getElementsByTagName("li");
// for(var i=0;i<members.length;i++){
//     alert(members[i].getAttribute("onClick"));
// }
// var link = document.getElementById("profile");
// var items = link.getElementsByTagName("*");
// alert(items.length);
// var idol = document.getElementsByClassName("idol");
// alert(idol.length);

var idol=document.getElementsByClassName("idol");
for(var i=0;i<21;i++){
    a = i + 1;  
    idol[i].setAttribute("onClick","javascript:window.open('https://www.hinatazaka46.com/s/official/artist/" + a + "?ima=0000','_blank')");
}

function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var noimg = document.getElementById("nullimg");
    noimg.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

// alert去标题
// window.alert = function (name) {
//     const iframe = document.createElement('IFRAME');
//     iframe.style.display = 'none';
//     iframe.setAttribute('src', 'data:text/plain,');
//     document.documentElement.appendChild(iframe);
//     window.frames[0].window.alert(name);
//     iframe.parentNode.removeChild(iframe);
//   };

alert("丢人了");
// function countBodyChildren(){
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.childNodes.length);
// }

// window.onload = countBodyChildren();