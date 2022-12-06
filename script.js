const bod = document.getElementsByClassName("colored-div")
const inp = document.getElementsByName('coll')



// inp.addEventListener('input', change);

function change() {
    let x = inp[0].value
    bod[0].style.backgroundColor = x;
}
function generateHexCode() {
    let hex = "#"
    let hexstring = "0123456789abcdef"
    for (let i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * 16)
        hex += hexstring[x]
        
    }
    bod[0].style.backgroundColor = hex;
    inp[0].value= hex;
}
generateHexCode()
