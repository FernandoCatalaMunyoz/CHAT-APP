let IdCounter = 0;
let IdCounter2 = 0;
let channels = [];
const input = document.querySelector('input[type="text"]');
canalInput = document.getElementById("canalInput");

const printChannels = (channels) => {
  console.log(channels)
  list.innerHTML = '';
  channels.forEach(element => {
   list.innerHTML += `<div class="channel-class" id=${element.id}>
     <label>
         <input type="image" src="/CHAT-APP/imagenes/live.png" id=imagenUser>
           ${element.name}
     </label>
     <img src="/CHAT-APP/imagenes/basura.png" id='closecanal${IdCounter}' class="closecanal">
   </div>`;
  });
};

list.addEventListener('click', (event)=>{
  if(event.srcElement.nodeName === 'IMG'){
    borrarCanal(event.srcElement.parentNode.id);
  }

  printMessages(event.srcElement.parentNode.id);
});

printMessages = (id) =>{
  console.log("hey")
}


canalInput.addEventListener("submit", () => {
  addCanal();
});

const addCanal = () => {
  const newChannel = {
    id: IdCounter,
    name: input.value,
    mensajes:[],
  }
  IdCounter++;
  channels.push(newChannel);
  printChannels(channels);
  input.value = '';
};

// function selectChannel(){
//   const selected= " ";
//   console.log(channels)
//   for(let i=0; i<channels.length; i++){
//     if(channels[i].id === id){
//       selected = 'patata';
//     }
//   }
//   console.log('selected', selected);
//   return selected;

// }


const borrarCanal = (id)=>{
   for(let i=0; i<channels.length; i++){
      if(channels[i].id == id){
        channels.splice(channels.indexOf(channels[i]),1);
      }
   }
   printChannels(channels)
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