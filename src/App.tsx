import HeaderButtonsTopComponent from "./components/modules/HeaderButtonsTopComponent";
import HeaderTitleComponent from "./components/modules/HeaderTitleComponent";
import NavBarComponent from "./components/modules/NavBarComponent";
import CategoryFlexSection from "./components/templates/CategoryFlexSection";
import CategoryGridSection from "./components/templates/CategoryGridSection";
import "./index.css";

export function App() {
  return (
    <div className="container mx-auto text-center z-10 h-auto mt-20" dir="rtl">
      <NavBarComponent />
      <HeaderTitleComponent />
      <HeaderButtonsTopComponent />
      <CategoryFlexSection />
      <CategoryGridSection />
    </div>
  );
}

export default App;
