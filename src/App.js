import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Tools from "./components/Tools/Tools";
import Plans from "./components/Plans/Plans";
import Test from "./components/Testimonials/Test";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./components/Tools/routes/route";

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <Tools />
        <AppRoutes/>
        <Projects />
        <Plans />
        <Test />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
