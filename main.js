let IdCounter =0;
const input = document.querySelector('input[type="text"]');
const input2 = document.querySelector('input[type="text"]')
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

mensajeInput.addEventListener('submit[id="addMensaje"]', ()=>{
  addMensaje();
});

let addMensaje = ()=>{
IdCounter++;

let newValue2 = input2.value;

list2.innerHTML += `<div class="list-container" id="${IdCounter}">
<label>
    <input type="image" src="/CHAT-APP/imagenes/live.png" id=imagenUser>
      ${newValue2}
</label>
<img src="/CHAT-APP/imagenes/basura.png" id="closecanal">
</div>`

input.newValue2 = '';
}

