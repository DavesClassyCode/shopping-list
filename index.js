'use strict';

function addItem(newItem) {
    $('.shopping-list').append(`
            <li>
            <span class="shopping-item">${newItem.val()}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>
    `);
}

function shoppingList() {
    //Add Item
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();

        const newItem = $(this).find('#shopping-list-entry');
        if(newItem.val() === ""){
            alert("Error: Enter at least one character.");
        } else {
            addItem(newItem);
        }
        newItem.val('');
    });

    //Check or Delete Item
    $('ul').on('click', 'button', function(event) {

        //Check
        console.log($(this).hasClass('shopping-item-toggle'));
        const checkedItem = $(this).closest('li');
        checkedItem.find('.shopping-item').toggleClass('shopping-item__checked');

        //Delete
        console.log($(this).hasClass('shopping-item-delete'));
        if($(this).hasClass('shopping-item-delete')){
            $(this).closest('li').remove();
        }
    });

}

$(shoppingList);

