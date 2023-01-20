import "./App.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Intro from "./components/Intro";
import { Curriculo } from "./components/Curriculo";
import { SessaoProjetos } from "./components/SessaoProjetos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Intro />
      <SessaoProjetos />
      <Curriculo />
      <Footer></Footer>
    </>
  );
}

export default App;
