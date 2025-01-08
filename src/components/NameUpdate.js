import { useState } from 'react';

function NameUpdate({ onUpdate }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onUpdate(name);
      setName(''); // Réinitialise l'input après mise à jour
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
            onChange={(e) => setName(e.target.value)}
            placeholder="type your name"
        />
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default NameUpdate;
