import { useState } from "react";
import "./App.css";
import sanji from "./images/sanji.webp";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name} Kitchen</h1>
      <p>Copyright {year} </p>
    </header>
  );
}

const items = [" Macoroni and cheese", "Pizza", "Sushi"];
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

console.log(dishObjects);

function Main({ dishes }) {
  return (
  <>
    <div>
      <h2>Welcome to the Baratiay</h2>
    </div>
    <main>
      <img src={sanji} height={200} alt="Sanji" />
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyle: "none" }}>
            {dish.title}
          </li>
      ))}
      </ul>
    </main>
  </>
  );
}

function App() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>The Barratiay is {status ? "open" : "closed"}</h1>

      <button onClick={() => setStatus(!status)}>{status ? "Close Barratiay" : "Open Barratiay"}</button>

      <Header name="Sunset" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
