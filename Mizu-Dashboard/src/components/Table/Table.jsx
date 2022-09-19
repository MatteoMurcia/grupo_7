import './Table.css'
const Table = ({columns, products}) => {


    console.log(products);

    return(
        <div className='table'>
            <div className='columns'>
                {columns.map((column, i) => <span key={column + "" + i}>{column}</span>)}
            </div>
                {products.map(product=>{
                    return(
                        <div className='rows'>
                            <span>{product.product_id}</span>
                            <span>{product.product_name}</span>
                            <span>{product.category_product}</span>
                            <span>{product.desc_product}</span>
                        </div>
                    )
                })}
        </div>

/*         <table className="table">
            <thead>
            <tr>
                {
                    columns.map((column, i) => <th key={column + " " + i}>{ column }</th> )
                }
            </tr>
            </thead>
            <tbody>
                { products.map((element, i) => <Row key={ element.title + i } rowData={element} columns={columns}/>) }
            </tbody>

        </table> */
    )
}


export default Table