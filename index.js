
//Задача. Завершите функцию, чтобы она отображала элементы < li>…</> для каждого элемента массива внутри родительского тега <ul></ul>

const sampleList = ["Orange", "Banana", "Coffee", "Paper"];

/**
 * @param {string[]} items
 */

const renderShoppingList = (items) => {
  //получаем элемент тега <ul> по идентификатору и добавляем внутри него элементы <li>, проитерировав методом forEach, подставив значения в текстовые узлы из заданного массива с помощью интерполяции значений

  const shopList = document.querySelector("#shopping-list");
  items.forEach((item) => {
  shopList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  });
};

//вызываем функцию
renderShoppingList(sampleList);

//Задача. Получить все ссылки странице и добавить в новый массив текстовое содержимое ссылок
const getAllLinks = () => {
  // получение всех ссылок
const allLinks = document.querySelectorAll("a");
//проверка наличия ссылок на странице
if (!allLinks.length) {
  return "Element not found";
  }
else {
// задаем массив для текстового содержимого ссылок
const linksText = [];
//Проитерируемся по полученным ссылкам методом forEach() и добавляем  в заданный массив текстовое содержимое ссылок
allLinks.forEach(function(link) {
const linkText = link.textContent;
linksText.push(linkText);
});
//возвращаем  полученный массив, преобразованный в строку CSV (значения разделенные запятыми)
return linksText.join(", ");
}
};

getAllLinks();