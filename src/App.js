import Navbar from "./Component/NavBar/Navbar";
import Intro from "./Component/Intro/Intro";
import './App.css';
import Services from "./Component/Services/Services";

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
