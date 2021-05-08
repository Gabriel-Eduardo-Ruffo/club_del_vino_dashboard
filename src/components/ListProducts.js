import React, {Component} from 'react';
//import imgTemp from '../assets/images/cargando.gif';


class ListProducts extends Component {
    constructor(props){
        super(props);
        this.state={
            products: []
        }
    }

    componentDidMount(){
        console.log('metodo de montaje del componente listar los productos ListProduct.js');
        this.apiCall("https://elclubdelvino.herokuapp.com/api/v1/products/list", this.showProducts);
    }

    componentDidUpdate(){
        console.log('metodo de actualizacion del componente ListProduct.js');
    }

    apiCall(url,consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error));
    }

    showProducts = (data)=>{
        this.setState({
            products:data.data       
		})
    }


    render(){

        return ( 
            <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Listado de PRODUCTOS</h5>
                    </div>
                    <div className="card-body">
                        <ul className="listHeaderProducts">
                            <li>IMAGEN</li>
                            <li>NOMBRE</li>
                            <li>FECHA DE ALTA</li>
                            <li>PRECIO</li>
                        </ul>
                        <div className="row">
                            {
                                this.state.products.map( 
                                (resProduct, i) => 
                                    <div key={resProduct+i} className="col-lg-12 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">
                                                <ul className="listProducts">
                                                    <li><img className="imageList" src={resProduct.image}></img></li>
                                                    <li><div className="itemListProductName">{resProduct.product_name}</div></li>
                                                    <li className="itemListProductDate">{resProduct.createdAt!=null? resProduct.createdAt.substr(0,10):'fecha no disponible'}</li>
                                                    <li className="itemListProductPrice">{resProduct.price}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> 
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ListProducts;
