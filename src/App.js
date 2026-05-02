import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/index";
import { Footer } from "./components/index";
import "./App.css";

function App() {
  return (
    <div className="grain" style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
