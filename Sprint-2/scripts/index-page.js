console.log("Index is now connected!");

// let commentsList = [
//   {
//     "Name": "Connor Walton",
//     "02/17/2021",
//     "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
// },
//   [
//     "Emilie Beach",
//     "01/09/2021",
//     "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   ],
//   [
//     "Miles Acosta",
//     "12/20/2020",
//     "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   ],
// ];

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

let comments = document.querySelector(".join-the-conversation__comments"); //parent
// console.log(comments);

// console.log(commentsList.length);

for (let i = 0; i < commentsList.length; i++) {
  let commentName = document.createElement("p");
  commentName.innerText = commentsList[i].Name;
  commentName.classList.add("join-the-conversation__comment-details");
  commentName.classList.add("join-the-conversation__comment-details--left");
  //   console.log(commentName);
  comments.appendChild(commentName);

  let commentDate = document.createElement("p");
  commentDate.innerText = commentsList[i].Date;
  commentDate.classList.add("join-the-conversation__comment-details");
  commentDate.classList.add("join-the-conversation__comment-details--right");
  //   console.log(commentDate);
  comments.appendChild(commentDate);

  let commentText = document.createElement("p");
  commentText.innerText = commentsList[i].Text;
  commentText.classList.add("join-the-conversation__comment-details");
  commentText.classList.add("join-the-conversation__comment-details--center");
  //   console.log(commentDate);
  comments.appendChild(commentText);

  // comment.classList.add();
}

//   //   console.log(commentsList[i]);
//   let commentDetails = document.createElement("div"); //child
//   //   console.log(commentDetails);
//   let commentContent = document.createElement("div"); //child
//   //   console.log(commentContent);

//   for (let j = 0; j < commentsList[i].length - 1; j++) {
//     if (j != commentsList[i].length - 1) {
//       commentDetails.classList.add("join-the-conversation__commentee");
//       commentDetails.innerText = commentsList[i];
//       comments.appendChild(commentDetails);
//     } else {
//       commentContent.classList.add("join-the-conversation__comment-content");
//     }
//     let commentBy = document.createElement("p");
//     //   console.log(commentDetails);
//     commentBy.classList.add("join-the-conversation__comment-details");
//     commentBy.innerText = commentsList[i][j];
//     commentDetails.appendChild(commentBy);
//     console.log(commentBy);
//     commentDetails.innerText = commentsList[i];
//     //   console.log(commentDetails);
//     comments.appendChild(commentDetails);
//     //   console.log(comments);
//   }

// //   for (let i = commentsList.length - 1; i < commentsList.length; i++)
//}
