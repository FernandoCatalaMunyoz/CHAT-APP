let IdCounter = 0;
let IdCounter2 = 0;
let channels = [];
let privmessages = []
const input = document.getElementById('input');
canalInput = document.getElementById("canalInput");

const input2 = document.getElementById('input2');
messageInput = document.getElementById("messageInput");





const printChannels = (channels) => {
  list.innerHTML = '';
  channels.forEach(element => {
   list.innerHTML += `<div class="channel-class" id=${element.id}>
     <label>
         <input type="image" src="/CHAT-APP/imagenes/live.png" id=ImgCanal>
           ${element.name}
     </label>
     <img src="/CHAT-APP/imagenes/basura.png" id='closecanal${IdCounter}' class="closecanal">
   </div>`;
  });
};

const printMessages = (messages) => {
  list2.innerHTML = '';
  messages.forEach(element =>{
    list2.innerHTML += `<div class="list-container" id=${element.id}>
    <label>
        <input type="image" src="/CHAT-APP/imagenes/hombre.png" id=imagenUser>
        ${element.name}
    </label>
    <img src="/CHAT-APP/imagenes/basura.png" id="closecanal${IdCounter2}" class="closecanal">
</div>`;
  });
};



canalInput.addEventListener("submit", () => {
  addCanal();
});

messageInput.addEventListener("submit",() =>{
  addMessage();
});

const addMessage = () => {
  const newPrivMessage = {
    id: IdCounter2,
    name: input2.value,
    messages2:[],
  }
  IdCounter2++;
  privmessages.push(newPrivMessage);
  printMessages(privmessages);
  input2.value = '';
}



const addCanal = () => {
  const newChannel = {
    id: IdCounter,
    name: input.value,
    messages:[],
  }
  IdCounter++;
  channels.push(newChannel);
  printChannels(channels);
  input.value = '';
};

list.addEventListener('click', (event)=>{
  if(event.srcElement.nodeName === 'IMG'){
    deleteChannel(event.srcElement.parentNode.id);
  }
});

list2.addEventListener('click', (event)=>{
  if(event.srcElement.nodeName === 'IMG'){
    console.log(event)
    deletePrivMessage(event.srcElement.parentNode.id);
  }
});

const deleteChannel = (id)=>{
  for(let i=0; i<channels.length; i++){
     if(channels[i].id == id){
       channels.splice(channels.indexOf(channels[i]),1);
     }
  }
  printChannels(channels);
};

const deletePrivMessage = (id)=>{
  for(let j=0; j<privmessages.length; j++){
    if(privmessages[j].id == id){
      privmessages.splice(privmessages.indexOf(privmessages[j]),1);
    }
  }
  printMessages(privmessages);
}

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

// Funcion añadir messages
// const printMessages = (messages) => {
//   list2.innerHTML = '';
//   messages.forEach(element => {
//    list2.innerHTML += `<div class="channel-class" id=${element.id}>
//      <label>
//          <input type="image" src="/CHAT-APP/imagenes/hombre.png" id=ImgCanal>
//            ${element.name}
//      </label>
//      <img src="/CHAT-APP/imagenes/basura.png" id='closecanal${IdCounter2}' class="closecanal">
//    </div>`;
//   });
// };

// messageInput.addEventListener("submit", () => {
//   addMessage();
// });

// const addMessage = () => {
//   const newMessage = {
//     id: IdCounter,
//     name: input2.value,
//     messages:[],
//   }
//   IdCounter2++;
//   messages.push(newMessage);
//   printChannels(messages);
//   input2.value = '';
// };
// printMessages(messages)