import HeaderButtonsTopComponent from "./components/modules/HeaderButtonsTopComponent";
import HeaderTitleComponent from "./components/modules/HeaderTitleComponent";
import "./index.css";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10 border-4 border-blue-800">
      <HeaderTitleComponent />
      <HeaderButtonsTopComponent/>
    </div>
  );
}

export default App;
