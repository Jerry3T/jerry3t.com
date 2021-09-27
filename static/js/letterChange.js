setInterval(function() {

    let randString = "";
    let idek = ["@", "#", "-", "/", "|", "_", "~", "+", "=", "}", "{", "`", ";", ":", "?", ",", "<", ">", "[", "]", ".", "'", 
                "*", "&", "^", "%", "$", "!"]
    var item = "";
    let letters = document.getElementById("leftRight");
    let lettersdos = document.getElementById("rightLeft");
    for (let i = 0; i < 7; i++) {

        item = idek[Math.floor(Math.random() * idek.length)]
        randString += item;

    }

    let string = randString + "KEEPITUP" + randString
    let stringdos = randString + "UGOTTHIS" + randString;
    letters.textContent = string;
    lettersdos.textContent = stringdos;

}, 100)