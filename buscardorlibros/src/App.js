

import './App.css';


import Navbar from './fragments/Navbar';
import Search from './fragments/Search';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
      console.log('Todo bien:', reg)
    }, function (err) {
      console.log('Fallo:', err)
    })
  })
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <Search />
      </div>

      <div className="container my-3">
        <div id="booksRow" className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center g-2"></div>
        <div id='msgDiv' className='d-none row text-center'>
          <div className='col'>
            <h3 id='msg'>No results found.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

