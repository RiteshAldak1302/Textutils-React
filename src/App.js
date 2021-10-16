import './App.css';
import Navbar from './components/Navbar';   // also use this code to import Navbar component here
import Textform from './components/Textform'; 
function App() {
  // this will equal to Navbar component code  --> <Navbar/>
  return (
    <>
    <Navbar title="TextUtils" /> 
    <div className="container">
    <Textform heading="Enter the Text to Analyze" />
      </div> 
    </>
  );
}

export default App;
