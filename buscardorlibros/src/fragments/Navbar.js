import ReactDOM from 'react-dom/client';
import BookCard from './BookCard';

function Navbar() {
    function viewFavorites() {
        document.getElementById('booksRow').innerHTML = '';

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if(favorites.length === 0) {
            document.getElementById('msg').innerHTML = "You don't have any books saved."
            document.getElementById('msgDiv').classList.remove("d-none");
        } else {
            const bookComponents = [];

            for (let x in favorites) {
                const bookInfo = favorites[x];
                console.log(bookInfo);

                // Create a BookCard component and add it to the array
                bookComponents.push(<BookCard key={x} book={bookInfo} existingFavorites={favorites} />);
            }

            // Render the array of BookCard components in the "booksRow" div
            const booksRoot = document.getElementById('booksRow');
            const root = ReactDOM.createRoot(booksRoot);
            root.render(bookComponents);
        }
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    <img src="./images/favicon.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
                    Google Books Client
                </span>
                <div className="d-flex">
                    <button onClick={() => viewFavorites()} className="btn btn-primary me-auto">
                        View Favorites
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;