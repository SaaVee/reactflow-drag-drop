import Router from "./Router";
import './App.scss';
import AppHeader from "./ContainerComponents/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader/>
     <Router />
    </div>
  );
}

export default App;
