let IdCounter =0;
let IdCounter2 =0;
const input = document.querySelector('input[type="text"]');
const input2 = document.querySelector('input[type="text"]');
canalInput = document.getElementById('canalInput');
mensajeInput = document.getElementById('mensajeInput');



canalInput.addEventListener('submit', ()=>{
    addCanal();
});

let addCanal = ()=>{
  IdCounter++;
  
  let newValue = input.value;

  list.innerHTML += `<div class="canal-container" id="${IdCounter}">
  <label>
      <input type="image" src="/CHAT-APP/imagenes/live.png" id=imagenUser>
        ${newValue}
  </label>
  <img src="/CHAT-APP/imagenes/basura.png" id="closecanal">
</div>`

  input.value = '';
}

mensajeInput.addEventListener('submit', ()=>{    //aqui no se como seleccionar el segundo input
  addMensaje();
});

let addMensaje = ()=>{
IdCounter2++;

let newValue2 = input2.value;

list2.innerHTML += `<div class="list-container" id="${IdCounter2}">
<label>
    <input type="image" src="/CHAT-APP/imagenes/hombre.png" id=imagenUser>
      ${newValue2}
</label>
<img src="/CHAT-APP/imagenes/basura.png" id="closecanal">
</div>`

input.newValue2 = '';
}

