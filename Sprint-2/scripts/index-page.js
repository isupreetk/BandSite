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
// console.log(comments);

// console.log(commentsList.length);

function displayComment() {
  commentsEl.innerText = "";
  for (let i = 0; i < commentsList.length; i++) {
    let commentName = document.createElement("p");
    commentName.innerText = commentsList[i].Name;
    commentName.classList.add("comment__result-details");
    commentName.classList.add("comment__result-details--left");
    //   console.log(commentName);
    commentsEl.appendChild(commentName);

    let commentDate = document.createElement("p");
    commentDate.innerText = commentsList[i].Date;
    commentDate.classList.add("comment__result-details");
    commentDate.classList.add("comment__result-details--right");
    //   console.log(commentDate);
    commentsEl.appendChild(commentDate);

    let commentText = document.createElement("p");
    commentText.innerText = commentsList[i].Text;
    commentText.classList.add("comment__result-details");
    commentText.classList.add("comment__result-details--center");
    //   console.log(commentDate);
    commentsEl.appendChild(commentText);

    // comment.classList.add();
  }
}

displayComment();

let formEl = document.querySelector(".comment__form");
console.log(formEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(event.target.commenteeName.value);
  //   console.log(event.target.comment.value);

  let commentDate = new Date();
  //   console.log(commentDate);

  let newComment = {
    Name: event.target.commenteeName.value,
    Date: commentDate,
    Text: event.target.comment.value,
  };
  //   console.log(newComment);

  commentsList.unshift(newComment);
  console.log(commentsList);

  /* need to put in function */

  displayComment();

  formEl.reset();
});
