import axios from "axios";

const API_URL = "http://localhost:8080/product";

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du produit", error);
    return null;
  }
};
