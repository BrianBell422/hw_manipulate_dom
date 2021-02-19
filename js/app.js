document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all-button');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const favFoodListItem = createFavFoodListItem(event.target);
    const favFoodList = document.querySelector('#fav-foods-list');
    favFoodList.appendChild(favFoodListItem);

    event.target.reset();
}

const createFavFoodListItem = function (form) {
    const favFoodListItem = document.createElement('li');
    favFoodListItem.classList.add('fav-foods-list-item');

    const food_name = document.createElement('h2');
    food_name.textContent = form.food_name.value;
    favFoodListItem.appendChild(food_name);

    const cooked_by = document.createElement('h3');
    cooked_by.textContent = form.cooked_by.value;
    favFoodListItem.appendChild(cooked_by);

    const category = document.createElement('p');
    category.textContent = form.category.value;
    favFoodListItem.appendChild(category);

    const rating = document.createElement('p');
    rating.textContent = form.rating.value;
    favFoodListItem.appendChild(rating);

  return favFoodListItem;
}

const handleDeleteAllClick = function (event) {
    const favFoodList = document.querySelector('#fav-foods-list');
    favFoodList.textContent = '';
  }