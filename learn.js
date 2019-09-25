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

var h1 =document.getElementsByTagName("h1")[0];
h1.onclick = function change() {
    if(x) {
        h1.style.color = '#663399';
        h1.style.textShadow = '3px 3px 3px #ADD8E6';
        x = false;
    }else{
        h1.style.color = '#ADD8E6';
        h1.style.textShadow = '3px 3px 3px #663399';
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
function imgPage(){
    var imgpage = document.getElementById("imgpage");
    var links = imgpage.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            showPic(this);
            return false;
        }
    }
}

function popUp(winURL){
    window.open(winURL,"popup","width=1280,height=720");
}
function prepareLinks(){
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        if(links[i].getAttribute("class") == "popup"){
            links[i].onclick = function(){
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

window.onload = function(){
    prepareLinks();
    imgPage();
    alert("丢人了");
};
// alert去标题
// window.alert = function (name) {
//     const iframe = document.createElement('IFRAME');
//     iframe.style.display = 'none';
//     iframe.setAttribute('src', 'data:text/plain,');
//     document.documentElement.appendChild(iframe);
//     window.frames[0].window.alert(name);
//     iframe.parentNode.removeChild(iframe);
//   };

// function countBodyChildren(){
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.childNodes.length);
// }

// window.onload = countBodyChildren();