import reactDom from "react-dom";
import React from 'react';
import {useState} from 'react';




function Notas(props) {

const valoresIniciales={
    email:'',
    pssw:''
};

const [values,setValues]=useState(valoresIniciales);

const clic=() =>{
    props.enviarDatos(values);
    alert("Los datos se han guardado correctamente");
   };


const cambio=(e) =>{
 const{value,name}=e.target;
 setValues({...values,[name]:value});
 console.log(values);
};


 return(
<>
<div className="card" style={{maxWidth:"500px"}}>

<div className="form-group">
      <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
      <input type="email" onChange={cambio} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
</div>
<div className="form-group">
      <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
      <input type="password" onChange={cambio} name="pssw" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
</div>
<div>
<button type="button"  onClick={clic} className="btn btn-primary">BOTÓN</button>
</div>
</div>
</>
 );



}

export default Notas;