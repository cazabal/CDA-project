// Modal
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón y el modal
    var btn = document.getElementById("myButton");
    var modal = document.getElementById("myModal");
    // Obtener el botón para cerrar el modal
    var closeBtn = document.getElementsByClassName("close")[0];
    // Cuando el usuario hace clic en el botón, abre el modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // Cuando el usuario hace clic en el botón para cerrar el modal, cierra el modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
});


// Modal 2




// Añadir nuevo album
let addAlbum = document.getElementById("addAlbum")
let ArtistName = document.getElementById("ArtistName")
addAlbum.addEventListener("click", () => {

    let data = {

        title: formulario.title.value,

        IdArtist: ArtistName.value
    }

    data = JSON.stringify(data)

    fetch('/api/artist', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: data
    })
})



