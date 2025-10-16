function handleBookmarkButtonClick(event) {
    cards.find((card) => card.question === props.question).isBookmarked =
      !props.isBookmarked;
    // To prevent the need to rerender, we can just toggle the class here
    event.currentTarget.classList.toggle("bookmark--active");
  }

  const bookmarkButton = Bookmark({
    active: props.isBookmarked,
    onClick: handleBookmarkButtonClick,
  });
  bookmarkButtonWrapper.append(bookmarkButton); 

  function handleAnswerButtonClick() {
    answer.classList.toggle("card__answer--active");
  

  answerButton.addEventListener("click", handleAnswerButtonClick);

return card;
}



