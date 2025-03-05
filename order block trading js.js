function addComment() {
    let commentInput = document.getElementById("comment-input");
    let commentText = commentInput.value.trim();

    if (commentText === "") {
        alert("Comment cannot be empty!");
        return;
    }

    let commentsContainer = document.getElementById("comments-container");
    let commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerText = commentText;

    commentsContainer.appendChild(commentElement);
    commentInput.value = ""; // Clear input field
}