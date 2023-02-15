import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <Navbar title="Text_Utils" />
      <div className="container">
      <Text heading="Enter text to analyze" />
      </div>
    </>
  );
  
}


export default App;
