function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt" ,true);
        request.onreadystatechange = function() {
            if (request.readyStage == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        }
        request.send(null);
    } else {
        alert("Sorry,your browser doesn\'t support XMLHttpRequest");
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(getNewContent);