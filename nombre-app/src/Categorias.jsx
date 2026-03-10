import React, { useEffect, useState } from "react";
import "./Categorias.css";
import "./Cards.css"

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL_CATEGORI;

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setCategorias(data.categories);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  const removeCategoria = (id) => {
    setCategorias(categorias.filter((cat) => cat.idCategory !== id));
  };

  if (loading) {
    return <div className="loader">Cargando categorías...</div>;
  }

  return (
    <div className="container-main">
      <h1 className="main-title">Categorías de Menú</h1>

      <main className="cards-grid">
        {categorias.map((cat) => (
          <article key={cat.idCategory} className="category-card">
            <div className="image-wrapper">
              <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            </div>

            <div className="card-body">
              <h2 className="category-title">{cat.strCategory}</h2>

              <p className="category-description">
                {cat.strCategoryDescription}
              </p>

              <div className="card-footer">

              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Categorias;