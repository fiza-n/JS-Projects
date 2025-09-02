const btn = document.querySelector('#btn');
const input = document.querySelector('#textfeild');
const tasklist = document.querySelector('#tasklist');


let value = input.value;

function addtask(){
     const value = input.value.trim(); 
    if (!value) return alert('PLease enter the task');

    const li = document.createElement('li');

  const span = document.createElement("span");
  span.innerHTML = value;
    li.appendChild(span);
    
    
    //done button
    const done = document.createElement('button');
    done.innerHTML = 'Done';
    done.addEventListener('click',function(){
        span.innerHTML = 'Done'
    });
    done.classList.add('done');

    li.appendChild(done);
    
    //remove button
    const remove = document.createElement('button');
    remove.innerHTML = 'delete';
    remove.addEventListener('click',function(){
        li.remove()
    });
 remove.classList.add('del');

    li.appendChild(remove);
    //creating div for buttons
    const div = document.createElement('div');
    div.appendChild(done);
    div.appendChild(remove)
    div.classList.add('buttons')
    li.appendChild(div)
    //adding li items
    tasklist.appendChild(li);

    input.value = "";
}
btn.addEventListener('click', addtask);

input.addEventListener('keypress',function(e){
    if (e.key === "Enter") addtask();
})



