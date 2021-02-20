document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all-button');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const pizzaListItem = createPizzaListItem(event.target);
    const pizzaList = document.querySelector('#pizza-list');
    pizzaList.appendChild(pizzaListItem);

    event.target.reset();
}

const createPizzaListItem = function (form) {
    const pizzaListItem = document.createElement('li');
    pizzaListItem.classList.add('pizza-list-item');

    const pizza_name = document.createElement('h2');
    pizza_name.textContent = form.pizza_name.value;
    pizzaListItem.appendChild(pizza_name);

    const toppings = document.createElement('p');
    toppings.textContent = form.toppings.value;
    pizzaListItem.appendChild(toppings);

    const base = document.createElement('h3');
    base.textContent = form.base.value;
    pizzaListItem.appendChild(base);

    const sauce = document.createElement('p');
    sauce.textContent = form.sauce.value;
    pizzaListItem.appendChild(sauce);

  return pizzaListItem;
}

const handleDeleteAllClick = function (event) {
    const pizzaList = document.querySelector('#pizza-list');
    pizzaList.textContent = '';
  }