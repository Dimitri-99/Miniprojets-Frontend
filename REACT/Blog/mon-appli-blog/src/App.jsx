// App.jsx
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Details from './pages/Details';
import Formulaire from './pages/Formulaire';
import './App.css';

function App() {
  useEffect(() => {
   if (!localStorage.getItem("blogs")) {
     const blogs = [
       {
          titre: "Comment débuter avec React et Vite",
          author: "Ali Codeur",
          categorie: "Programmation",
          introduction: "React avec Vite est le moyen le plus rapide de démarrer une app moderne.",
          content: "Dans cet article, nous allons voir comment configurer un projet React avec Vite, structurer les composants et gérer le state local.",
          image: "/images/REACT.jpeg",
          comments: []
       },
       {
          titre: "Les bienfaits du café noir pour les développeurs",
          author: "Sarah Dev",
          categorie: "Lifestyle",
          introduction: "Le café n’est pas juste une boisson, c’est un carburant pour le code.",
          content: "Boire du café noir améliore la concentration, booste la productivité et garde l'esprit alerte.",
          image: "/images/Café.jpeg",
          comments: []
        },
       { 
          titre: "3 erreurs à éviter en HTML/CSS",
          author: "Julie Front",
          categorie: "Web Design",
          introduction: "HTML et CSS sont simples, mais certaines erreurs reviennent souvent.",
          content: "Ne pas utiliser de balises sémantiques, abuser des marges, oublier le responsive design…",
          image: "/images/HTML.jpeg",
          comments: []
        },
       {
          titre: "Créer une to-do list avec JavaScript pur",
          author: "Zack Dev",
          categorie: "JavaScript",
          introduction: "Pas besoin de framework pour faire une app utile.",
          content: "Une to-do list est un excellent exercice pour les débutants en JavaScript.",
           image: "/images/Todo.png",
         comments: []
        },
       {
          titre: "Pourquoi le dark mode est plus qu’un style",
          author: "Nina UX",
          categorie: "Design",
          introduction: "Le mode sombre est devenu un standard — mais pas seulement pour les yeux.",
          content: "Le dark mode réduit la fatigue visuelle, améliore l'autonomie sur mobile, et donne un look moderne.",
          image: "/images/Darkmode.jpeg",
          comments: []
        }
      ];
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  }, []);
  return (
    // Router permet de naviguer entre les différentes pages
    <Router>
      {/* Barre de navigation */}
      <nav className="navbar">
        <h1>DWorldBlogs</h1>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/Formulaire">Formulaire</Link>
        </div>
      </nav>

      {/* Contenu principal selon la route */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Details/:id" element={<Details />} />        // Pour voir un seul blog
        {/* Route pour le formulaire d'ajout de blog */}
        <Route path="/Formulaire" element={<Formulaire />} />
      </Routes>

      {/* Pied de page */}
      <footer className="footer">
        <p>DimiWorldBlog une interface pour vos différents blogs</p>
        <p>Email: dimifopa2@gmail.com</p>
        <p>Contact: 691158120</p>
        <p>GitHub: Dimitri-99</p>
        <p>Adress: Douala</p>
      </footer>
    </Router>
  );
  

}

export default App;
