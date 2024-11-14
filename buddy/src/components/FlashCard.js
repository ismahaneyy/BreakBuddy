import React, { useState, useEffect } from 'react';
import './FlashCard.css';

const FlashCard = () => {
    const [cards, setCards] = useState([]);
    const [newNote, setNewNote] = useState("");
    const userId = sessionStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
            fetch(`https://bbbackend.onrender.com/notes/${userId}`)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(data => setCards(data))
                .catch(error => console.error('Error fetching cards:', error));
        }
    }, [userId]);

    const addCard = () => {
        if (newNote.trim() === "") return;

        const newCard = { text: newNote };
        fetch(`https://bbbackend.onrender.com/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newCard, userId }),
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => setCards([...cards, data]))
        .catch(error => {
            console.error('Error adding card:', error);
            alert('There was an issue adding your note. Please try again.');
        });

        setNewNote("");
    };

    const deleteCard = (id) => {
        fetch(`https://bbbackend.onrender.com/notes/${id}`, {
            method: 'DELETE',
        })
        .then(() => setCards(cards.filter(card => card.id !== id)))
        .catch(error => console.error('Error deleting card:', error));
    };

    return (
        <div className="flashcard-container">
            <h2>Flashcards</h2>
            <div className="add-note-container">
                <input 
                    type="text" 
                    placeholder="Enter note" 
                    value={newNote} 
                    onChange={(e) => setNewNote(e.target.value)} 
                />
                <button onClick={addCard}>Add Note</button>
            </div>
            <div className="cards-container">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <p>{card.text}</p>
                        <button className="delete-btn" onClick={() => deleteCard(card.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlashCard;
