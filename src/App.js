import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home/home";
import DataContextProvider from "./context/context.provider";

function App() {
  return (
    <DataContextProvider>
      <Home></Home>
    </DataContextProvider>
  );
}

export default App;
