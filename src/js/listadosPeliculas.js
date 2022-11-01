let peliculas=[
    
    {nombre:"AMSTERDAMNUEV",
    duracion:120,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FAMSTERDAMNUEVO1.jpg?alt=media&token=05e1293c-bc05-4530-b4b0-117530fb8f9e"

},
    {nombre:"Black adam ultimo",
    duracion:130,
poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FBlack%20adam%20ultimonuevo.jpg?alt=media&token=cec193af-5c4e-4a12-b3e4-857df7aaf8ba"},
    {nombre:"EL CATACLISMO1",
    duracion:190,
poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FEL%20CATACLISMO1.jpg?alt=media&token=9c4edefc-0c8c-4ad6-85e4-9722c7f45d4a" },
    {nombre:"ERASE UNA VEZ UN",
    duracion:140,poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=54fffc52-707e-4251-83cc-e3a49d25c622"},
    {nombre:"LA JAURIA",
    duracion:150,poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FLA%20JAURIA.jpg?alt=media&token=b9233ee5-db24-45ce-bccb-1d39f80b0252" },
    {nombre:"LA MUJER REY NU",
    duracion:190,
     poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FLA%20MUJER%20REY%20NUEVO%20POSTER1.jpg?alt=media&token=33f9f767-7206-4dcb-a44a-1b486e963ca1"  },
    {nombre:"ONEPIECE",
    duracion:110,
     poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FONEPIECE1.jpg?alt=media&token=63a6ecd7-4764-44ee-ad9b-6e0359fd472d"},
    {nombre:"SONRIE",
    duracion:90
    ,poster:"https://firebasestorage.googleapis.com/v0/b/cinnema-33e13.appspot.com/o/imagenes%2FSONRIE1.jpg?alt=media&token=a7ac7211-d475-4a84-860e-25ce7b2b599c"}
]

let fila=document.getElementById

peliculas.forEach(function(peliscula) {
    console.log(peliscula.poster)
    let foto=document.createElement("img")
    foto.src=peliscula.poster

    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)
    
})