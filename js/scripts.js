function newItem(){

//add new element
    let li = $('<li></li>');
    let inputValue= $('#input').val();
    li.append(inputValue);

if(inputValue === ''){
    alert('Begin your list to add items.')
}else{
    let list = $('#list');
    list.append(li);
    $('#input').val("");
}

//add strikethrough
function crossOut(){
    li.toggleClass('strike');
}
li.on('dblclick',crossOut);

//delete button is minus key

let crossOutButton = $('<button></button>');
crossOutButton.append(document.createTextNode('-'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);

//added delete  to the list 

function deleteListItem(){
    li.addClass('delete');
}

//resorting items
$('#list').sortable();

}