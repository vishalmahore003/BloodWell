import Header from "./components/Header/Header";
import Main from "./components/MainContainer/Main";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import HeroSectionSecondary from "./components/HeroSectionSecondary/HeroSectionSecondary";
import SignUpSection from "./components/SignUpSection/SignUpSection";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <HeroSectionSecondary />
        <SignUpSection />
      </Main>
      <Footer />
    </>
  );
}

export default App;
