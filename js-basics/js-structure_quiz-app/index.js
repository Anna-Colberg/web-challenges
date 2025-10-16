import { App } from "./components/App/app.js";
import { Bookmark } from "./components/Bookmark/bookmark.js";
import { handleBookmarkButtonClick} from "./components/Bookmark/bookmark2.js"
import { cards } from "./components/Card/card.js";
import { CardList } from "./components/CardList/cardlist.js";
import { Header } from "./components/Header/header.js";
import { Form } from "./components/Form/form.js";

const app = App();
const bookmark = Bookmark();
const HandleBookmarkButtonClick = handleBookmarkButtonClick();
const Cards = cards();
const cardlist = CardList();
const header = Header();
const form = Form();



// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
