
function newItem(){

    //Adding a new item to the list:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('Type something, silly!');
    } else {
        $('#list').append(li);
    }

    // Crossing out an item
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('click', crossOut);

    // Adding the "X" delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton)
    
    crossOutButton.on('click', deleteListItem);
   
    //Adding delete function for crossOutButton
    function deleteListItem() {
        li.addClass('delete');
    }

    // So you can reorder the list
    $('#list').sortable();

    // Pressing enter will add text
    // $('#input').on('keydown', (e) => {
    //     if(e.key === 'Enter' && inputValue != '') {
    //         newItem();
    //     }
    // });
}