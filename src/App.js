import './App.css';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Textutils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success bg-light " type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>



    
    
    
    
    </>
  );
}

export default App;
