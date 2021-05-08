import ContentRowProducts from './ContentRowProducts';
import CategoriesInDB from './CategoriesInDb';
import InfoProduct from './InfoProduct';

function ContentRowTop () {
    return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">Dashboard: Club del vino</h1>
			</div>
		
			<ContentRowProducts />					

			<div className="row">
				<InfoProduct />
				<CategoriesInDB />
			</div>
		</div>				
    )
}

export default ContentRowTop;