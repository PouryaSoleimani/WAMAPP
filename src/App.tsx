import HeaderButtonsTopComponent from "./components/modules/HeaderButtonsTopComponent";
import HeaderTitleComponent from "./components/modules/HeaderTitleComponent";
import NavBarComponent from "./components/modules/NavBarComponent";
import "./index.css";

export function App() {
  return (
    <div className="container mx-auto text-center z-10 border-4 border-blue-800">
      <NavBarComponent />
      <HeaderTitleComponent />
      <HeaderButtonsTopComponent />
    </div>
  );
}

export default App;
