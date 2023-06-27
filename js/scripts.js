
function newItem(){

    //Adding a new item to the list:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('Type something, silly!');
    } else {
        $('#list').append(li);
        $('#input').val('');
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
    $('#input').on('keydown', (e) => {
        if(e.key === 'Enter') {
            e.preventDefault(); //prevent form submission
            let inputValue = $('#input').val();
        if (inputValue != '') {
            newItem(); //call the function to add the item
            $('#input').val(''); //clear the input field
        }
    }});
}