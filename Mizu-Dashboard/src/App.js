import { useEffect } from 'react';
import { useState } from 'react';
import Label from './components/Label/Label'
import Table from './components/Table/Table'
//import ListCategories from './components/ListCategories';
import TotalCategories from './components/TotalCategories';
import './App.css';

const App = () =>  {

  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(false);
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      
      fetch('http://localhost:3000/api/products/listado')
      .then(response => response.json())
      .then(results => {
        const { data } = results
        setProducts(data.products.rows)
        console.log(results);

        setLoading(false)
      });
      

    }, 2000);
    

  },[])

  const tableColumns = ['Id', 'Nombre', 'Categoría', 'Descripción']

  return (

    <main className="App">
      <h1 className='titleMain'>Bienvenidos al MIZU - DASHBOARD</h1>
      {
        loading ? <p>Cargando...</p> : ''
      }

      <div className="control_label">
        <Label title="Productos" value={products.length}/>

        <TotalCategories />
      </div>

      <h2 className='titleTable'>Tabla de Productos</h2>
      <Table columns={tableColumns} products ={products} />

    </main>
  );
    }

export default App;