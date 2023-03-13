const itemListContainer = ({ greeting }) => {
    return (
      <div className="listContainer">
        <div>
        <h2>{greeting}</h2>
        <p>Este es el contenido del ItemListContainer</p>
      </div>
      </div>
    );
  };

  export default itemListContainer;