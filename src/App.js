import "./styles.css";
import SideNav from "../Components/SideNav";
import Dashboard from "../Components/Dashboard";
export default function App() {
  return (
    <div className="gridContainer">
      <div className="grid 1">
        <SideNav />
      </div>
      <div className="grid 2">
        <Dashboard />
      </div>
    </div>
  );
}
