console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const bodyContainer = document.querySelector('[data-js="body__container"]');

const newArticleElement = document.createElement ("article");
newArticleElement.classList.add("post")
bodyContainer.append(newArticleElement);


const newPElement = document.createElement ("p");
newPElement.classList.add("post__content")
newPElement.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newArticleElement.append(newPElement);


const newFooterElement = document.createElement ("footer");
newFooterElement.classList.add("post__footer");
newArticleElement.append(newFooterElement);


const newSpanElement = document.createElement ("span");
newSpanElement.classList.add("post__username");
newSpanElement.textContent = "@username";
newFooterElement.append(newSpanElement);


const newButtonElement = document.createElement ("button");
newButtonElement.classList.add("post__button");
newButtonElement.textContent =  "♥ Like";
newFooterElement.append(newButtonElement);
