import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main";

import Bitcoin from "./components/Coins/Bitcoin";

import Exchange from "./components/Exchange/Exchange";
import Footer from "./components/Footer/Footer";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/bitcoin" element={<Bitcoin />}></Route>
            <Route path="/exchange" element={<Exchange />}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
