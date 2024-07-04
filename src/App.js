import React from "react";
import Header from "./components/Header";
import Displaysec from "./pages/Home/Displaysec";
import Texh from "./pages/Home/Tech";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Displaysec />
      <Texh />
      <Footer />
    </div>
  );
};

export default App;
