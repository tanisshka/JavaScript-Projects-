const Crimson = document.getElementById("Crimson");
const Hotpink = document.getElementById("HotPink");
const Coral = document.getElementById("Coral");
const Plum = document.getElementById("Plum");
const SeaGreen = document.getElementById("SeaGreen");

function BgChanger(color) {
  document.body.style.backgroundColor = color;
}

Crimson.addEventListener("click", () => BgChanger("#DC143C"));
Hotpink.addEventListener("click", () => BgChanger("#FF69B4"));
Coral.addEventListener("click", () => BgChanger("#FF7F50"));
Plum.addEventListener("click", () => BgChanger("#DDA0DD"));
SeaGreen.addEventListener("click", () => BgChanger("#2E8B57"));
