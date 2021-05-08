import React, {Component} from 'react';

class CategoriesInDB extends Component {
    //CONSTRUCTOR
    constructor(props){
        super(props);
        this.state = {
            totalCategories: 0,
            categories: []
        }
    }

    //MONTAJE LO QUE VA A RENDERIZAR
    componentDidMount(){
        console.log('metodo de montaje del componente CategoriesInDB');
        this.apiCall("http://localhost:3030/api/v1/products/listofcategories", this.listCategories);

    }

    //ACTUALIZACION, CUANDO HAY DIFERENCIA ENTRE EL DOM Y EL VIRTUAL DOM
    componentDidUpdate(){
        console.log('metodo de actualizacion del componente CategoriesInDB');
    }

    //***************el fetch para consultar a la api**************************
	apiCall(url, consecuencia){
		fetch(url)
		.then( response => response.json() )
		.then( data => consecuencia(data) )
		.catch( error => console.log(error) )
	}

    //funcion para cuando se actualizan las categorias con el contenido de la DB
    listCategories = (data) => {
        this.setState({
			totalCategories: data.meta.totalCategories,
            categories: data.categories
		})
    }

    render(){
        return ( 
            
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categorias de vinos</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                this.state.categories.map( 
                                (resCategory, i) => 
                                    <div key={resCategory+i} className="col-lg-6 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">
                                                <span >{resCategory.category_name}</span>
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

export default CategoriesInDB;
