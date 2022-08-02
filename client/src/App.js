import React,{Fragment} from 'react';
import InputData from './components/inputdata';
import ListData from './components/listdata';

import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container">

      <InputData/>
      <ListData/>

      </div>
    </Fragment>
  );
};

export default App;
