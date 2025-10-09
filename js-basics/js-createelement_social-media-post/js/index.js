console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const bodyContainer = document.querySelector('[data-js="body__container]');

body.addEventListener ("click", (event) => {
event.preventDefault ();
const newArticleElement = document.createElement ("article");
newArticleElement.classList.add("post")
newArticleElement.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
bodyContainer.append(newArticleElement);

event.preventDefault ();
const newPElement = document.createElement ("p");
newPElement.classList.add("post__content")
newPElement.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
bodyContainer.append(newPElement);

event.preventDefault ();
const newFooterElement = document.createElement ("footer");
newFooterElement.classList.add("post__footer")
newFooterElement.textContent = 
bodyContainer.append(newFooterElement);

event.preventDefault ();
const newSpanElement = document.createElement ("span");
newSpanElement.classList.add("post__username")
newSpanElement.textContent =
bodyContainer.append(newSpanElement);

event.preventDefault ();
const newButtonElement = document.createElement ("button");
newButtonElement.classList.add("post__button")
newButtonElement.textContent =
bodyContainer.append(newButtonElement);
})