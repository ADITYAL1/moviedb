
import AppLayout from './component/AppLayout';
import {Provider} from 'react-redux'
import appStore from './utils/appstore';
import Router from './component/Router';

function App() {

  return (
    <Provider store={appStore} >
    
   <Router/>
  
   </Provider>
   
   
    
  );
}

export default App;
