import "./App.css";
import NavBar from "./routes/nav-bar/nav-bar.component";
import Directory from "./routes/directory/directory.component";
import Packages from "./routes/packages/packages.component";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Directory />} />
        <Route path="packages" element={<Packages />} />
      </Route>
    </Routes>
  );
}

export default App;
