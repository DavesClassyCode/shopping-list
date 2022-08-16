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

function checkItem(checkedItem) {

}

function deleteItem() {

}

function shoppingList() {
    //Add Item
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const newItem = $(event.currentTarget).find('#shopping-list-entry');
        addItem(newItem);
        newItem.val('');
    });

    //Check Item
    $('.shopping-item-toggle').on('click', event => {
        const checkedItem = $(event.currentTarget).closest('li');
        checkedItem.find('.shopping-item').toggleClass('shopping-item__checked');
        console.log('Check Item Listner Ran');
    });

    console.log('shoppingList() ran');
}

$(shoppingList);

