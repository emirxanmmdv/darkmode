import useDarkMode from "./hook/useDarkMode";
import "./App.css";

function App() {
  const changer = useDarkMode()
  
  return (
    <div>
      <h1>Salamlar</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente
        quibusdam neque iusto earum praesentium illum! Debitis molestiae iusto
        beatae!
      </p>
      <hr/>
      <div className="card">
        <ul>
          <li>un</li>
          <li>1.40</li>
          <button onClick={changer}>CLICK</button>
        </ul>
      </div>
    </div>
  );
}

export default App;
