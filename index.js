let data = [
    {
      name: "Abaddon",
      description:
        "Capaz de transformar los ataques enemigos en una cura para él mismo, Abaddon puede sobrevivir casi cualquier enfrentamiento. Con su habilidad para poner escudos sobre sus aliados y lanzar la espiral de doble filo a aliados o enemigos, siempre está listo para marchar a la batalla.",
      mainAttribute: "Fuerza",
      attackType: "Cuerpo a cuerpo",
      complexity: "Facil",
      image:
        "https://i.pinimg.com/236x/1a/30/20/1a3020c95a4e35a0066a163617cfda63--juggernaut-dota-sand-king.jpg"
    },
    {
      name: "Zeus",
      description:
        "Nadie puede esconderse de Zeus, ya sea con uno de sus relámpagos para revelar los alrededores, lanzando uno de sus arcos entre los enemigos cercanos o invocando una terrible descarga de rayos contra todos sus oponentes. Dondequiera que sus enemigos estén, Zeus los encontrará.",
      mainAttribute: "Inteligencia",
      attackType: "A distancia",
      complexity: "Facil",
      image: "https://pbs.twimg.com/media/DgnwXFmWkAMLhns.jpg"
    },
    {
      name: "LIFESTEALER",
      description:
        "Si Lifestealer logra acercarse a su presa, poco podrá hacer para salvarse. Viajando dentro de un creep o un héroe aliado, cuando se encuentra cerca de un enemigo, emerge del cuerpo de su huésped, sorprendiendo a los adversarios y desgarrándolos con sus garras.",
      mainAttribute: "Fuerza",
      attackType: "Cuerpo",
      complexity: "Intermedio",
      image:
        "https://i.pinimg.com/originals/a6/51/7e/a6517e2ecaf48f1315ae69077580ee00.png"
    }
  ];
  let table = document.querySelector("#table");
  let container = table.innerHTML;
  for (let i=0; i < data.length; i++) {
      container = container + 
      `<div class="row">
        <div class="col-2 border border border-danger">${data[i].name}</div>
        <div class="col-2 border border border-danger"><img src="${data[i].image}" width="100%" /></div>
        <div class="col border border border-danger">${data[i].description}</div>
        <div class="col border border border-danger">${data[i].mainAttribute}</div>
        <div class="col border border border-danger">${data[i].attackType}</div>
        <div class="col border border border-danger">${data[i].complexity}</div>
      </div>`
  }
  document.querySelector("#table").innerHTML=container
