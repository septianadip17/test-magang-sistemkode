import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Featured from "./components/Featured";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <TopBanner />
      <Featured />
    </div>
  );
};

export default App;
