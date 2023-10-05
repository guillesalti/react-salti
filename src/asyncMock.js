// import { resolvePath } from "react-router-dom"

//ARTICULOS Y PROMESAS
const articulos = [
    {id:'1001',nombre:'Calleras',precio:10250,categoria:'accesorios',img:'https://acdn.mitiendanube.com/stores/986/962/products/_mg_60791-8b3e8b6919fbc0691016915200013560-1024-1024.webp',stock:'25',descripcion:'Calleras de cuero con velcro'},
    {id:'1002',nombre:'Straps',precio:4000,categoria:'accesorios',img:'https://acdn.mitiendanube.com/stores/986/962/products/befunky-photo-21-9df6f1aa1436e3b63816784523726116-1024-1024.webp',stock:'20',descripcion:'Fijación que brinda mayor agarre a las barras'},
    {id:'1003',nombre:'Vincha Camuflada',precio:6050,categoria:'indumentaria',img:'https://acdn.mitiendanube.com/stores/986/962/products/befunky-photo-111-858ad1f7c482fe737716784537016063-1024-1024.webp',stock:'10',descripcion:'Vincha antitranspirante'},
    {id:'1004',nombre:'Remera Armour',precio:10200, categoria:'indumentaria',img:'https://acdn.mitiendanube.com/stores/986/962/products/_mg_9788-11-afbb379747dee895af16930024803448-1024-1024.webp',stock:'15',descripcion:'Remera de entrenamiento talle unico'}
]

export const getArticulos = () => {
    return new Promise ((resuelve) => {
        setTimeout(()=>{
            resuelve(articulos)
        }, 500)
    })
}

export const getElementById = (articulosId) => {
    return new Promise ((resuelve) => {
        setTimeout(() =>{
            resuelve(articulos.find(articulo => articulo.id === articulosId))
        }, 500)
    })
}

export const getElementByCategoria = (categoria) => {
    return new Promise ((resuelve) =>{
        setTimeout (()=>{
            resuelve (articulos.filter(articulo=> articulo.categoria === categoria))
        }, 500)
    })
}