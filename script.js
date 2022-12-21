let commentContainer = document.querySelector(".comment-container");

function createInputBox() {
  const div = document.createElement("div");
  div.setAttribute("class", "comment-details");

  div.innerHTML = `
        <input type="text" placeholder="Add text here" />
        <button class="btn submit">Submit</button>
    `;

  return div;
}

function addReply(text) {
  const div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML = `
    <div class="card">
      <span class="text">${text}</span>
      <span class="reply" id="reply">
        Add Reply
      </span>
    </div>`;

  return div;
}

commentContainer.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("reply");
  let submitClicked = e.target.classList.contains("submit");
  const closestCard = e.target.closest(".all-comment");

  if (replyClicked) {
    // add input
    closestCard.appendChild(createInputBox());
  }

  if (submitClicked) {
    // reply card
    const commentDetails = e.target.closest(".comment-details");
    if (commentDetails.children[0].value) {
      closestCard.appendChild(addReply(commentDetails.children[0].value));
      commentDetails.remove();
    }
  }
});
