// Formulaire.jsx
import React, { useState } from 'react';

function Formulaire() {
  // États pour stocker les valeurs des champs
  const [formData, setFormData] = useState({
    image: '',
    author: '',
    categorie: '',
    titre: '',
    introduction: '',
    content: '',
  });
  // Nouvelle fonction pour charger une image depuis le dossier local
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      // Quand le fichier est chargé
      reader.onloadend = () => {
        // On met le contenu base64 dans l'état formData.image
        setFormData({ ...formData, image: reader.result });
      };
      // Lecture du fichier image
      reader.readAsDataURL(file);
    }
  };


  // Fonction pour gérer le changement de champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupération des anciens blogs depuis le localStorage
    const oldBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Ajout du nouveau blog
    const updatedBlogs = [...oldBlogs, formData];

    // Sauvegarde dans le localStorage
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    // Réinitialisation du formulaire
    setFormData({
      image: '',
      author: '',
      categorie: '',
      titre: '',
      introduction: '',
      content: '',
      comments: [],
    });

    alert("Blog ajouté avec succès !");
  };

  return (
    <div className="formulaire">
      <h2>Formulaire d’ajout de Blog</h2>
      <form onSubmit={handleSubmit}>

        {/* Champ image */}
        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} required />

        {/* Champ author */}
        <input type="text" name="author" placeholder="Auteur" value={formData.author} onChange={handleChange} required />

        {/* Champ catégorie */}
        <input type="text" name="categorie" placeholder="Catégorie" value={formData.categorie} onChange={handleChange} required />

        {/* Champ titre */}
        <input type="text" name="titre" placeholder="Titre" value={formData.titre} onChange={handleChange} required />

        {/* Champ introduction */}
        <textarea name="introduction" placeholder="Introduction" value={formData.introduction} onChange={handleChange} required />

        {/* Champ contenu */}
        <textarea name="content" placeholder="Contenu" value={formData.content} onChange={handleChange} required />

        <button type="submit">Ajouter le blog</button>
      </form>
    </div>
  );
}

export default Formulaire;
