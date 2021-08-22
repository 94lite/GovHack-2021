import { Provider } from 'react-redux'
import './App.less'
import { store } from './redux/store'

import Template from './PageContainers/Template';

import DisplayTime from './DisplayTime';
import LongWork from './LongWork';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Template />
        {/* <DisplayTime /><LongWork /> */}
      </Provider>
    </div>
  );
}

export default App;
