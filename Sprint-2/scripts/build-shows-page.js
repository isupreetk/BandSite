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

// let showsList = [
//   ["Mon Sept 06 2021", "Ronald Lane", "San Francisco, CA", "Buy Tickets"],
//   ["Tue Sept 21 2021", "Pier 3 East", "San Francisco, CA", "Buy Tickets"],
//   ["Fri Oct 15 2021", "View Lounge", "San Francisco, CA", "Buy Tickets"],
//   ["Sat Nov 06 2021", "Hyatt Agency", "San Francisco, CA", "Buy Tickets"],
//   ["Fri Nov 26 2021", "Moscow Center", "San Francisco, CA", "Buy Tickets"],
//   ["Wed Dec 15 2021", "Press Club", "San Francisco, CA", "Buy Tickets"],
// ];

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
  tableRow.classList.add("shows-details__list");

  //   let date = console.log(showsList[i].Date);

  let heading1 = document.createElement("p");
  heading1.innerText = "DATE";
  heading1.classList.add("shows-detail__column");
  heading1.classList.add("shows-detail__column--mobile");
  tableRow.appendChild(heading1);

  let date = document.createElement("p");
  date.innerText = showsList[i].Date;
  date.classList.add("shows-details__list-items");
  tableRow.appendChild(date);

  //   showsTable.appendChild(tableRow);

  let heading2 = document.createElement("p");
  heading2.innerText = "VENUE";
  heading2.classList.add("shows-detail__column");
  heading2.classList.add("shows-detail__column--mobile");
  tableRow.appendChild(heading2);

  let venue = document.createElement("p");
  venue.innerText = showsList[i].Venue;
  venue.classList.add("shows-details__list-items");
  tableRow.appendChild(venue);

  //   showsTable.appendChild(tableRow);

  let heading3 = document.createElement("p");
  heading3.innerText = "LOCATION";
  heading3.classList.add("shows-detail__column");
  heading3.classList.add("shows-detail__column--mobile");
  tableRow.appendChild(heading3);

  let location = document.createElement("p");
  location.innerText = showsList[i].Location;
  location.classList.add("shows-details__list-items");
  tableRow.appendChild(location);

  //   showsTable.appendChild(tableRow);

  let button = document.createElement("button");
  button.innerText = "BUY TICKETS";
  button.classList.add("shows-details__button");
  tableRow.appendChild(button);

  showsTable.appendChild(tableRow);
}

// for (let i = 0; i < showsList.length; i++) {
//   let tableRow = document.createElement("ul");
//   tableRow.classList.add("shows-details__list");

//   console.log(tableRow);

//   for (let j = 0; j < showsList[i].length; j++) {
//     let tableData = document.createElement("li"); //child
//     //   tableRow = showsList[i];
//     tableData.innerText = showsList[i][j];
//     // console.log(tableData);

//     if (j == showsList[i].length - 1) {
//       tableData.classList.add("shows-details__button");
//     } else {
//       tableData.classList.add("shows-details__list-items");
//     }
//     tableRow.appendChild(tableData);
//     // showsTable.appendChild(tableData);
//   }
//   //   tableRow.appendChild(tableData);
//   showsTable.appendChild(tableRow);
// }

// console.log(showsTable);
