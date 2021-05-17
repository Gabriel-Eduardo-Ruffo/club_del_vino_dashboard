import React, {Component} from 'react';

import imgTemp from '../assets/images/cargando.gif';

class InfoProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            lastProductName:'',
            lastProductDescription:'',
            lastProductVinoImageUrl: imgTemp,
            lastProductLinkDescription:'/'
        }
    }

    componentDidMount(){
        console.log('metodo de montaje del componente infoProduct.js');
        this.apiCall("https://elclubdelvino.herokuapp.com/api/v1/products/searchlastproduct", this.showLastProduct);
    }

    componentDidUpdate(){
        console.log('metodo de actualizacion del componente infoProduct.js');
    }

    apiCall(url,consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error));
    }

    showLastProduct = (data)=>{
        this.setState({
            lastProductVinoImageUrl: data.imageUrl,
			lastProductName: data.products.product_name,
            lastProductDescription: data.products.description,
            lastProductDateCreatedAt: data.products.createAt,   
            lastProductLinkDescription:'https://elclubdelvino.herokuapp.com/products/productDescription/'+ data.products.id_product          
		})
    }


    render(){
        let showLastProductNameDB;

		if(this.state.lastProductName == ''){
			showLastProductNameDB = <span>Cargando....</span>;
		}else{
			showLastProductNameDB = <span>{this.state.lastProductName}</span>;
		}

        let showLastProductDateCreate='no disponible';

        if(this.state.lastProductDateCreatedAt != null){
            showLastProductDateCreate = this.state.lastProductDateCreatedAt;
        }

        return ( 
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto: {showLastProductNameDB}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img src={this.state.lastProductVinoImageUrl} className="img-fluid px-3 px-sm-4 mt-3 mb-4"  style={{width:400}} alt=" Info vino category "></img>
                        </div>
                        <p>Fecha de creacion: {showLastProductDateCreate}</p>
                        <p>{this.state.lastProductDescription}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={this.state.lastProductLinkDescription}>Ver detalles del producto</a>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default InfoProduct;
