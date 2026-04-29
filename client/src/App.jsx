
import schnoz from './assets/schnoz.jpg'
function App() {

  const handleClick = () => {
        alert("button pushed");
      };

  return (
    <main>
      <h1>Budget Tracker</h1>
      <p>This is where the app will go</p>
      <ol>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ol>

      <img
      src={schnoz}
      alt="schnoz"

      />
      
      <button onClick={handleClick}>Click Me</button>

    </main>
  );
}

export default App;
