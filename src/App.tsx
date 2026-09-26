import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Work from "./routes/Work";
import About from "./routes/About";
import Contact from "./routes/Contact";
import CaseStudy from "./routes/CaseStudy";
import Teardowns from "./routes/Teardowns";
import TeardownDetail from "./routes/TeardownDetail";
import StabilityOSPrototype from "./components/StabilityOSPrototype";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/teardowns" element={<Teardowns />} />
          <Route path="/teardowns/stripe-stability-os/prototype" element={<StabilityOSPrototype />} />
          <Route path="/teardowns/:slug" element={<TeardownDetail />} />
          <Route path="/prototype" element={<StabilityOSPrototype />} />
          <Route path="/scrapbook" element={<Navigate to="/teardowns/stripe-stability-os" replace />} />
          <Route path="/iridescent" element={<Navigate to="/teardowns/stripe-stability-os" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
