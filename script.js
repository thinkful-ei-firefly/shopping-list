function addItem() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userInput = $('#shopping-list-entry').val();
        $('ul').append(`<li>
            <span class="shopping-item">${userInput}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label check-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`)
    })
}

function checkUncheckItem() {
    $('li').on('click', $('.check-label'), function() {
        const checkedText = 
        checkText.toggleClass('.shopping-item__checked'); 
    }); 
}

function removeItem() {

}

function shoppingList() {
    addItem();
    checkUncheckItem();
    removeItem();
}

$(shoppingList);