import logo from '../assets/images/logoClubDelVino.png';
import {Link} from 'react-router-dom';

function SideBar () {
    return (
        // <!-- Sidebar -->
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Club del Vino logo" />
				</div>
			</a>
			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Nav Item - Productos --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/listProducts">
					<i className="fas fa-fw fa-folder"></i>
					<span>Productos</span></Link>
			</li>

			{/* <!-- Nav Item - Usuarios --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/listUsers">
					<i className="fas fa-fw fa-folder"></i>
					<span>Usuarios</span></Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />

			<li className="nav-item">
				{/*<a className="nav-link" href="http://localhost:3030/"> esto era para linkear a la pagina home de club del vino. por ahora se saca.
					<i className="fas fa-link"></i>
					<span>Home</span></a>*/}
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Home</span></Link>
			</li>
			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
		// <!-- End of Sidebar -->

    );

}

export default SideBar;