import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <>
      {/* <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" /> */}

      <AppRoutes />
    </>
  );
}

export default App;
