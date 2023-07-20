// let commentsList = [
//   {
//     Name: "Connor Walton",
//     Date: "02/17/2021",
//     Text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     Name: "Emilie Beach",
//     Date: "01/09/2021",
//     Text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     Name: "Miles Acosta",
//     Date: "12/20/2020",
//     Text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

const api_key = "?api_key=01c12858-2061-4084-9107-2bcbbb35f0f8";

const commentsURL = "https://project-1-api.herokuapp.com/comments";

let commentsEl = document.querySelector(".comment__result");
// console.log(commentsEl);

function dynamicTimestamp(commentDate) {
  let currentTimestamp = new Date();
  let commentTimestamp = commentDate;

  let diffMilliSeconds = Math.abs(currentTimestamp - commentTimestamp);
  let diffSeconds = Math.floor(diffMilliSeconds / 1000);
  let diffMinutes = Math.floor(diffSeconds / 60);
  let diffHours = Math.floor(diffMinutes / 60);
  let diffDays = Math.floor(diffHours / 24);
  let diffMonths = Math.floor(diffDays / 30);
  let diffYears = Math.floor(diffMonths / 12);

  if (diffMinutes == 0) {
    let commentTimeMessage = "less than a minute ago";
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
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffMinutes + " minutes ago";
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
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffHours + " hours ago";
      return commentTimeMessage;
    }
  } else if (diffDays > 0 && diffMonths == 0 && diffYears == 0) {
    if (diffDays == 1) {
      let commentTimeMessage = diffDays + " day ago";
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffDays + " days ago";
      return commentTimeMessage;
    }
  } else if (diffMonths > 0 && diffYears == 0) {
    if (diffMonths == 1) {
      let commentTimeMessage = diffMonths + " month ago";
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffMonths + " months ago";
      return commentTimeMessage;
    }
  } else if (diffYears > 0) {
    if (diffYears == 1) {
      let commentTimeMessage = diffYears + " year ago";
      return commentTimeMessage;
    } else {
      let commentTimeMessage = diffYears + " years ago";
      return commentTimeMessage;
    }
  }
}

function displayComment(commentsList) {
  commentsEl.innerText = "";

  commentsList.forEach((commentsListItem) => {
    let commentDivEl = document.createElement("div");
    commentDivEl.classList.add("comment__result-div");

    let commentDivImageEl = document.createElement("div");
    commentDivImageEl.classList.add("comment__result-div--image");

    let commentImageEl = document.createElement("img");
    commentImageEl.innerText = "";
    commentImageEl.classList.add("comment__form-user-image");
    commentImageEl.classList.add("comment__form-user-image--result");

    commentDivImageEl.appendChild(commentImageEl);

    commentDivEl.appendChild(commentDivImageEl);

    let commentDivDetailEl = document.createElement("div");
    commentDivDetailEl.classList.add("comment__result-div--detail");

    let commentNameEl = document.createElement("p");
    commentNameEl.innerText = commentsListItem.name;
    commentNameEl.classList.add("comment__result-details");
    commentNameEl.classList.add("comment__result-details--left");

    commentDivDetailEl.appendChild(commentNameEl);

    let commentDateEl = document.createElement("p");
    commentDateEl.innerText = dynamicTimestamp(
      new Date(commentsListItem.timestamp)
    );
    commentDateEl.classList.add("comment__result-details");
    commentDateEl.classList.add("comment__result-details--right");
    commentDateEl.classList.add("comment__result-details--font-color");

    commentDivDetailEl.appendChild(commentDateEl);

    let commentTextEl = document.createElement("p");
    commentTextEl.innerText = commentsListItem.comment;
    commentTextEl.classList.add("comment__result-details");
    commentTextEl.classList.add("comment__result-details--center");

    commentDivDetailEl.appendChild(commentTextEl);

    let commentLikeEl = document.createElement("button");
    commentLikeEl.innerText = "LIKE" + commentsListItem.likes;
    commentLikeEl.classList.add("comment__result-details");
    commentLikeEl.classList.add("comment__result-details--like-button");

    /* new code for diving deeper */
    commentLikeEl.setAttribute("data-commentIDLike", commentsListItem.id);
    // console.log(commentLikeEl);

    commentDivDetailEl.appendChild(commentLikeEl);

    let commentDeleteEl = document.createElement("button");
    commentDeleteEl.innerText = "Delete";
    commentDeleteEl.classList.add("comment__result-details");
    commentDeleteEl.classList.add("comment__result-details--delete-button");

    /* new code for diving deeper */
    commentDeleteEl.setAttribute("data-commentIDDelete", commentsListItem.id);
    // console.log(commentDeleteEl);

    commentDivDetailEl.appendChild(commentDeleteEl);

    commentDivEl.appendChild(commentDivDetailEl);

    commentsEl.appendChild(commentDivEl);
  });
}

