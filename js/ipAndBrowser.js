function getBrowserInfo(){
    var agent = navigator.userAgent.toLowerCase() ;
    // console.log(agent);
    var arr = [];
    var system = agent.split(' ')[1].split(' ')[0].split('(')[1];
    arr.push(system);
    var regStr_edge = /edge\/[\d.]+/gi;
    var regStr_ie = /trident\/[\d.]+/gi ;
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi ;
    var regStr_saf = /safari\/[\d.]+/gi ;
    var regStr_opera = /opr\/[\d.]+/gi;
    //IE
    if(agent.indexOf("trident") > 0){
        arr.push(agent.match(regStr_ie)[0].split('/')[0]);
        arr.push(agent.match(regStr_ie)[0].split('/')[1]);
        return arr;
    }
    //Edge
    if(agent.indexOf('edge') > 0){
        arr.push(agent.match(regStr_edge)[0].split('/')[0]);
        arr.push(agent.match(regStr_edge)[0].split('/')[1]);
        return arr;
    }
    //firefox
    if(agent.indexOf("firefox") > 0){
        arr.push(agent.match(regStr_ff)[0].split('/')[0]);
        arr.push(agent.match(regStr_ff)[0].split('/')[1]);
        return arr;
    }
    //Opera
    if(agent.indexOf("opr")>0){
        arr.push(agent.match(regStr_opera)[0].split('/')[0]);
        arr.push(agent.match(regStr_opera)[0].split('/')[1]);
        return arr;
    }
    //Safari
    if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0){
        arr.push(agent.match(regStr_saf)[0].split('/')[0]);
        arr.push(agent.match(regStr_saf)[0].split('/')[1]);
        return arr;
    }
    //Chrome
    if(agent.indexOf("chrome") > 0){
        arr.push(agent.match(regStr_chrome)[0].split('/')[0]);
        arr.push(agent.match(regStr_chrome)[0].split('/')[1]);
        return arr;
    }else{
        arr.push('请更换主流浏览器，例如chrome,firefox,opera,safari,IE,Edge!')
        return arr;
    }
}
document.getElementById('list').textContent = getBrowserInfo();
// function getYourIP(){
//     var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
//     if (RTCPeerConnection) (function () {
//         var rtc = new RTCPeerConnection({iceServers:[]});
//         if (1 || window.mozRTCPeerConnection) {     
//             rtc.createDataChannel('', {reliable:false});
//         };

//         rtc.onicecandidate = function (evt) {
//             if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
//         };
//         rtc.createOffer(function (offerDesc) {
//             grepSDP(offerDesc.sdp);
//             rtc.setLocalDescription(offerDesc);
//         }, function (e) { console.warn("offer failed", e); });


//         var addrs = Object.create(null);
//         addrs["0.0.0.0"] = false;
//         function updateDisplay(newAddr) {
//             if (newAddr in addrs) return;
//             else addrs[newAddr] = true;
//             var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
//             for(var i = 0; i < displayAddrs.length; i++){
//                 if(displayAddrs[i].length > 16){
//        displayAddrs.splice(i, 1);
//        i--;
//                 }
//             }
//             document.getElementById('list').textContent = displayAddrs[0];
//         }

//         function grepSDP(sdp) {
//             var hosts = [];
//             sdp.split('\r\n').forEach(function (line, index, arr) { 
//                if (~line.indexOf("a=candidate")) {    
//        var parts = line.split(' '),       
//            addr = parts[4],
//            type = parts[7];
//        if (type === 'host') updateDisplay(addr);
//                 } else if (~line.indexOf("c=")) {       
//        var parts = line.split(' '),
//            addr = parts[2];
//        updateDisplay(addr);
//                 }
//             });
//         }
//     })();
//     else{
//         document.getElementById('list').textContent = "请使用主流浏览器：chrome,firefox,opera,safari";
//     }
// }

//get the IP addresses associated with an account

// function getIPs(callback){
//     var ip_dups = {};
//     //compatibility for firefox and chrome
//     var RTCPeerConnection = window.RTCPeerConnection
//         || window.mozRTCPeerConnection
//         || window.webkitRTCPeerConnection;
//     //bypass naive webrtc blocking
//     if (!RTCPeerConnection) {
//         var iframe = document.createElement('iframe');
//         //invalidate content script
//         iframe.sandbox = 'allow-same-origin';
//         iframe.style.display = 'none';
//         document.body.appendChild(iframe);
//         var win = iframe.contentWindow;
//         window.RTCPeerConnection = win.RTCPeerConnection;
//         window.mozRTCPeerConnection = win.mozRTCPeerConnection;
//         window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
//         RTCPeerConnection = window.RTCPeerConnection
//             || window.mozRTCPeerConnection
//             || window.webkitRTCPeerConnection;
//     }
//     //minimal requirements for data connection
//     var mediaConstraints = {
//         optional: [{RtpDataChannels: true}]
//     };
//     //firefox already has a default stun server in about:config
//     //    media.peerconnection.default_iceservers =
//     //    [{"url": "stun:stun.services.mozilla.com"}]
//     var servers = undefined;
//     //add same stun server for chrome
//     if(window.webkitRTCPeerConnection)
//         servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
//     //construct a new RTCPeerConnection
//     var pc = new RTCPeerConnection(servers, mediaConstraints);
//     //listen for candidate events
//     pc.onicecandidate = function(ice){
//         //skip non-candidate events
//         if(ice.candidate){
//             //match just the IP address
//             var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
//             var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];
//             //remove duplicates
//             if(ip_dups[ip_addr] === undefined)
//                 callback(ip_addr);
//             ip_dups[ip_addr] = true;
//         }
//     };
//     //create a bogus data channel
//     pc.createDataChannel("");
//     //create an offer sdp
//     pc.createOffer(function(result){
//         //trigger the stun server request
//         pc.setLocalDescription(result, function(){}, function(){});
//     }, function(){});
// }

// //Test: Print the IP addresses into the console

// getIPs(function(ip){console.log(ip);});

//用json格式获取
var ip = "1.2.3.4";
var options = {
  type: 'GET',
  dataType: "json",
  //async: false, //jquery3中可以直接使用回调函数，不用再指定async
  url: "https://api.ipify.org/?format=json"
};
$.ajax(options)
.done(function(data, textStatus, jqXHR) {
  if(textStatus == "success") {
    try {
      ip = data.ip;
    } catch (e) {
      ip = "1.2.3.4";
      if(window.console){
        console.log(e.message);
      }
    }
  } else {
    ip = "1.2.3.4";
  }
});
alert(ip);

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
addLoadEvent(getBrowserInfo);