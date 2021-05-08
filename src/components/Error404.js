import imgError from '../assets/images/error404.jpg'

function Error404 () {
  
    return (
        // <!-- Content Wrapper -->
		<div id="content-wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content" className="container404" >
                <h2>Hubo un ERROR 404</h2>
                <img src={imgError} className="img-fluid px-3 px-sm-4 mt-3 mb-4 center404"  style={{width:300}} alt=" Info vino category "/>
                <h3>Nuestras mas sinceras disculpas.</h3>
            </div>
        </div>
    );
}

export default Error404;