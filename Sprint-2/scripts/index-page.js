console.log("Index is now connected!");

let commentsList = [
  {
    Name: "Connor Walton",
    Date: "02/17/2021",
    Text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    Name: "Emilie Beach",
    Date: "01/09/2021",
    Text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    Name: "Miles Acosta",
    Date: "12/20/2020",
    Text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

let commentsEl = document.querySelector(".comment__result"); //parent
// console.log(commentsEl);

// console.log(commentsList.length);

function displayComment() {
  commentsEl.innerText = "";
  commentsList.forEach((commentsListItem) => {
    let commentImageEl = document.createElement("img");
    commentImageEl.innerText = "";
    commentImageEl.classList.add("comment__form-user-image");
    // console.log(commentImageEl);
    commentsEl.appendChild(commentImageEl);

    let commentNameEl = document.createElement("p");
    commentNameEl.innerText = commentsListItem.Name;
    commentNameEl.classList.add("comment__result-details");
    commentNameEl.classList.add("comment__result-details--left");
    //   console.log(commentNameEl);
    commentsEl.appendChild(commentNameEl);

    let commentDateEl = document.createElement("p");
    commentDateEl.innerText = dynamicTimestamp(new Date(commentsListItem.Date));
    commentDateEl.classList.add("comment__result-details");
    commentDateEl.classList.add("comment__result-details--right");
    // console.log(commentDateEl);

    commentsEl.appendChild(commentDateEl);

    let commentTextEl = document.createElement("p");
    commentTextEl.innerText = commentsListItem.Text;
    commentTextEl.classList.add("comment__result-details");
    commentTextEl.classList.add("comment__result-details--center");
    //   console.log(commentTextEl);
    commentsEl.appendChild(commentTextEl);
  });
}

displayComment();

let formEl = document.querySelector(".comment__form");
console.log(formEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(event.target.commenteeName.value);
  //   console.log(event.target.comment.value);

  //   let commentDate = getFormattedDate(new Date()); //final line
  let commentDate = new Date();
  //   console.log(commentDate);
  //   console.log(typeof commentDate);
  //   console.log(commentDate.substring(4, 3));

  //   getFormattedDate(commentDate);

  let newComment = {
    Name: event.target.commenteeName.value,
    Date: commentDate,
    // Date: commentTimeMessage,
    Text: event.target.comment.value,
  };
  //   console.log(newComment);

  commentsList.unshift(newComment);
  console.log(commentsList);

  displayComment();

  formEl.reset();
});

let commentInputFieldEl = document.querySelectorAll(".comment__form-input");

console.log(commentInputFieldEl);

// for (let j = 0; j < commentInputFieldEl.length; j++) {
//   commentInputFieldEl[j].addEventListener("click", (event) => {
//     console.log(commentInputFieldEl[j]);

//     for (let k = 0; k < commentInputFieldEl.length; k++) {
//       commentInputFieldEl[k].classList.remove("comment__form-input--active");
//     }

//     commentInputFieldEl[j].classList.add("comment__form-input--active");
//   });
// }

commentInputFieldEl.forEach((commentInputField) => {
  //   console.log(commentInputField);
  commentInputField.addEventListener("click", (event) => {
    console.log(commentInputField);

    // for (let k = 0; k < commentInputFieldEl.length; k++) {
    //   commentInputFieldEl[k].classList.remove("comment__form-input--active");
    // }

    commentInputFieldEl.forEach((commentInputField) =>
      commentInputField.classList.remove("comment__form-input--active")
    );

    commentInputField.classList.add("comment__form-input--active");
  });
});

// function formatDateMMDDYYYY {
//     let month = commentDate.splice
// }
// timedeltainseconds / (60 * 60 * 24);

// final function
// function getFormattedDate(date) {
//   let year = date.getFullYear();
//   let month = (1 + date.getMonth()).toString().padStart(2, "0");
//   let day = date.getDate().toString().padStart(2, "0");

//   let commentDateMMDDYYYY = month + "/" + day + "/" + year;
//   //   console.log(commentDateMMDDYYYY);
//   return commentDateMMDDYYYY;
// }

function dynamicTimestamp(commentDate) {
  //   let currentTimestamp = getFormattedDate(new Date());

  let currentTimestamp = new Date();
  let commentTimestamp = commentDate;

  console.log(currentTimestamp);
  console.log(commentTimestamp);

  let diffMilliSeconds = Math.abs(currentTimestamp - commentTimestamp);
  let diffSeconds = Math.floor(diffMilliSeconds / 1000);
  let diffMinutes = Math.floor(diffSeconds / 60);
  let diffHours = Math.floor(diffMinutes / 60);
  let diffDays = Math.floor(diffHours / 24);
  let diffMonths = Math.floor(diffDays / 30);
  let diffYears = Math.floor(diffMonths / 12);

  //   console.log(diffMilliSeconds + " milliseconds");
  //   console.log(diffSeconds + " seconds");
  //   console.log(diffMinutes + " minutes");
  //   console.log(diffHours + " hours");
  //   console.log(diffDays + " days");
  //   console.log(diffMonths + " months");
  //   console.log(diffYears + " years");

  if (diffMinutes == 0) {
    let commentTimeMessage = "less than a minute ago";
    console.log(commentTimeMessage);
    return commentTimeMessage;
  } else if (
    diffMinutes > 0 &&
    diffHours == 0 &&
    diffDays == 0 &&
    diffMonths == 0 &&
    diffYears == 0
  ) {
    if (diffMinutes == 1) {
      let commentTimeMessage = diffMinutes + " minute ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffMinutes + " minutes ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    }
  } else if (
    diffHours > 0 &&
    diffDays == 0 &&
    diffMonths == 0 &&
    diffYears == 0
  ) {
    if (diffHours == 1) {
      let commentTimeMessage = diffHours + " hour ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffHours + " hours ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    }
  } else if (diffDays > 0 && diffMonths == 0 && diffYears == 0) {
    if (diffDays == 1) {
      let commentTimeMessage = diffDays + " day ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffDays + " days ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    }
  } else if (diffMonths > 0 && diffYears == 0) {
    if (diffMonths == 1) {
      let commentTimeMessage = diffMonths + " month ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffMonths + " months ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    }
  } else if (diffYears > 0) {
    if (diffYears == 1) {
      let commentTimeMessage = diffYears + " year ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffYears + " years ago";
      console.log(commentTimeMessage);
      return commentTimeMessage;
    }
  }

  //   const date1 = new Date("7/13/2010");
  //   const date2 = new Date("12/15/2010");
  //   const diffTime = Math.abs(date2 - date1);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   console.log(diffTime + " milliseconds");
  //   console.log(diffDays + " days");
}

//   //   timedeltainseconds = presentdate - commentdate;

//   // if less than 1 minute show x seconds
//   // 1.) if less than 1 hours show in minutes
//   // 2.) if greater than 1 hour then show x hours y minutes
//   // 3.) if greater than 24 hours then show x days ago
//   // 4.) if greater than 30 days then show x month(s) ago
//   // 5.) if greater than 12 months show x years ago
// }
