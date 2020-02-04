import axios from "axios";
const addCommentForm = document.querySelector("#jsAddComment");
const commentList = document.querySelector("#jsCommentList");
const commentNumber = document.querySelector("#jsCommentNumber");
const commentEditBtn = document.querySelectorAll(".jsCommentEdit");
const commentDeleteBtn = document.querySelectorAll(".jsCommentDelete");

// AddComment
const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

function addComment(comment) {
  const div = document.createElement("div");
  const divFirstChild = document.createElement("div");
  const divSecondChild = document.createElement("div");
  const span = document.createElement("span");
  const spanFirstChild = document.createElement("span");
  const spanSecondChild = document.createElement("span");
  span.innerHTML = comment;
  spanFirstChild.innerHTML = "✏️";
  spanSecondChild.innerHTML = "❌";
  div.appendChild(divFirstChild);
  div.appendChild(divSecondChild);
  divFirstChild.appendChild(span);
  divSecondChild.appendChild(spanFirstChild);
  divSecondChild.appendChild(spanSecondChild);
  commentList.prepend(div);
  increaseNumber();
}

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

// EditComment

const editCommentUI = (editCommentValue, editCommentId, editFormElement) => {
  const parentDiv = editFormElement.parentElement;
  editFormElement.remove();
  const editSpan = parentDiv.nextElementSibling.firstElementChild;
  editSpan.innerHTML = "✏️";
  const span = document.createElement("span");
  span.setAttribute("class", "jsCommentInput");
  span.textContent = editCommentValue;
  parentDiv.prepend(span);
};

const sendEditComment = async (
  editCommentValue,
  editCommentId,
  editFormElement
) => {
  const response = await axios({
    url: `/api/${editCommentId}/editComment`,
    method: "POST",
    data: {
      editCommentValue,
      editCommentId
    }
  });
  if (response.status === 200) {
    editCommentUI(editCommentValue, editCommentId, editFormElement);
  }
};

const handelEditSubmit = event => {
  const editFormElement = event.target;
  event.preventDefault();
  const editCommentValue = event.target.firstElementChild.value;
  const editCommentId = event.target.firstElementChild.dataset.commentid;
  sendEditComment(editCommentValue, editCommentId, editFormElement);
};

const changeComment = event => {
  // input element 생성
  const form = document.createElement("form");

  // input element 생성
  const input = document.createElement("input");

  // 클릭한  ✏️에 관한 데이터
  const editSpan = event.target;

  // 클릭한 댓글 고유 아이디 가죠오기
  const commentId = editSpan.dataset.commentid;

  // 클릭한 후 ✏️ 없애기
  editSpan.innerHTML = "";

  input.dataset.commentid = commentId;

  // 클릭한 ✏️ 최 상위 div element의 자식 element 가져오기
  const commentParent = editSpan.parentElement.parentElement.firstElementChild;

  // 댓글 내용 가져오기
  const commentText = commentParent.firstElementChild.textContent;

  // 댓글 지우기
  commentParent.firstElementChild.remove();

  // 댓글 지우고 input 생성
  commentParent.prepend(form);

  commentParent.querySelector("form").prepend(input);

  // input에 기존 댓글 삽입
  commentParent.firstElementChild.firstElementChild.value = commentText;

  commentParent
    .querySelector("form")
    .addEventListener("submit", handelEditSubmit);
};

const handleEditComment = event => {
  changeComment(event);
};

// document.querySelector(".jsCommentEdit").parentElement.parentElement.firstElementChild.firstElementChild

const handleDeleteComment = () => {};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  commentEditBtn.forEach(editComment =>
    editComment.addEventListener("click", handleEditComment)
  );
  commentDeleteBtn.forEach(deleteComment =>
    deleteComment.addEventListener("click", handleDeleteComment)
  );
}

if (addCommentForm) {
  init();
}
