import { Button } from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <h1>Hello world</h1>
      <Button type="submit">Hello</Button>
    </div>
  );
}

export default App;
