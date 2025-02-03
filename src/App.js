import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./404";
import MenuNavigation, { menuItems } from "./components/navBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuNavigation />
      </header>

      <Router>
        <Routes>
          {menuItems.map((item, i) => (
            <Route index={i === 0} key={item.id} path={item.url} element={item.component} />
          ))}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;