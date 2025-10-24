import "./styles.css";
import Greeting from "../components/Greeting";

export default function App() {
    return (
        <div>
            <Greeting
                sound="Meow"
                emoji="🐈"
                name="Cat"
                isHungry
            />
        </div>
    );
}