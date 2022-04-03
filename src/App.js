import "./styles.css";
import Folder from "./folder";
import { explorer } from "./json";

export default function App() {
  return (
    <div className="App">
      <Folder data={explorer} />
    </div>
  );
}
