const API_PETS = "COLE_AQUI_SUA_URL_DO_GOOGLE_SCRIPT";

let pets = [];

async function carregarPets() {
  const res = await fetch(API_PETS);
  pets = await res.json();

  iniciarMapa(); // função que cria os markers
}

carregarPets();
