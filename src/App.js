import React from "react";
import { useContext } from "react";
import Filter from "./components/Filter";
import Jobs from "./components/Jobs";

import FilterContext from "./FilterContext";

function App() {
  const { filter } = useContext(FilterContext);

  return (
    <div className='container'>
      {filter.length > 0 && <Filter />}
      <Jobs />
      
    </div>
  );
}

export default App;
