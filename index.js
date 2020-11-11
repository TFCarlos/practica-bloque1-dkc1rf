// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

createList();
function createList() {
  let pointer = document.querySelector(".color-list");

  //Primera row PAIR
  let div1_1 = document.createElement("DIV");
  div1_1.classList.add("color-name");
  div1_1.innerHTML = "Color: white";

  let div1_2 = document.createElement("DIV");
  div1_2.classList.add("color-show");
  div1_2.innerHTML = "Muestra";
  div1_2.style.backgroundColor = "White";

  let button1_1 = document.createElement("BUTTON");
  button1_1.classList.add("color-set");
  button1_1.innerHTML = "Next item color";

  let button1_2 = document.createElement("BUTTON");
  button1_2.classList.add("color-set");
  button1_2.innerHTML = "Page color";

  let li1 = document.createElement("LI");
  li1.classList.add("color-item");

  //Alerta de color
  div1_1.addEventListener("click", function(alertaWhite) {
    alert("White");
  });

  li1.appendChild(div1_1);
  li1.appendChild(div1_2);
  li1.appendChild(button1_1);
  li1.appendChild(button1_2);

  pointer.appendChild(li1);

  //Segunda row ODD
  let div2_1 = document.createElement("DIV");
  div2_1.classList.add("color-name");
  div2_1.innerHTML = "Color: red";

  let div2_2 = document.createElement("DIV");
  div2_2.classList.add("color-show");
  div2_2.innerHTML = "Muestra";
  div2_2.style.backgroundColor = "Red";

  let button2_1 = document.createElement("BUTTON");
  button2_1.classList.add("color-set");
  button2_1.innerHTML = "Next item color";

  let button2_2 = document.createElement("BUTTON");
  button2_2.classList.add("color-set");
  button2_2.innerHTML = "Page color";

  let li2 = document.createElement("LI");
  li2.classList.add("color-item");
  li2.classList.add("color-item--odd");

  //Alerta de color
  div2_1.addEventListener("click", function(alertRed) {
    alert("Red");
  });

  li2.appendChild(div2_1);
  li2.appendChild(div2_2);
  li2.appendChild(button2_1);
  li2.appendChild(button2_2);

  pointer.appendChild(li2);

  //Tercera row PAIR
  let div3_1 = document.createElement("DIV");
  div3_1.classList.add("color-name");
  div3_1.innerHTML = "Color: orange";

  let div3_2 = document.createElement("DIV");
  div3_2.classList.add("color-show");
  div3_2.innerHTML = "Muestra";
  div3_2.style.backgroundColor = "Orange";

  let button3_1 = document.createElement("BUTTON");
  button3_1.classList.add("color-set");
  button3_1.innerHTML = "Next item color";

  let button3_2 = document.createElement("BUTTON");
  button3_2.classList.add("color-set");
  button3_2.innerHTML = "Page color";

  let li3 = document.createElement("LI");
  li3.classList.add("color-item");

  //Alerta de color
  div3_1.addEventListener("click", function(alertaOrange) {
    alert("Orange");
  });

  li3.appendChild(div3_1);
  li3.appendChild(div3_2);
  li3.appendChild(button3_1);
  li3.appendChild(button3_2);

  pointer.appendChild(li3);

  //Cuarta row ODD
  let div4_1 = document.createElement("DIV");
  div4_1.classList.add("color-name");
  div4_1.innerHTML = "Color: yellow";

  let div4_2 = document.createElement("DIV");
  div4_2.classList.add("color-show");
  div4_2.innerHTML = "Muestra";
  div4_2.style.backgroundColor = "Yellow";

  let button4_1 = document.createElement("BUTTON");
  button4_1.classList.add("color-set");
  button4_1.innerHTML = "Next item color";

  let button4_2 = document.createElement("BUTTON");
  button4_2.classList.add("color-set");
  button4_2.innerHTML = "Page color";

  let li4 = document.createElement("LI");
  li4.classList.add("color-item");
  li4.classList.add("color-item--odd");

  //Alerta de color
  div4_1.addEventListener("click", function(alertaYellow) {
    alert("Yellow");
  });

  li4.appendChild(div4_1);
  li4.appendChild(div4_2);
  li4.appendChild(button4_1);
  li4.appendChild(button4_2);

  pointer.appendChild(li4);

  //Quinta row PAIR
  let div5_1 = document.createElement("DIV");
  div5_1.classList.add("color-name");
  div5_1.innerHTML = "Color: orchid";

  let div5_2 = document.createElement("DIV");
  div5_2.classList.add("color-show");
  div5_2.innerHTML = "Muestra";
  div5_2.style.backgroundColor = "Orchid";

  let button5_1 = document.createElement("BUTTON");
  button5_1.classList.add("color-set");
  button5_1.innerHTML = "Next item color";

  let button5_2 = document.createElement("BUTTON");
  button5_2.classList.add("color-set");
  button5_2.innerHTML = "Page color";

  let li5 = document.createElement("LI");
  li5.classList.add("color-item");

  //Alerta de color
  div5_1.addEventListener("click", function(alertaOrchid) {
    alert("Orchid");
  });

  li5.appendChild(div5_1);
  li5.appendChild(div5_2);
  li5.appendChild(button5_1);
  li5.appendChild(button5_2);

  pointer.appendChild(li5);

  //Sexta row ODD
  let div6_1 = document.createElement("DIV");
  div6_1.classList.add("color-name");
  div6_1.innerHTML = "Color: pink";

  let div6_2 = document.createElement("DIV");
  div6_2.classList.add("color-show");
  div6_2.innerHTML = "Muestra";
  div6_2.style.backgroundColor = "Pink";

  let button6_1 = document.createElement("BUTTON");
  button6_1.classList.add("color-set");
  button6_1.innerHTML = "Next item color";

  let button6_2 = document.createElement("BUTTON");
  button6_2.classList.add("color-set");
  button6_2.innerHTML = "Page color";

  let li6 = document.createElement("LI");
  li6.classList.add("color-item");
  li6.classList.add("color-item--odd");

  //Alerta de color
  div6_1.addEventListener("click", function(alertaPink) {
    alert("Pink");
  });

  li6.appendChild(div6_1);
  li6.appendChild(div6_2);
  li6.appendChild(button6_1);
  li6.appendChild(button6_2);

  pointer.appendChild(li6);

  //Septima row PAIR
  let div7_1 = document.createElement("DIV");
  div7_1.classList.add("color-name");
  div7_1.innerHTML = "Color: green";

  let div7_2 = document.createElement("DIV");
  div7_2.classList.add("color-show");
  div7_2.innerHTML = "Muestra";
  div7_2.style.backgroundColor = "Green";

  let button7_1 = document.createElement("BUTTON");
  button7_1.classList.add("color-set");
  button7_1.innerHTML = "Next item color";

  let button7_2 = document.createElement("BUTTON");
  button7_2.classList.add("color-set");
  button7_2.innerHTML = "Page color";

  let li7 = document.createElement("LI");
  li7.classList.add("color-item");

  //Alerta de color
  div7_1.addEventListener("click", function(alertaGreen) {
    alert("Green");
  });

  li7.appendChild(div7_1);
  li7.appendChild(div7_2);
  li7.appendChild(button7_1);
  li7.appendChild(button7_2);

  pointer.appendChild(li7);

  //Octava row ODD
  let div8_1 = document.createElement("DIV");
  div8_1.classList.add("color-name");
  div8_1.innerHTML = "Color: silver";

  let div8_2 = document.createElement("DIV");
  div8_2.classList.add("color-show");
  div8_2.innerHTML = "Muestra";
  div8_2.style.backgroundColor = "Silver";

  let button8_1 = document.createElement("BUTTON");
  button8_1.classList.add("color-set");
  button8_1.innerHTML = "Next item color";

  let button8_2 = document.createElement("BUTTON");
  button8_2.classList.add("color-set");
  button8_2.innerHTML = "Page color";

  let li8 = document.createElement("LI");
  li8.classList.add("color-item");
  li8.classList.add("color-item--odd");

  //Alerta de color
  div8_1.addEventListener("click", function(alertaSilver) {
    alert("Silver");
  });

  li8.appendChild(div8_1);
  li8.appendChild(div8_2);
  li8.appendChild(button8_1);
  li8.appendChild(button8_2);

  pointer.appendChild(li8);

  // Set next item color
  button1_1.addEventListener("click", function(alertaSetWhite) {
    li2.style.backgroundColor = "White";
  });
  button2_1.addEventListener("click", function(alertaSetRed) {
    li3.style.backgroundColor = "Red";
  });
  button3_1.addEventListener("click", function(alertaSetOrange) {
    li4.style.backgroundColor = "Orange";
  });
  button4_1.addEventListener("click", function(alertaSetYellow) {
    li5.style.backgroundColor = "Yellow";
  });
  button5_1.addEventListener("click", function(alertaSetOrchid) {
    li6.style.backgroundColor = "Orchid";
  });
  button6_1.addEventListener("click", function(alertaSetPink) {
    li7.style.backgroundColor = "Pink";
  });
  button7_1.addEventListener("click", function(alertaSetGreen) {
    li8.style.backgroundColor = "Green";
  });
  button8_1.addEventListener("click", function(alertaSetSilver) {
    li1.style.backgroundColor = "Silver";
  });

  // Set body background colorList
  let bodyBack = document.querySelector(".color-list").parentNode;

  button1_2.addEventListener("click", function(backSetWhite) {
    bodyBack.style.backgroundColor = "White";
  });
  button2_2.addEventListener("click", function(backSetRed) {
    bodyBack.style.backgroundColor = "Red";
  });
  button3_2.addEventListener("click", function(backSetOrange) {
    bodyBack.style.backgroundColor = "Orange";
  });
  button4_2.addEventListener("click", function(backSetYellow) {
    bodyBack.style.backgroundColor = "Yellow";
  });
  button5_2.addEventListener("click", function(backSetOrchid) {
    bodyBack.style.backgroundColor = "Orchid";
  });
  button6_2.addEventListener("click", function(backSetPink) {
    bodyBack.style.backgroundColor = "Pink";
  });
  button7_2.addEventListener("click", function(backSetGreen) {
    bodyBack.style.backgroundColor = "Green";
  });
  button8_2.addEventListener("click", function(backSetSilver) {
    bodyBack.style.backgroundColor = "Silver";
  });
}

// Click body
let bodyClick = document.getElementsByTagName("body")[0];
let listaBotones = document.querySelector(".color-list");
console.log(bodyClick);

bodyClick.addEventListener("click", function(decirAlerta) {
  if (decirAlerta.target != listaBotones) {
    alert("Body");
  }
});
