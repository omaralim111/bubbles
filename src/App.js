import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'GLTFLoader'; from './three/examples/jsm/loaders/GLTFLoader';
import solar from './one.jpg';

function App(){ 
  const loader = new GLTFLoader();

  return (
    <a-scene>
      <a-assets>
        <img id= "solar"  />

      </a-assets>

        <a-solar
          color = "#FFFFFF"
          MATERIAL="SRC: "
        />
    </a-scene>
  );  
}

export default App;
