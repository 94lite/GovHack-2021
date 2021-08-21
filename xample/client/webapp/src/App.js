import { Provider } from 'react-redux'
import './App.css'
import 'antd/dist/antd.css';
import Template from './PageContainers/Template';
import DisplayTime from './DisplayTime';
import LongWork from './LongWork';

function App() {
  return (
    <div>
      <header className="App-header" />
      <Template />
      {/* <DisplayTime /><LongWork /> */}
    </div>
  );
}

export default App;