function fetchCommentsAPIData() {
  axios.get(commentsURL + api_key).then((response) => {
    let commentsArray = response.data;
    // console.log(commentsArray);

    commentsArray.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    displayComment(commentsArray);

    let commentResultLikeEl = document.querySelectorAll(
      ".comment__result-details--like-button"
    );
    // console.log(commentResultLikeEl);

    let commentResultDeleteEl = document.querySelectorAll(
      ".comment__result-details--delete-button"
    );
    // console.log(commentResultDeleteEl);

    commentResultLikeEl.forEach((commentResultLike) => {
      commentResultLike.addEventListener("click", (event) => {
        let commentID = commentResultLike.getAttribute("data-commentIDLike");
        console.log(commentID);

        axios
          .put(commentsURL + "/" + commentID + "/like" + api_key)
          .then((response) => {
            console.log(response.data);
            fetchCommentsAPIData();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });

    commentResultDeleteEl.forEach((commentResultDelete) => {
      commentResultDelete.addEventListener("click", (event) => {
        let commentID = commentResultDelete.getAttribute(
          "data-commentIDDelete"
        );
        console.log(commentID);

        axios
          .delete(commentsURL + "/" + commentID + api_key)
          .then((response) => {
            console.log(response.data);
            fetchCommentsAPIData();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  });
}

fetchCommentsAPIData();

let formEl = document.querySelector(".comment__form");

let commenteeNameEl = document.getElementById("commenteeName");
let commentEl = document.getElementById("comment");

// let errorMessageNameEl = document.getElementById("commenteeNameError");
// let errorMessageCommentEl = document.getElementById("commentError");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    event.target.commenteeName.value == "" ||
    event.target.commenteeName.value == null ||
    event.target.commenteeName.value == undefined
  ) {
    // errorMessageNameEl.innerText = "Please enter your Name.";
    commenteeNameEl.placeholder = "Please enter your Name.";
    commenteeNameEl.classList.add("comment__form-input--error");
  } else if (
    event.target.comment.value == "" ||
    event.target.comment.value == null ||
    event.target.comment.value == undefined
  ) {
    // errorMessageNameEl.innerText = "";
    // errorMessageCommentEl.innerText = "Please enter your Comment.";
    commentEl.placeholder = "Please enter your Comment.";
    commentEl.classList.add("comment__form-input--error");
  } else {
    // errorMessageNameEl.innerText = "";
    // errorMessageCommentEl.innerText = "";

    axios
      .post(commentsURL + api_key, {
        name: event.target.commenteeName.value,
        comment: event.target.comment.value,
      })
      .then((response) => {
        fetchCommentsAPIData();
      });

    formEl.reset();
  }
});

let commentInputFieldEl = document.querySelectorAll(".comment__form-input");

commentInputFieldEl.forEach((commentInputField) => {
  commentInputField.addEventListener("click", (event) => {
    commentInputFieldEl.forEach((commentInputField) => {
      commentInputField.classList.remove("comment__form-input--active");
    });

    commentInputField.classList.remove("comment__form-input--error");
    commentInputField.classList.add("comment__form-input--active");
  });
});
