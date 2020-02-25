var num = 1
var btn = document.getElementsByTagName("button")
btn[0].onclick = function () {
    num++
    var tr = document.createElement('tr')
    tr.appendChild(createNode("td","<input type='text' name='purname"+num+"' required />"))
    tr.appendChild(createNode("td","<input type='text' name='purqty"+num+"' required />"))
    function createNode(element,text) {
        var td = document.createElement(element)
        td.innerHTML = text
        return td
    }
    document.getElementsByTagName("table")[0].tBodies[0].appendChild(tr)
}

var ckbx = document.getElementsByClassName("ckbx")
ckbx.onclick = function () {
    window.location.href='cartplus.php?menuname={$row[\'purname\']}'
} 
