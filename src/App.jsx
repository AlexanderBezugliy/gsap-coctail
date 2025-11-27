import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";



gsap.registerPlugin(ScrollTrigger, SplitText); // нужно в ручную регистрировать


const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className="h-dvh bg-black"></div>

        </main>
    )
}

export default App