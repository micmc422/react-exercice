import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import Page404 from "./404";
import ListeArticles from "./blog";
import MenuNavigation from "./components/navBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuNavigation />
      </header>

      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<ListeArticles />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;