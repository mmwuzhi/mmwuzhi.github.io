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
document.getElementById('browserinfo').textContent = getBrowserInfo();

$.getJSON('https://api.ipify.org?format=json', function(data){
    document.getElementById('userip').textContent = "IP:" + data.ip;
});