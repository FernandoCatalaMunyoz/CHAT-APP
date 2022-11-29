let IdCounter = 0;
let IdCounter2 = 0;

const channels = [];
const input = document.querySelector('input[type="text"]');

canalInput = document.getElementById("canalInput");




canalInput.addEventListener("submit", () => {
  addCanal();
});

let addCanal = () => {
  IdCounter++;
  console.log(input.value);
  let newValue = input.value;
  channels.push(newValue);
  printChannels(channels);

  input.value = '';
};



const printChannels = (channels) => {
  console.log(channels)
  list.innerHTML = '';
  channels.forEach(element => {
    console.log(element)
   list.innerHTML += `<div class="canal-container" id="${IdCounter}">
     <label>
         <input type="image" src="/CHAT-APP/imagenes/live.png" id=imagenUser>
           ${element}
     </label>
     <img src="/CHAT-APP/imagenes/basura.png" id="closecanal">
   </div>`;
  });
};








// Funcion añadir mensajes
mensajeInput = document.getElementById("mensajeInput");

let addMensaje = () => {
  IdCounter2++;
  let date = new Date();
  
  console.log(date.toLocaleTimeString(), date.toLocaleDateString());

  let newValue2 = input2.value;

  list2.innerHTML += `<div class="list-container" id="${IdCounter2}">
<label>
    <input type="image" src="/CHAT-APP/imagenes/hombre.png" id=imagenUser>
      ${newValue2}
</label>
<img src="/CHAT-APP/imagenes/basura.png" id="closecanal">
</div>`;

  input.newValue2 = "";
};
mensajeInput.addEventListener("submit", () => {

  addMensaje();
});