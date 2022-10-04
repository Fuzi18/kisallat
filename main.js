document.addEventListener('DOMContentLoaded', () =>{


  let hamburger = 250;
  let gyros = 200;
  let fanta = 30;
  let ossz=0;

  let ul = document.getElementById("lista");
  let li = document.createElement("li");

  let calc = document.getElementById("cal");

  document.querySelector(".almale").addEventListener('click', () =>{
      ossz += fanta;
      calc.textContent = ossz.toString();
      
      ul.innerHTML += `
      <li>Fanta <button class="delete" onclick="deleted()">X</button></li>
      `
  })
 
 
  document.querySelector(".hamburger").addEventListener('click', () =>{
      ossz += hamburger;
      calc.textContent = ossz.toString();
      ul.innerHTML += `
      <li>Hamburger <button class="delete" onclick="deleted()">X</button></li>
      `
  })
  document.querySelector(".gyros").addEventListener('click', () =>{
      ossz += gyros;
      calc.textContent = ossz.toString();
      ul.innerHTML += `
      <li>Gyros <button class="delete" onclick="deleted()">X</button></li>
      `
  })
 
  document.getElementById("dogo").addEventListener('click', () =>{
      document.getElementById("dogo").src = "img/dogo2.png";
     
  })
  document.getElementById("nulla").addEventListener('click', () =>{
  ul.remove();
  ossz =0;
  calc.textContent = ossz.toString();

  })
})