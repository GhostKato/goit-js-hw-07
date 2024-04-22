const mainItem = document.querySelectorAll(`.item`);

const lengthMainItem = mainItem.length;

console.log("Number of categories:", lengthMainItem);

mainItem.forEach((item) => {

    const titleContent = item.querySelector('h2').textContent;
    
    const lengthList = item.querySelectorAll(`li`).length;
    
    console.log("Category:", titleContent);    
    console.log("Elements:", lengthList);
});

// const listCategories = mainItem.querySelectorAll(`ul`);
// listCategories.classList.add(`list-ategories`);

// const itemCategories = listCategories.querySelectorAll(`li`);
// itemCategories.classList.add(`item-categories`);