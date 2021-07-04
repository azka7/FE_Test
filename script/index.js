// show semester
function showSemester() {
  var checkBox = document.getElementById("checking");
  var checkSmt = document.getElementById("check-semester");

  if (checkBox.checked == true) {
    checkSmt.style.visibility = "visible";
  } else {
    checkSmt.style.visibility = "hidden";
  }
}

// Main Chart
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "July",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "PMMB",
        backgroundColor: "rgb(0,15,255)",
        data: [10, 10, 10, 10, 10, 8, 8, 8, 8, 25, 25, 25],
      },
      {
        label: "Project Based",
        backgroundColor: "rgb(255,120,0)",
        data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
      },
      {
        label: "Operation",
        backgroundColor: "rgb(175,175,175)",
        data: [32, 32, 32, 23, 23, 23, 23, 12, 12, 12, 12, 12],
      },
      {
        label: "Internship",
        backgroundColor: "rgb(247, 255, 0)",
        data: [0, 0, 0, 0, 4, 4, 4, 0, 0, 5, 5, 5],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//
var chart1 = document.getElementById("bar1").getContext("2d");
var bar1 = new Chart(chart1, {
  type: "bar",
  data: {
    labels: [
      "Internet",
      "Kampus",
      "Instagram",
      "Facebook",
      "Twitter",
      "Lainnya",
    ],
    datasets: [
      {
        label: "Informasi Lowongan",
        backgroundColor: "rgb(0,15,255)",
        data: [30, 10, 35, 10, 10, 13],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//
var chart2 = document.getElementById("bar2").getContext("2d");
var bar2 = new Chart(chart2, {
  type: "bar",
  data: {
    labels: [
      "Teknik Sipi;",
      "Teknik Informatika",
      "Arsitektur",
      "Administrasi Publik",
      "Ilmu Komunikasi",
      "Teknik Elektro",
      "Manajemen",
      "Akutansi",
      "Sistem Informasi",
      "Ilmu Hukum",
    ],
    datasets: [
      {
        label: "Informasi Jurusan",
        backgroundColor: "rgb(0,15,255)",
        data: [15, 35, 5, 27, 20, 10, 20, 9, 17, 6],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
