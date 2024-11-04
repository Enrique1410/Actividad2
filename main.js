function addElement() {
    const list = document.querySelector('#lista');

    const items = list.querySelectorAll('li');

    const newListItem = document.createElement('li');

    newListItem.textContent = `Elemento ${items.length + 1}`

    list.appendChild(newListItem);
}