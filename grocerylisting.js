var addbtn = document.getElementById("add");
 // Define kitchenList globally

function addKitchenItems(event) {
    var kitcheninput = document.getElementById("inputext");
    if ((event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter'))&&(kitcheninput.value!="")){
        
        var kitchenList = document.getElementById("kitchen-items-list");
        var kitcheninputData = kitcheninput.value;
        var li = document.createElement('li');
        li.innerText = kitcheninputData;
        li.style.cssText = 'animation-name:slideIn';
        kitchenList.appendChild(li);
        kitcheninput.value = "";
        kitcheninput.focus();
        let trash=document.createElement('i')
        trash.classList.add('bx','bxs-trash');
        li.appendChild(trash)
    }
}



addbtn.addEventListener('click', addKitchenItems);
document.addEventListener('keydown', addKitchenItems);
function deletelist(event) {
    var kitcheninput = document.getElementById("inputext");
    console.log(event.target);
   
}
kitchenList.addEventListener('click', deletelist); // Attaching event listener after kitchenList is defined
