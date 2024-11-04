const ctx = document.getElementById("myChart");
let socialistas = 0;
let liberales = 0;
let animalistas = 0;
let centristas = 0;
let ecologistas = 0;

function vote(param) {
  switch (param) {
    case 0:
      socialistas++;
      console.log(socialistas);
      break;
    case 1:
      liberales++;
      console.log(liberales);
      break;
    case 2:
      animalistas++;
      console.log(animalistas);
      break;
    case 3:
      centristas++;
      console.log(centristas);
      break;
    case 4:
      ecologistas++;
      console.log(ecologistas);
      break;
  }
  myChart.data.datasets[0].data = [
    socialistas,
    liberales,
    animalistas,
    centristas,
    ecologistas,
  ];
  myChart.update();
}

function reset() {
  socialistas = 0;
  liberales = 0;
  animalistas = 0;
  centristas = 0;
  ecologistas = 0;

  myChart.data.datasets[0].data = [
    socialistas,
    liberales,
    animalistas,
    centristas,
    ecologistas,
  ];
  myChart.update();
}

const data = {
  labels: [
    "Socialistas",
    "Liberales",
    "Animalistas",
    "Centristas",
    "Ecologistas",
  ],
  datasets: [
    {
      label: "Votos",
      data: [socialistas, liberales, animalistas, centristas, ecologistas],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const myChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
});
