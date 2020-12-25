import CssBaseline from '@material-ui/core/CssBaseline';

import Login from '../Pages/Login'
import Landing from '../Pages/LandingPage'
import { ApolloProvider} from '@apollo/client';
import {createApolloClient} from '../DBConnections/ApolloClient';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';



function App() {
  const client = createApolloClient();
  return (
    <div className="App">
    <BrowserRouter>
    <ApolloProvider client={client}>
   
      <CssBaseline>
    <Switch>
            <Route exact path="/">
                 <Login/>
                
            </Route>
            <Route path="/landing">
               <Landing/>
            </Route>
          </Switch>
    
      
      
      </CssBaseline>
    
    </ApolloProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
