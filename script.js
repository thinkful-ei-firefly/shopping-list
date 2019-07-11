'use strict';

function addItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let userInput = $('#shopping-list-entry');
    if (userInput.val() !== '') {
      $('ul').append(`<li>
            <span class="shopping-item">${userInput.val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label check-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label delete-label">delete</span>
              </button>
            </div>
          </li>`);
      userInput.val('');
    }
  });
}

function checkUncheckItem() {
  $('ul').on('click', '.check-label', function() {
    const checkedText = $(event.target).closest('li').find('.shopping-item');
    checkedText.toggleClass('shopping-item__checked');
  }); 
}

function removeItem() {
  $('ul').on('click', '.delete-label', function() {
    const itemToDel = $(event.target).closest('li');
    itemToDel.remove();
  }); 
}

function shoppingList() {
  addItem();
  checkUncheckItem();
  removeItem();
}

$(shoppingList);