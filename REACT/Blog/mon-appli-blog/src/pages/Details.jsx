// Details.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams(); // Récupère l’ID dans l’URL s’il y en a un
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newComment, setNewComment] = useState(''); // Pour écrire un commentaire

  // Récupère les blogs depuis le localStorage au chargement
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(savedBlogs);
    setFilteredBlogs(savedBlogs);
  }, []);


  // ✅ CAS 1 : Page de détail pour UN SEUL blog
  if (id !== undefined) {
    const blog = blogs[id];

    if (!blog) {
      return <p>Blog introuvable.</p>;
    }

    const comments = blog.comments || [];

    // Fonction pour ajouter un commentaire
    const handleAjouterCommentaire = () => {
      if (newComment.trim() === '') return;

      const updatedBlogs = [...blogs];
      updatedBlogs[id].comments = updatedBlogs[id].comments || [];
      updatedBlogs[id].comments.push(newComment);

      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      setBlogs(updatedBlogs);
      setNewComment('');
    };

    return (
      <div className="details">
        <h2>{blog.titre}</h2>
        <p><strong>Catégorie:</strong> {blog.categorie}</p>
        <img src={blog.image} alt="blog" />
        <p><strong>Par:</strong> {blog.author}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        <h4>Introduction</h4>
        <p>{blog.introduction}</p>
        <h4>Contenu</h4>
        <p>{blog.content}</p>

        {/* Section commentaires */}
        <div className="commentaires-section">
          <h3>Commentaires ({comments.length})</h3>
          <ul>
            {comments.map((comment, i) => (
              <li key={i}>💬 {comment}</li>
            ))}
          </ul>

          <div className="ajouter-commentaire">
            <input
              type="text"
              placeholder="Ajouter un commentaire..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAjouterCommentaire}>Ajouter</button>
          </div>
        </div>
      </div>
    );
  }

  // ✅ CAS 2 : Tous les blogs détaillés avec recherche
  return (
    <div className="details">
      <h2>Tous les Détails des Blogs</h2>

      {/* Barre de recherche */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔎 Rechercher par catégorie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Affiche la catégorie sélectionnée */}
      {selectedCategory && (
        <div className="categorie-selected">
          Catégorie sélectionnée : <strong>{selectedCategory}</strong>
        </div>
      )}

      {/* Affiche tous les blogs filtrés */}
      {filteredBlogs.length === 0 ? (
        <p>Aucun blog trouvé.</p>
      ) : (
        filteredBlogs.map((blog, index) => (
          <div className="blog-detail-card" key={index}>
            <h3>{blog.titre}</h3>
            <p><strong>Catégorie:</strong> {blog.categorie}</p>
            <img src={blog.image} alt={`blog-${index}`} />
            <p><strong>Auteur:</strong> {blog.author}</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            <p><strong>Commentaires:</strong> {blog.comments?.length || 0}</p>
            <h4>Introduction</h4>
            <p>{blog.introduction}</p>
            <h4>Contenu</h4>
            <p>{blog.content}</p>
            <hr style={{ border: '1px solid orange', margin: '2rem 0' }} />
          </div>
        ))
      )}
    </div>
  );
}

export default Details;
