import React from 'react'; 
import UserList from './UserList'; // Importe le composant UserList depuis le fichier UserList.js


// Définition du composant principal de l'application
function App() {
  return (
    <div className="App"> {/* Définit une division avec la classe CSS App */}
      {/* Affiche le composant UserList, qui contient la liste des utilisateurs */}
      <UserList />
    </div>
  );
}

export default App;
