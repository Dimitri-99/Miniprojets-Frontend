// Accueil.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(savedBlogs);
  }, []);

  // On filtre selon la recherche
  const filteredBlogs = blogs.filter((blog) => {
    return blog.categorie.toLowerCase().includes(search.toLowerCase());
  });

  // Met à jour la catégorie sélectionnée
  useEffect(() => {
    if (search.trim() !== '') {
      setSelectedCategory(search);
    } else {
      setSelectedCategory('');
    }
  }, [search]);

  return (
    <div className="accueil">
      <h2>Nos Articles</h2>

      {/* Barre de recherche centrée */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔎 Rechercher par catégorie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Catégorie choisie */}
      {selectedCategory && (
        <div className="categorie-selected">
          Catégorie sélectionnée : <strong>{selectedCategory}</strong>
        </div>
      )}

      <div className="blog-list">
        {filteredBlogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt="blog" />
            <h3>{blog.titre}</h3>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            <p><strong>Commentaires:</strong> {blog.comments?.length || 0}</p> 
            <p>{blog.introduction}</p>
            <Link to={`/details/${index}`}>Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
