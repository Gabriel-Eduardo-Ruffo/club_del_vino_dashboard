import React, {Component} from 'react';


class ContentRowProducts extends Component {
	//constructor--- para guardar la informacion o inicializar variables o funciones.
	constructor(props){
		super(props);
		this.state = {
			totalProducts : 0,
			totalCategories : 0,
			totalUsers : 0
		}
	}
	//cuando monta todo lo que tiene que renderizar
	componentDidMount(){
		console.log('metodo de montaje del componente ContentRowProducts');
		this.apiCall("https://elclubdelvino.herokuapp.com//api/v1/products/list", this.showCantProducts);
		this.apiCall("https://elclubdelvino.herokuapp.com//api/v1/products/listofcategories", this.showCantCategories);
		this.apiCall("https://elclubdelvino.herokuapp.com//api/v1/users", this.showCantUsers);
	}

	//cuando actualiza el componente
	componentDidUpdate(){
		console.log('metodo de actualizacion del componente ContentRowProducts');
	}

	//***************el fetch para consultar a la api**************************
	apiCall(url, consecuencia){
		fetch(url)
		.then( response => response.json() )
		.then( data => consecuencia(data) )
		.catch( error => console.log(error) )
	}

	//*************actualizamos informacion de cantidad de productos************
	//al usar setState tenemos que usar arrowfunction
	showCantProducts = (data) => {
		this.setState({
			totalProducts: data.meta.totalProducts
		})
	}

	showCantCategories = (data) => {
		this.setState({
			totalCategories: data.meta.totalCategories
		})
	}

	showCantUsers = (data) => {
		this.setState({
			totalUsers: data.meta.totalUsers
		})
	}


	//**********Metodo de renderizado *******************************
	render(){
	//logica para mostrar un "cargando" o el resultado traido de la api
		let contTotalProducts;
		if(this.state.totalProducts == 0){
			contTotalProducts = <span>Cargando....</span>
		}else{
			contTotalProducts= <span>{this.state.totalProducts}</span>
		}

		let contTotalCategories;
		if(this.state.totalCategories == 0){
			contTotalCategories = <span>Cargando....</span>
		}else{
			contTotalCategories= <span>{this.state.totalCategories}</span>
		}

		let contTotalUsers;
		if(this.state.totalUsers == 0){
			contTotalUsers = <span>Cargando....</span>
		}else{
			contTotalUsers= <span>{this.state.totalUsers}</span>
		}

	//se renderiza el contenido
    return ( 
        // <!-- Content Row Products-->
					<div className="row">

						{/* <!-- Products in Data Base --> */}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Cantidad total de Productos</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{ contTotalProducts }</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-wine-glass-alt fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Total Categorias en DB --> */}
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Cantidad total de categorias</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{ contTotalCategories }</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-wine-bottle fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Total de usuarios en la DB --> */}
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad total de usuarios
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{ contTotalUsers }</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					// <!-- End Porducts in Data Base -->
       )
	}
}

export default ContentRowProducts;
