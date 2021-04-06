import "./styles.css";
import Hookcounter from "./components/Hookcounter";
import HookTimer from "./components/HookTimer";
import FocusInput from "./components/FocusInput";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Hookcounter />
      <HookTimer />
      <FocusInput />
    </div>
  );
}
