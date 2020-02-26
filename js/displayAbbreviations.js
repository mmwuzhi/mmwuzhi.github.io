function displayAbbreviations() {
    let abbreviations = document.getElementsByName("abbr")
    if(abbreviations.length < 1) return false 
    let defs = new Array()
    for(i=0;i<abbreviations.length;i++) {
        let definition = abbreviations[i].getAttribute("title")
    }
}