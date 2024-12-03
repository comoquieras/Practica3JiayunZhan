function Book({ book, existingFavorites }) {
  function bookIsFavorite(book, favorites) {
      for(let x in favorites){
          let origBook = favorites[x];
          if(origBook.infoLink === book.infoLink){
              return true;
          }
      }
      return false;
  }

  function addToFavorites(event, book) {
      const btn = event.target;
      btn.classList.add('btn-danger');
      btn.classList.remove('btn-primary');
      btn.removeEventListener('click', addToFavorites);
      btn.addEventListener('click', removeFromFavorites);
      btn.innerHTML = "Remove from favorites";

      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      
      if(!bookIsFavorite(book, favorites)) {
          favorites.push(book);
          localStorage.setItem('favorites', JSON.stringify(favorites));
      } else {
          console.error("You shouldn't be here :(");
      }
  }

  function removeFromFavorites(event, book) {
      const btn = event.target;
      btn.classList.remove('btn-danger');
      btn.classList.add('btn-primary');
      btn.removeEventListener('click', removeFromFavorites);
      btn.addEventListener('click', addToFavorites);
      btn.innerHTML = "Add to favorites"; 

      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      
      let newFavorites = [];
      for(let x in favorites){
          const origBook = favorites[x];
          if(origBook.infoLink !== book.infoLink)
              newFavorites.push(origBook);
      }
      
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  const isFavorite = bookIsFavorite(book, existingFavorites);
  return (
      <div className ="col">
          <div className="card h-100">
              <img className="card-img-top" src={book.imageLinks?.thumbnail || "https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4="} alt="Book Cover"></img>
              <div class="card-header">  
                  <h5 className="card-title">{book.title || 'No Title'}</h5>
              </div>
              <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-body-secondary">{(book.authors || []).join(', ') || 'Unknown Author'}</h6>
                  {book.infoLink &&
                      <a  href={book.infoLink} target="_blank" rel="noreferrer">More info</a>
                  }
              </div>
              <div class="card-footer text-body-secondary">
                  <button onClick={isFavorite ? (event) => removeFromFavorites(event, book) : (event) => addToFavorites(event, book)} className={"btn " + (isFavorite ? "btn-danger" : "btn-primary")}>
                      {isFavorite ? "Remove from favorites" : "Add to favorites"}
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Book;