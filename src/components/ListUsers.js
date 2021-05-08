import React, {Component} from 'react';
import imgTemp from '../assets/images/cargando.gif';


class ListUsers extends Component {
    constructor(props){
        super(props);
        this.state={
            users: []
        }
    }

    componentDidMount(){
        console.log('metodo de montaje del componente listar los usuarios ListUsers.js');
        this.apiCall("https://elclubdelvino.herokuapp.com/api/v1/users", this.showUsers);
    }

    componentDidUpdate(){
        console.log('metodo de actualizacion del componente ListUsuarios.js');
    }

    apiCall(url,consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error));
    }

    showUsers = (data)=>{
        this.setState({
            users:data.data       
		})
    }


    render(){
        let showSearchInDB=false;

		if(this.state.users == null || this.state.users == ''){
			showSearchInDB = <span>Cargando....</span>;
		}else{
			
		}
        return ( 
            <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Listado de USUARIOS</h5>
                    </div>
                    <div className="card-body">
                        <ul className="listHeaderProducts">
                            <li>IMAGEN</li>
                            <li>NOMBRE</li>
                            <li>EMAIL</li>
                            <li>FECHA DE ALTA</li>
                        </ul>
                        <div className="row">
                            {
                                this.state.users.map( 
                                (resUser, i) => 
                                    <div key={resUser+i} className="col-lg-12 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">
                                                <ul className="listUsers">
                                                    <li><img className="imageList" src={resUser.image}></img></li>
                                                    <li><div className="itemListUserName">{resUser.last_name} {resUser.first_name}</div></li>
                                                    <li className="itemListUserEmail">{resUser.email}</li>
                                                    <li className="itemListUserDate">{resUser.createdAt!=null? resUser.createdAt.substr(0,10):'fecha no disponible'}</li>
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

export default ListUsers;
