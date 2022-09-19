import React, {Component} from 'react'
import './Label/Label.css'

class TotalCategories extends Component {

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
            <div className="label">
                <h4>Total de categorias de productos</h4>
                <div>
                {
                    this.state.products.length
                }
                </div>
            </div>

        )
    }

}

export default TotalCategories