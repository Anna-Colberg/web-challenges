const cards = [
  {
    question:
      "In the Kingdom Hearts series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["kingdomheart", "mastereraqus", "english voices"],
    isBookmarked: false,
  },
  {
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["hewhomustnotbenamed", "danielradcliffe", "abracadabra"],
    isBookmarked: false,
  },
  {
    question:
      'In the game series "The Legend of Zelda" what is the name of the main character?',
    answer: "Link",
    tags: ["linktothepast", "linkbetweenworlds", "linkbetweenages"],
    isBookmarked: false,
  },
];






function Card(props) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = /* html */ `
		<h2 class="card__question" data-js="question"></h2>
		<button class="card__button-answer" type="button" data-js="answer-button">
			Show answer
		</button>
		<p class="card__answer" data-js="answer"></p>
		<ul class="card__tag-list" data-js="tags"></ul>
		<div class="card__button-bookmark" data-js="bookmark-button-wrapper"></div>
	`;

  const question = card.querySelector('[data-js="question"]');
  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answer = card.querySelector('[data-js="answer"]');
  const tags = card.querySelector('[data-js="tags"]');
  const bookmarkButtonWrapper = card.querySelector(
    '[data-js="bookmark-button-wrapper"]'
  );
}

export { cards, Card}