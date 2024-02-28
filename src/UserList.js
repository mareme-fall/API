import React, { useState, useEffect } from 'react'; // Importe React ainsi que les hooks useState et useEffect
import axios from 'axios'; // Importe Axios pour effectuer des requêtes HTTP

// Définition du composant UserList
const UserList = () => {
    // Déclare un état pour stocker la liste des utilisateurs
    const [listOfUsers, setListOfUsers] = useState([]);

    // Utilise le hook useEffect pour effectuer des actions après le rendu initial du composant
    useEffect(() => {
        // Définit une fonction asynchrone pour récupérer les données des utilisateurs depuis l'API JSONPlaceholder
        const fetchData = async () => {
            try {
                // Effectue une requête GET vers l'API JSONPlaceholder pour obtenir la liste des utilisateurs
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                // Met à jour l'état listOfUsers avec les données des utilisateurs récupérées depuis la réponse
                setListOfUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error); // Affiche une erreur s'il y a un problème lors de la récupération des données
            }
        };

        fetchData(); // Appelle la fonction fetchData lors du premier rendu du composant
    }, []); // Utilise un tableau vide comme dépendance pour que le hook useEffect s'exécute une seule fois

    return (
        <div>
            <h1>List of Users</h1> {/* Affiche un titre pour la liste des utilisateurs */}
            {/* Affiche la liste des utilisateurs à partir de l'état listOfUsers */}
            <ul>
                {/* Utilise la méthode map pour parcourir la liste des utilisateurs et afficher chaque utilisateur */}
                {listOfUsers.map(user => (
                    <li key={user.id}>
                        {/* Affichage des détails de l'utilisateur */}
                        <h2>{user.name}</h2>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Adresse: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                        <p>Téléphone: {user.phone}</p>
                        <p>Site Web: {user.website}</p>
                        <p>Entreprise: {user.company.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList; // Exporte le composant UserList pour le rendre disponible à l'importation
