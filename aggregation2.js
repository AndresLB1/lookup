// Sintaxis


db.articulos.insertMany([
    {
       codigo: 0001,
       nombre_articulo: "Mesa plegable",
       familia_articulo: "Articulos de exterior y patio",
       precio: 177
    },
    {
       codigo: 0002,
       nombre_articulo: "Cargador de Movil Tipo-C",
       familia_articulo: "Tecnologia e informatica",
       precio: 9.50
    },
    {
       codigo: 0003,
       nombre_articulo: "Ceras de colores Alpino",
       familia_articulo: "Dibujo y pintura",
       precio: 1.80
    },
    {
       codigo: 0004,
       nombre_articulo: "Alfombrilla de coche",
       familia_articulo: "Articulos de Vehiculos",
       precio: 17.98
    },
    {
       codigo: 0005,
       nombre_articulo: "Fairy",
       familia_articulo: "Limpieza y articulos de hogar",
       precio: 2.99
    },
    {
       codigo: 0006,
       nombre_articulo: "Monopoly",
       familia_articulo: "Juegos de mesa",
       precio: 30.00
    },
    {
       codigo: 0007,
       nombre_articulo: "Teclado Confort+",
       familia_articulo: "Tecnologia e informatica",
       precio: 20.00
    },
])

db.pedidos.insertMany([
    {
       nombre_cliente: "Jose Manuel SL",
       fecha_pedido: new Date("2020-02-21") ,
       articulo: [
           {
            codigo_articulo: 0006, 
            cantidad: 12 
           },
           {
            codigo_articulo: 0002, 
            cantidad: 3 
           }
        ]
    },
    {
        nombre_cliente: "IKEAndo",
        fecha_pedido: new Date("2020-02-13") ,
        articulo: [
            {
             codigo_articulo: 0001, 
             cantidad: 4 
            },
            {
             codigo_articulo: 0005, 
             cantidad: 5 
            }
         ]
     },
     {
        nombre_cliente: "Toys and Us",
        fecha_pedido: new Date("2020-01-11") ,
        articulo: [
            {
             codigo_articulo: 0006, 
             cantidad: 14 
            },
            {
             codigo_articulo: 0005, 
             cantidad: 4 
            }
         ]
     },
])


// Traer los articulos los cuales esten reoresentados en
// pedidos

db.pedidos.aggregate([ 

    {
        $lookup: {
            from: "articulos",
            localField: "articulo.codigo_articulo",
            foreignField: "codigo",
            as: "articulo_inf"
          }
    }

]).pretty()

// Traer los articulos y calcular el total

db.pedidos.aggregate([ 

    {
        $lookup: {
            from: "articulos",
            localField: "articulo.codigo_articulo",
            foreignField: "codigo",
            as: "articulo_inf"
          }
    },
    {
        $project: {
           item: 1,
           dimensions: { $arrayToObject: "$" }
        }
     },
    {
        $project: {
            total_pedido: { $sum: {$multiply: ["$cantidad", "$precio"]} } 
        } 
    }

]).pretty()