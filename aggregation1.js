// Sintaxis

db.alumnos.insertMany([
    {
       name: "Jose",
       birth_date: new Date("1995-12-22"),
       grade: 5,
       group: "1DAM",
       height: 177
    },
    {
       name: "Dani",
       birth_date: new Date("2000-07-19"),
       grade: 2,
       group: "1DAM",
       height: 155
    },
    
    {
       name: "Ruben",
       birth_date: new Date("1867-11-25"),
       grade: 9,
       group: "1DAM",
       height: 173
    },
    {
       name: "Manuel",
       birth_date: new Date("1995-12-22"),
       grade: 4,
       group: "2DAM",
       height: 177
    },
    {
       name: "Lorenzo",
       birth_date: new Date("2000-07-19"),
       grade: 1,
       group: "2DAM",
       height: 155
    },
    {
       name: "Bea",
       birth_date: new Date("1997-06-04"),
       grade: 4,
       group: "2DAM",
       height: 180
    },
    
     {
        name: "Joselito",
        birth_date: new Date("1993-12-22"),
        grade: 8,
        group: "1ASIR",
        height: 185
     },
     {
        name: "Locuelo",
        birth_date: new Date("2000-07-19"),
        grade: 3,
        group: "1ASIR",
        height: 160
     },
     {
        name: "Beatriz",
        birth_date: new Date("1992-06-04"),
        grade: 8,
        group: "1ASIR",
        height: 200
     }
    
    
])

// Sintaxis de grupo

db.grupos.insertMany([
   {
      name: "1DAM",
      asignaturas: ["Programacion", "FOL", "Base de datos"],
      nota: 4
   },
   {
      name: "2DAM",
      asignaturas: ["Programacion", "EIE", "Base de datos"],
      nota: 5
   },
   {
      name: "2ASIR",
      asignaturas: ["Sistemas", "Redes", "Administracion"],
      nota: 5
      
   }

])


// $lookup montara un array de las colecciones que se uniran,
// montara un array de alumnos del grupo

db.grupos.aggregate([ 

    {
        $lookup: {
            from: "alumnos",
            localField: "name",
            foreignField: "group",
            as: "alumnos"
          }
    }

]).pretty()
