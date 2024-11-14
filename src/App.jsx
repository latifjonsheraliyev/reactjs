import React from "react";
import Header from "./components/header/header";
import Showcase from "./components/showcase/showcase";
import Category from "./components/category/category";
import Hotsale from "./components/hotsale/hotsale";
import Clients from "./components/clientss/clients";
import About from "./components/about/about";
import News from "./components/news/news";
import Footerr from "./components/footer/footer";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Showcase />
      <Category />
      <Hotsale/>
      <Hotsale/>
      <Clients/>
      <About/>  
      <News/>
      <Footerr/>
    </React.Fragment>
  );
}

export default App;
