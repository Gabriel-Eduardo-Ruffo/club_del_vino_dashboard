import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import ListUsers from './ListUsers';
import ListProducts from './ListProducts';
import Error404 from './Error404';

import {Route, Switch} from 'react-router-dom';

function ContentWrapper () {
  
    return (
        // <!-- Content Wrapper -->
		<div id="content-wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">
                <TopBar />
                <Switch>
                    <Route path='/' exact component={ContentRowTop} /> 
                    <Route path='/listProducts' exact component={ListProducts} />
                    <Route path='/listUsers' exact component={ListUsers} />
                    <Route component={Error404} />
                </Switch>                                 
            </div>
			{/* <!-- End of MainContent --> */}
            <Footer />
        </div>
		/* <!-- End of Content Wrapper --> */
    );
}

export default ContentWrapper;