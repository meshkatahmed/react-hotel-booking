import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './Home/home';
import Services from './Services/services';
import Register from './Register/register';

const Body = () => {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/register' component={Register}></Route>
                <Route exact path='/services' component={Services}></Route>
                <Redirect from='/' to='/home'></Redirect>
            </Switch>
        </div>
    );
}

export default Body;