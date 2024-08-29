import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen w-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
