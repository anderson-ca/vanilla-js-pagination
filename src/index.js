const list_items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 5;

function DispayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let items_in_page = items.slice(start, end);

  for (let i = 0; i < items_in_page.length; i++) {
    let item = items_in_page[i];

    let item_element = document.createElement("div");
    item_element.classList.add("item")
    item_element.innerText = item;

    wrapper.appendChild(item_element)
  }
}

// test function
DispayList(list_items, list_element, 5, current_page);
