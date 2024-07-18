import "./App.css";
import NavBar from "./routes/nav-bar/nav-bar.component";
import Directory from "./routes/directory/directory.component";
import Packages from "./routes/packages/packages.component";
import { Route, Routes } from "react-router-dom";
import Customers from "./routes/customers/customers.component";
import Hosting from "./routes/hosting/hosting.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Directory />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="packages" element={<Packages />} />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
}

export default App;
