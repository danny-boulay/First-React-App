import { useState } from 'react'; //hook fournit par React

function NameUpdate({ onUpdate }) {
  const [name, setName] = useState(''); //champ de saisi vide au départ

  const handleSubmit = (e) => { //fonction qui est déclenchée à la soumission du formulaire
    e.preventDefault(); //empêche le formulaire de recharger la page
    if (name.trim()) { //supprime les espaces blancs et vérifie si le input est vide
      onUpdate(name); //passe au parent (mise à jour)
      setName(''); // réinitialise l'input après mise à jour
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"><p>Enter your name:</p></label>
        <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)} //met à jour {name} avec la valeur saisie
            placeholder="Type your name"
        />
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default NameUpdate;
