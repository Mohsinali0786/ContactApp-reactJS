import logo from './logo.svg';
import './App.css';
import AppRouter from './config/route'
import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      {/* <h2>Hllo</h2> */}
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
