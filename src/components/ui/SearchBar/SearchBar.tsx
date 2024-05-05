

export const SearchBar =  ({ add, onAddSucursalClick }: { add: string, onAddSucursalClick:any }) => {
  return (
    <div className="search-bar-container" style={{ width: '100%' }}>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button className="btn btn-outline-success" type="button" onClick={onAddSucursalClick}>
            {add}
          </button>
        </div>
      </nav>
    </div>
  );
};