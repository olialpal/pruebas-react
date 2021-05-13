import logo from './logo.svg';
import './App.css';
import Notas from './Componentes/Notas';
import Footer from './Componentes/Footer';
import {db} from './firebase';
function App() {
 var soyelfooter="EL FOOTER";
 const enviarDatos=async (datos)=>{
    await db.collection('usuarios').doc().set(datos); 
 };
  return (
    <>
    
    <Notas enviarDatos={enviarDatos}/>
    <Footer soy={soyelfooter}/>
    </>

    

  );
}


export default App;
