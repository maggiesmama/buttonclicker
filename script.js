console.log ("running script")


function like (id) {
    console.log ("in like")
    console.log (id)
    console.log ( document.querySelector(id))
    document.querySelector(id).innerText=parseInt (document.querySelector(id).innerText) +1
    alert ("Ninja was liked")
}

function disappear (element) {
    element.remove ()
}