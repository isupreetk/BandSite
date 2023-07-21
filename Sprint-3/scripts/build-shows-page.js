const api_key = "01c12858-2061-4084-9107-2bcbbb35f0f8";

const showDatesURL = "https://project-1-api.herokuapp.com/showdates?api_key=";

function displayShows(showsList) {
  let showsSubheadingEl = document.querySelector(".shows-detail__subheading");

  let heading1TabletEl = document.createElement("p");
  heading1TabletEl.innerText = "DATE";
  heading1TabletEl.classList.add("shows-detail__column");
  heading1TabletEl.classList.add("shows-detail__column--list-view");
  showsSubheadingEl.appendChild(heading1TabletEl);

  let heading2TabletEl = document.createElement("p");
  heading2TabletEl.innerText = "VENUE";
  heading2TabletEl.classList.add("shows-detail__column");
  heading2TabletEl.classList.add("shows-detail__column--list-view");
  showsSubheadingEl.appendChild(heading2TabletEl);

  let heading3TabletEl = document.createElement("p");
  heading3TabletEl.innerText = "LOCATION";
  heading3TabletEl.classList.add("shows-detail__column");
  heading3TabletEl.classList.add("shows-detail__column--list-view");
  showsSubheadingEl.appendChild(heading3TabletEl);

  let showsTableEl = document.querySelector(".shows-detail__table");

  showsList.forEach((showsListItem) => {
    let tableRowEl = document.createElement("li");
    tableRowEl.classList.add("shows-detail__list");

    let heading1MobileEl = document.createElement("p");
    heading1MobileEl.innerText = "DATE";
    heading1MobileEl.classList.add("shows-detail__column");
    heading1MobileEl.classList.add("shows-detail__column--card-view");
    tableRowEl.appendChild(heading1MobileEl);

    let dateEl = document.createElement("p");
    dateEl.innerText = new Date(showsListItem.date).toDateString();
    dateEl.classList.add("shows-detail__list-items");
    tableRowEl.appendChild(dateEl);

    let heading2MobileEl = document.createElement("p");
    heading2MobileEl.innerText = "VENUE";
    heading2MobileEl.classList.add("shows-detail__column");
    heading2MobileEl.classList.add("shows-detail__column--card-view");
    tableRowEl.appendChild(heading2MobileEl);

    let venueEl = document.createElement("p");
    venueEl.innerText = showsListItem.place;
    venueEl.classList.add("shows-detail__list-items");
    tableRowEl.appendChild(venueEl);

    let heading3MobileEl = document.createElement("p");
    heading3MobileEl.innerText = "LOCATION";
    heading3MobileEl.classList.add("shows-detail__column");
    heading3MobileEl.classList.add("shows-detail__column--card-view");
    tableRowEl.appendChild(heading3MobileEl);

    let locationEl = document.createElement("p");
    locationEl.innerText = showsListItem.location;
    locationEl.classList.add("shows-detail__list-items");
    tableRowEl.appendChild(locationEl);

    let buttonEl = document.createElement("button");
    buttonEl.innerText = "BUY TICKETS";
    buttonEl.classList.add("button");
    buttonEl.classList.add("button--shows-detail");
    tableRowEl.appendChild(buttonEl);

    showsTableEl.appendChild(tableRowEl);
  });

  let showsRowEl = document.querySelectorAll(".shows-detail__list");
  showsRowEl.forEach((showsRow) => {
    showsRow.addEventListener("click", (event) => {
      showsRowEl.forEach((showsRow) => {
        showsRow.classList.remove("shows-detail__list--selected");
      });
      showsRow.classList.add("shows-detail__list--selected");
    });
  });
}

function fetchShowsData() {
  axios.get(showDatesURL + api_key).then((response) => {
    let showsData = response.data;
    displayShows(showsData);
  });
}

fetchShowsData();
