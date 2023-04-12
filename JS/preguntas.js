function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
   
    {
      pregunta: " ¿Cuál es el lugar más frío de la tierra?",
      ayuda: "Esta situada en el emisferio sur",
      ayudaImg: "https://i.ibb.co/q1rFhmc/descarga-4.jpg",
      imagen: "https://i.ibb.co/BBbTL07/descarga.jpg",
      respuesta: "La Antártida",
      distractores: ["Polo Norte", "Canada", "Estados Unidos"],
    },
    {
      pregunta: " ¿Cuál es el río más largo del mundo?",
      ayuda: "Esta en america del sur y atraviesa Peru",
      imagen: "https://i.ibb.co/hZysCVw/descarga-3.jpg",
      respuesta: "Amazonas",
      distractores: ["Nilo", "Misisipi", "Congue"],
    },
    {
      pregunta: "¿Dónde originaron los juegos olímpicos?",
      imagen: "https://i.ibb.co/5nTtfLZ/descarga.png",
      respuesta: "Grecia",
      distractores: ["Holanda", "Canda", "Estados Unidos"],
    },
  

    {
        pregunta: "¿Cuáles son los cinco tipos de sabores primarios?",
        imagen: "https://i.ibb.co/JmWkjd9/saboresprimarios.jpg",
        respuesta:  " dulce, amargo, ácido, salado y umami",
        distractores:["amargo, picante,dulce, salado y astrigente","dulce,agrio,amargo,unami y acido", "dulce,salado,graso,acido y amargo" ]

    },
    {
        pregunta: "¿Cómo se llama la capital de Mongolia?",
        imagen: "https://i.ibb.co/rxSjCbv/descarga-2.jpg",
        respuesta: opnLaTeX("Ulan Bator"),
        distractores: [opnLaTeX("Berlin"), opnLaTeX("Praga"), opnLaTeX("Viena")],
      },
];