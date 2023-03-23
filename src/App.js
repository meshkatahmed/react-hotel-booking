import './App.css';
import Main from './Components/main';
import {BrowserRouter} from 'react-router-dom';
import myStore from './Redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
