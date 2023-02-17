/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows;
  #elem;
  constructor(rows) {
    this.#rows = rows;
    this.#elem = document.createElement("table");
    this.html();
    this.deleteRow();
  }
  get elem() {
    return this.#elem;
  }

  html() {
    let render =
      `
    <thead>
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
</thead>
<tbody> ` +
      this.#rows
        .map(
          (el) => `
<tr>
        <td>${el.name}</td>
        <td>${el.age}</td>
        <td>${el.salary}</td>
        <td>${el.city}</td>
        <td><button>X</button></td>
    </tr>`
        )
        .join("") +
      `</tbody>`;
    this.#elem.innerHTML = render;
  }
  deleteRow() {
    for (const button of this.#elem.querySelectorAll("button"))
      button.addEventListener("click", (event) =>
        event.target.closest("tr").remove()
      );
  }
}
