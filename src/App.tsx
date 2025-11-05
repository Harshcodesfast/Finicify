import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <Routes>
      {/* All routes that share the sidebar/navbar */}
      <Route>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
};

export default App;
