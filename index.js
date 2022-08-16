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
    console.log('addItem() ran');
}

function checkItem() {

}

function deleteItem() {

}

function shoppingList() {
    //Add Item
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const newItem = $(event.currentTarget).find('#shopping-list-entry');
        console.log('shoppingList() ran');
        addItem(newItem);
        newItem.val('');
    });


    console.log('shoppingList() ran');
}

$(shoppingList);

