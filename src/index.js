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
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 5;

function DispayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;
  // --- items-display --- //
  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let items_in_page = items.slice(start, end);

  for (let i = 0; i < items_in_page.length; i++) {
    let item = items_in_page[i];

    let item_element = document.createElement("div");
    item_element.classList.add("item");
    item_element.innerText = item;

    wrapper.appendChild(item_element);
  }
}
// --- pagination area --- //
function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    DispayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector(".pagination button.active");
    current_btn.classList.remove("active");
    button.classList.add("active");
  });

  return button;
}

// test function
DispayList(list_items, list_element, rows, current_page);

SetupPagination(list_items, pagination_element, rows);
