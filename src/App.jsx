import { Route, Routes } from 'react-router-dom';

import Search from './components/Filters/Search';
import Filter from './components/Filters/Filter';
import Header from './components/Header';
import Countries from './components/Countries';
import FullCountry from './components/FullCountry';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="filters">
                  <Search />
                  <Filter />
                </div>
                <Countries />
              </>
            }
          />
          <Route path="/country/:name" element={<FullCountry />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
