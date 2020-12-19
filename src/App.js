import React, { Fragment, useState } from 'react';
import './App.css';
import countries from './datas/country.json';
import Header from './components/header';
import Countries from './components/country';

const App = () => {
  const [data] = useState(countries)

  return (
    <Fragment>
      <Header title="ReactJs pagination" />
      <div className="container px-2">
        <Countries data={data} itemsPerPage={10} />
        <Countries data={data} itemsPerPage={5} />
      </div>
    </Fragment>
  );
}

export default App;
