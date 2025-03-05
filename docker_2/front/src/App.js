import React from 'react';
import { useState } from "react";
import { getUser } from "./services/UserService";
import { getProduct } from "./services/ProductService";
import "./App.css";

const App = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);

  const fetchUser = async (e) => {
    e.preventDefault();
    const data = await getUser(userId);
    setUser(data);
  };

  const fetchProduct = async (e) => {
    e.preventDefault();
    const data = await getProduct(productId);
    setProduct(data);
  };

  return (
    <div className="container">
      <h1>Recherche de Données</h1>

      <div className="section">
        <h2>Rechercher un Utilisateur</h2>
        <form onSubmit={fetchUser}>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            placeholder="Entrez l'ID de l'utilisateur"
          />
          <button type="submit">Rechercher</button>
        </form>
        {user ? (
          <p>
            <strong>ID:</strong> {user.id} | <strong>Nom:</strong> {user.name} |{" "}
            <strong>Email:</strong> {user.email}
          </p>
        ) : (
          userId && <p>Utilisateur non trouvé.</p>
        )}
      </div>

      <div className="section">
        <h2>Rechercher un Produit</h2>
        <form onSubmit={fetchProduct}>
          <input
            type="number"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
            placeholder="Entrez l'ID du produit"
          />
          <button type="submit">Rechercher</button>
        </form>
        {product ? (
          <p>
            <strong>ID:</strong> {product.id} | <strong>Nom:</strong> {product.title} |{" "}
            <strong>Prix:</strong> {product.price} €
          </p>
        ) : (
          productId && <p>Produit non trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default App;
