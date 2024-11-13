const areaLista = document.getElementById("character-list")

fetch("https://rickandmortyapi.com/api/character/")
.then((response) => {

    if (!response.ok) {
        throw new Error("Ha ocurrido un error")
    }

    return response.json()
})

.then((data) => {

    data.results.forEach(element => {
       const divPersonaje = document.createElement("div")
       divPersonaje.classList.add("personaje")
       divPersonaje.innerHTML=
        `
        <img src="${element.image}" alt="${element.name}" class="imgPersonaje">
        `

        const divInfo = document.createElement("div")
        divInfo.classList.add("informacion")
        divInfo.innerHTML =
        `
        <h3 class="tituloInfo">Name:</h3> 
        <p>${element.name}</p>
        <h3 class="tituloInfo">Species:</h3> 
        <p>${element.species}</p>
        `

       areaLista.appendChild(divPersonaje)
       divPersonaje.appendChild(divInfo)

    });
})
    