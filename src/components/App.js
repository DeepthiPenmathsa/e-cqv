import CssBaseline from '@material-ui/core/CssBaseline';
import Headder from './Headder';
import Sider from './Sider';




function App() {
  return (
    <div className="App">
      <CssBaseline>
      {/* <h1>Starting E-CQA Application </h1> */}
      <Headder/>
      <Sider/>
      </CssBaseline>
    </div>
  );
}

export default App;
