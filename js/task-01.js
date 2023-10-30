const categoriesList = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItem = category.querySelectorAll('ul > li');
 
    console.log('Category:', `${categoryTitle}`);
    console.log('Elements:', `${categoryItem.length}`);
});