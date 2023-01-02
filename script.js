const menutoggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const home = document.querySelector(".home");
const profile = document.querySelector(".profile");
const dokter = document.querySelector(".dokter");
const layanan = document.querySelector(".pelayanan");
const fasilitas = document.querySelector(".fasilitas");

function cek() {}

menutoggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

home.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
  var cb = document.getElementById("cek");
  cb.checked = false;
});

profile.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
  var cb = document.getElementById("cek");
  cb.checked = false;
});

dokter.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
  var cb = document.getElementById("cek");
  cb.checked = false;
});

layanan.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
  var cb = document.getElementById("cek");
  cb.checked = false;
});

fasilitas.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
  var cb = document.getElementById("cek");
  cb.checked = false;
});
