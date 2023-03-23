import { DataProvider } from "./contexts/DataContext";
import Home from "./pages/home/Home";
import GlobalStyle from "./styles";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <GlobalStyle />
        <Home></Home>
      </DataProvider>
    </div>
  );
}

export default App;
