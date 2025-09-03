import React, { useState } from 'react';

function AdminPanel() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addGame = () => {
    if (title) {
      alert(`Гру "${title}" додано! (У демо-режимі)`);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Адміністративна панель</h1>
      <div style={{ marginBottom: '10px' }}>
        <input 
          placeholder="Назва гри*" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input 
          placeholder="Опис гри" 
          value={description} 
          onChange={e => setDescription(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>
      <button 
        onClick={addGame}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Додати гру
      </button>
    </div>
  );
}

export default AdminPanel;
