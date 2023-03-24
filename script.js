const addBtn = document.getElementById('add')
const wrapper = document.querySelector('#wrapper')
addBtn.addEventListener('click',()=>addNewNote())

function load (){
    const notes= JSON.parse(localStorage.getItem('notes'));
    
    if(notes.length==0){
        addNewNote();
    }
    else{
        notes.forEach(note=>addNewNote(note));
    }

}
load();
function saveNotes(){
    const notes = document.querySelectorAll('.note textarea'); 
    const data =[];
    notes.forEach((note)=>data.push(note.value));
  
        localStorage.setItem('notes',JSON.stringify(data));
}

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')
note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="save"><i class="fas fa-save"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <textarea>${text}</textarea>
    `;

    wrapper.appendChild(note);
    saveNotes();
    note.querySelector('.delete').addEventListener('click',function(){
        note.remove();
        saveNotes();
    });
    note.querySelector('.save').addEventListener('click',()=>saveNotes());
    note.querySelector('textarea').addEventListener('focusout',function(){
        saveNotes();
    }); 
    
     
}
 