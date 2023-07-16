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
  for (let i = 0; i < commentsList.length; i++) {
    let commentImageEl = document.createElement("img");
    commentImageEl.innerText = "";
    commentImageEl.classList.add("comment__form-user-image");
    // console.log(commentImageEl);
    commentsEl.appendChild(commentImageEl);

    let commentNameEl = document.createElement("p");
    commentNameEl.innerText = commentsList[i].Name;
    commentNameEl.classList.add("comment__result-details");
    commentNameEl.classList.add("comment__result-details--left");
    //   console.log(commentNameEl);
    commentsEl.appendChild(commentNameEl);

    let commentDateEl = document.createElement("p");
    commentDateEl.innerText = commentsList[i].Date;
    commentDateEl.classList.add("comment__result-details");
    commentDateEl.classList.add("comment__result-details--right");
    //   console.log(commentDateEl);
    commentsEl.appendChild(commentDateEl);

    let commentTextEl = document.createElement("p");
    commentTextEl.innerText = commentsList[i].Text;
    commentTextEl.classList.add("comment__result-details");
    commentTextEl.classList.add("comment__result-details--center");
    //   console.log(commentTextEl);
    commentsEl.appendChild(commentTextEl);
  }
}

displayComment();

let formEl = document.querySelector(".comment__form");
console.log(formEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(event.target.commenteeName.value);
  //   console.log(event.target.comment.value);

  let commentDate = getFormattedDate(new Date());
  //   console.log(commentDate);
  //   console.log(typeof commentDate);
  //   console.log(commentDate.substring(4, 3));

  //   getFormattedDate(commentDate);

  let newComment = {
    Name: event.target.commenteeName.value,
    Date: commentDate,
    Text: event.target.comment.value,
  };
  //   console.log(newComment);

  commentsList.unshift(newComment);
  console.log(commentsList);

  displayComment();

  dynamicTimestamp();

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
function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  let commentDateMMDDYYYY = month + "/" + day + "/" + year;
  //   console.log(commentDateMMDDYYYY);
  return commentDateMMDDYYYY;
}

// function dynamicTimestamp() {
//   let currentTimestamp = getFormattedDate(new Date());
//   let commentTimestamp = commentDate;

//   console.log(currentTimestamp);
//   console.log(commentTimestamp);

//   //   timedeltainseconds = presentdate - commentdate;

//   // if less than 1 minute show x seconds
//   // 1.) if less than 1 hours show in minutes
//   // 2.) if greater than 1 hour then show x hours y minutes
//   // 3.) if greater than 24 hours then show x days ago
//   // 4.) if greater than 30 days then show x month(s) ago
//   // 5.) if greater than 12 months show x years ago
// }
