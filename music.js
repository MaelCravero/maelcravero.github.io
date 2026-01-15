// Script for dynamic generation of list of reviewed albums from CSV data. The
// CSV itself is not directly parsed here but first statically translated to JS
// data using a Python script. No sorting needed here, just take an ordering and
// display the pretty pictures (and text).

function eltWithText(tag, text) {
  const elt = document.createElement(tag);
  elt.appendChild(document.createTextNode(text));
  return elt;
}

function ratingText(rating) {
  // Dumb switch, easier than setting up a double loop.
  switch (rating) {
    case "0":
      return "☆☆☆☆☆"
    case "1":
      return "★☆☆☆☆"
    case "2":
      return "★★☆☆☆"
    case "3":
      return "★★★☆☆"
    case "4":
      return "★★★★☆"
    case "5":
      return "★★★★★"
    case "shrug":
      return "¯\\_(ツ)_/¯"
  }
}

function renderRecord(record) {
  if (filters && (filters.has(record.style1) || filters.has(record.style2))) {
    return;
  }

  const div = document.createElement("div");
  div.classList.add("record");

  if (last_band != record.band) {
    last_band = record.band
    div.appendChild(eltWithText("h2", record.band))
  }

  const table = document.createElement("table")
  const tr = document.createElement("tr")
  const td_img = document.createElement("td")
  const td_text = document.createElement("td")

  const cover = new Image()
  cover.src = record.cover_link
  td_img.appendChild(cover)

  td_text.appendChild(eltWithText("h3", record.record));

  style = record.style1

  if (record.style2) {
    style += ", " + record.style2
  }

  td_text.appendChild(eltWithText("h4", record.country + " - " + record.year + " - " + style))
  td_text.appendChild(eltWithText("h4", ratingText(record.rating)))

  if (record.review) {
    td_text.appendChild(eltWithText("p", record.review));
  }

  const highlight = document.createElement("p");
  highlight.appendChild(eltWithText("b", "Highlight: "));
  highlight.appendChild(eltWithText("em", record.highlight));
  td_text.appendChild(highlight);

  td_text.appendChild(eltWithText("p", "Reviewed on " + record.date));

  tr.appendChild(td_img)
  tr.appendChild(td_text)

  table.appendChild(tr)
  div.appendChild(table)

  return div;
}

last_order = undefined

function render(order) {
  const reviews = document.getElementsByClassName("reviews")[0];
  reviews.innerHTML = ""

  last_band = undefined

  if (last_order == order) {
    order = order.toReversed()
    last_order = undefined
  } else {
    last_order = order
  }

  order.forEach((idx) => {
    const div = renderRecord(albums[idx]);
    if (div)
      reviews.appendChild(div);
  })
}

filters = undefined

function show_filters() {
  const styles_div = document.getElementsByClassName("styles")[0];

  if (filters) {
    filters = undefined
    styles_div.innerHTML = ""
  } else {
    filters = new Set()

    styles.forEach((s) => {
      div = document.createElement("div")

      check = document.createElement("input")
      check.type = "checkbox"
      label = eltWithText("label", s)

      div.appendChild(check)
      div.appendChild(label)
      styles_div.appendChild(div)
    })

  }
}

window.addEventListener("load", () => {
  const update = document.getElementsByClassName("update")[0];
  update.appendChild(eltWithText("p", "Last update: " + last_update))

  render(band);
});
