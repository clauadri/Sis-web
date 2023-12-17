import "./App.css";
import About from "./components/about/About";
import Career from "./components/career/Career";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Career />
        <Contact />
      </main>
    </>
  );
}

export default App;
