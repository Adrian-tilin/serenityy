
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"¿Qué es salud mental?",
        opcionA:"No tener ninguna enfermedad",
        opcionB:"Sentirse feliz todo el tiempo",
        opcionC:"El equilibrio emocional, psicológico y social",
        opcionD:"Evitar pensar en los problemas",
        correcta:"c"
    },
    {
        id:2,
        categoria:"general",
        titulo:"¿Sentirse triste o ansioso a veces es normal?",
        opcionA:" Sí, es parte de la vida",
        opcionB:"No, eso siempre es un problema grave",
        opcionC:"Solo si estás enfermo",
        opcionD:"No, indica debilidad",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"¿La salud mental es igual de importante que la salud física?",
        opcionA:"Sí, ambas son fundamentales",
        opcionB:"No, la salud física es más importante",
        opcionC:"Solo en casos extremos",
        opcionD:"Solo si hay enfermedades mentales",
        correcta:"a"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿Qué emoción puede ayudarte a protegerte de un peligro?",
        opcionA:" Miedo",
        opcionB:"Tristeza",
        opcionC:"Felicidad",
        opcionD:"Amor",
        correcta:"a"
    },
    {
        id:5,
        categoria:"general",
        titulo:"¿Hablar con alguien de confianza puede ayudar a sentirse mejor?",
        opcionA:"No, es mejor guardárselo",
        opcionB:"Sí, puede ser muy útil",
        opcionC:"Solo si es un psicólogo",
        opcionD:"Depende de la edad",
        correcta:"b"
    },
    {
        id: 6,
        categoria: "musica",
        titulo: "¿Qué es el trastorno bipolar?",
        opcionA: " Un cambio rápido de ideas",
        opcionB: " Un trastorno donde se alternan episodios de euforia y depresión",
        opcionC: " Una fobia a las alturas",
        opcionD: "Un problema de memoria",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "musica",
        titulo: "¿El ejercicio físico puede mejorar la salud mental?",
        opcionA: "No, solo mejora el cuerpo",
        opcionB: "Solo si vas al gimnasio",
        opcionC: "Solo si haces mucho",
        opcionD: "Sí, libera hormonas que ayudan",
        correcta: "d"
    },
    {
        id: 8,
        categoria: "musica",
        titulo: "¿Qué es la ansiedad y cómo se puede manifestar?",
        opcionA: "Es una enfermedad física que da fiebre",
        opcionB: "Es una emoción que puede causar nerviosismo o miedo",
        opcionC: "Es una actitud positiva",
        opcionD: "Es algo que solo sienten los adultos",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "musica",
        titulo: "¿Qué significa tener empatía hacia los demás?",
        opcionA: "Sentir lástima por los demás",
        opcionB: "Juzgar a las personas con problemas",
        opcionC: "Comprender cómo se sienten los otros",
        opcionD: "Evitar hablar de emociones",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "musica",
        titulo: "Qué diferencia hay entre tristeza y depresión?",
        opcionA: "Son lo mismo",
        opcionB: "La depresión dura solo un día",
        opcionC: " La tristeza es leve y la depresión es más profunda y duradera",
        opcionD: "La tristeza no es emocional",
        correcta: "c"
    },
    {
        id: 11,
        categoria: "deportes",
        titulo: "¿Qué es un ataque de pánico?",
        opcionA: " Una crisis intensa de ansiedad con síntomas físicos",
        opcionB: "Un episodio breve de felicidad extrema",
        opcionC: "Golf",
        opcionD: " Una reacción a la comida",
        correcta: "a"
    },
    {
        id: 12,
        categoria: "deportes",
        titulo: "¿Qué profesionales pueden ayudar en temas de salud mental?",
        opcionA: " Psicólogos y psiquiatras",
        opcionB: "Solo los profesores",
        opcionC: "Solo familiares",
        opcionD: "Solo los médicos generales",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "deportes",
        titulo: "¿Qué es el estrés y cómo puede afectar al cuerpo?",
        opcionA: "8",
        opcionB: "10",
        opcionC: "11",
        opcionD: "12",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "deportes",
        titulo: "¿Qué trastornos mentales son más comunes en adolescentes?",
        opcionA: " Ansiedad, depresión y trastornos alimenticios",
        opcionB: "Alzheimer y Parkinson",
        opcionC: "Fobias extremas y psicosis",
        opcionD: " Esquizofrenia y trastorno de personalidad múltiple",
        correcta: "a"
    },
    {
        id: 15,
        categoria: "deportes",
        titulo: "No tiene ninguna relación",
        opcionA: "Las personas con más dinero siempre tienen mejor salud mental",
        opcionB: "Las condiciones de pobreza pueden aumentar el riesgo de trastornos mentales",
        opcionC: "Golf",
        opcionD: "Solo afecta a los adultos",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "peliculas",
        titulo: "¿Cómo influye el entorno socioeconómico en la salud mental?",
        opcionA: "Las condiciones de pobreza pueden aumentar el riesgo de trastornos mentales",
        opcionB: "Las personas con más dinero siempre tienen mejor salud mental",
        opcionC: "No tiene ninguna relación",
        opcionD: "Solo afecta a los adultos",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "peliculas",
        titulo: "¿Cuál es una característica distintiva del trastorno esquizoafectivo en comparación con la esquizofrenia?",
        opcionA: "Presencia exclusiva de delirios",
        opcionB: "Alternancia de episodios depresivos o maníacos con síntomas psicóticos",
        opcionC: "Alucinaciones auditivas constantes",
        opcionD: "Ausencia total de síntomas afectivos",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "peliculas",
        titulo: "¿Qué función tiene el neurotransmisor serotonina en relación con la salud mental?",
        opcionA: "Controla los reflejos motores automáticos",
        opcionB: "Regula emociones, sueño y apetito; está implicado en la depresión",
        opcionC: " Estimula la respuesta de huida ante el miedo",
        opcionD: "Solo interviene en funciones endocrinas",
        correcta: "b"
    },
    {
        id: 29,
        categoria: "peliculas",
        titulo: "¿Cuál es un criterio diagnóstico del trastorno de personalidad antisocial según el DSM-5?",
        opcionA: "Patrón persistente de desprecio y violación de los derechos de los demás desde los 15 años",
        opcionB: " Rechazo a realizar actividades placenteras",
        opcionC: "Obsesiones repetitivas y conductas compulsivas",
        opcionD: "Aislamiento social voluntario",
        correcta: "a"
    },
    {
        id: 30,
        categoria: "peliculas",
        titulo: "¿Qué evidencia ha mostrado la epigenética respecto a los trastornos mentales?",
        opcionA: "Que experiencias tempranas pueden modificar la expresión genética relacionada con salud mental",
        opcionB: " Que los genes solo se expresan igual en todos los individuos",
        opcionC: " Que solo el ambiente determina la aparición de trastornos",
        opcionD: " Que los factores genéticos no tienen influencia alguna",
        correcta: "a"
    }
];

//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", ()=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 1;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);


const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
    numPreguntaActual++;
    if (numPreguntaActual < preguntasCategoria.length) {
        cargarSiguientePregunta(numPreguntaActual);
    } else {
        location.href = "/carhtml/final.html";
    }
});
