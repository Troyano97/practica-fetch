const API_1 = "https://hp-api.onrender.com/api/characters/students";

async function obtenerInfoApi(api) {

    const resultado = await fetch(api);
    const info = await resultado.json();

    console.log(info);
}

obtenerInfoApi(API_1);