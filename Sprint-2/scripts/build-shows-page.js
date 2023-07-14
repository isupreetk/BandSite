console.log("I am connected");

let showsList = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    Location: "San Francisco, CA",
  },
  {
    Date: "Sat Nov 06 2021",
    Venue: "Hyatt Agency",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Francisco, CA",
  },
  {
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Francisco, CA",
  },
];

// console.log(showsList);

let showsSubheading = document.querySelector(".shows-detail__subheading"); //parent
// console.log(showsTable);

let heading1Tablet = document.createElement("p");
heading1Tablet.innerText = "DATE";
heading1Tablet.classList.add("shows-detail__column");
heading1Tablet.classList.add("shows-detail__column--tablet");
showsSubheading.appendChild(heading1Tablet);

let heading2Tablet = document.createElement("p");
heading2Tablet.innerText = "VENUE";
heading2Tablet.classList.add("shows-detail__column");
heading2Tablet.classList.add("shows-detail__column--tablet");
showsSubheading.appendChild(heading2Tablet);

let heading3Tablet = document.createElement("p");
heading3Tablet.innerText = "LOCATION";
heading3Tablet.classList.add("shows-detail__column");
heading3Tablet.classList.add("shows-detail__column--tablet");
showsSubheading.appendChild(heading3Tablet);

let showsTable = document.querySelector(".shows-detail__table"); //parent
// console.log(showsTable);

for (let i = 0; i < showsList.length; i++) {
  let tableRow = document.createElement("li");
  tableRow.classList.add("shows-detail__list");
  //   tableRow.classList.add("shows-detail__list:hover");
  //   tableRow.classList.add("shows-detail__list--selected");

  //   let date = console.log(showsList[i].Date);

  let heading1 = document.createElement("p");
  heading1.innerText = "DATE";
  heading1.classList.add("shows-detail__column");
  heading1.classList.add("shows-detail__column--mobile");
  tableRow.appendChild(heading1);

  let date = document.createElement("p");
  date.innerText = showsList[i].Date;
  date.classList.add("shows-detail__list-items");
  tableRow.appendChild(date);

  //   showsTable.appendChild(tableRow);

  let heading2 = document.createElement("p");
  heading2.innerText = "VENUE";
  heading2.classList.add("shows-detail__column");
  heading2.classList.add("shows-detail__column--mobile");
  tableRow.appendChild(heading2);

  let venue = document.createElement("p");
  venue.innerText = showsList[i].Venue;
  venue.classList.add("shows-detail__list-items");
  tableRow.appendChild(venue);

  //   showsTable.appendChild(tableRow);

  let heading3 = document.createElement("p");
  heading3.innerText = "LOCATION";
  heading3.classList.add("shows-detail__column");
  heading3.classList.add("shows-detail__column--mobile");
  tableRow.appendChild(heading3);

  let location = document.createElement("p");
  location.innerText = showsList[i].Location;
  location.classList.add("shows-detail__list-items");
  tableRow.appendChild(location);

  //   showsTable.appendChild(tableRow);

  let button = document.createElement("button");
  button.innerText = "BUY TICKETS";
  //   button.classList.add("shows-detail__button");
  button.classList.add("button");
  button.classList.add("button--shows-detail");
  tableRow.appendChild(button);

  showsTable.appendChild(tableRow);
}

// console.log(showsTable);

let showsRowEl = document.querySelectorAll(".shows-detail__list");
console.log(showsRowEl);

for (let i = 0; i < showsRowEl.length; i++) {
  showsRowEl[i].addEventListener("click", (event) => {
    // window.location.reload();
    // tableRow.classList.remove("shows-detail__list--selected");
    // showsRowEl.reset();
    // showsRowEl[i].classList.remove("shows-detail__list--selected");
    for (let j = 0; j < showsRowEl.length; j++) {
      showsRowEl[j].classList.remove("shows-detail__list--selected");
    }
    showsRowEl[i].classList.add("shows-detail__list--selected");
    console.log(showsRowEl[i]);
  });
}
