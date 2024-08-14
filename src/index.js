new Chart(document.querySelector("#line-graph"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Applicants",
        data: [120, 20, 200, 120, 20, 30],
        borderWidth: 1,
      },
      {
        label: "Enrolled",
        data: [200, 220, 420, 540, 560, 590],
        borderWidth: 1,
      },  
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(document.querySelector("#donut"), {
  type: "doughnut",
  data: {
    labels: ["BSCS", "BSCOE", "BSN", "BSHM", "BSBA"],
    datasets: [{
      // label: "Enrolled"
      data: [200, 200,300,350,400],
      borderWidth: 0,
    }],
  },
});
