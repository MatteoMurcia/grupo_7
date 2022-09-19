import React, { Component } from 'react'
import Category from './Category';
import './Label/Label.css'

class ListCategories extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/api/products/categorias');
        const data = await response.json()
        console.log(data.data.products)
        this.setState({products: data.data.products})
        
    }

    render() {
        return(
            <div className='label'>
                <h4>Listado de categorias de productos</h4>
                <div className='rowCat'>
                {
                    this.state.products.map(category => <Category key={category.category_product} category_product={ category.category_product} />)
                }
                </div>
            </div>

        )
    }

}


export default ListCategories