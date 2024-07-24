import React, { useState } from 'react';

const Ville = () => {
    const Villes = [
        { titre: "Dakar", description: "Capitale du Sénégal, connue pour ses plages et son ambiance animée." },
        { titre: "Paris", description: "Capitale de la France, célèbre pour sa culture, sa gastronomie et ses monuments historiques." },
        { titre: "Londres", description: "Capitale du Royaume-Uni, connue pour ses musées, ses théâtres et ses monuments emblématiques." }
    ];

    const [selectedVille, setSelectedVille] = useState(null);

    return (
        <div>
            <h1>Liste des villes</h1>
            <div>
                {Villes.map((ville, index) => (
                    <button key={index} onClick={() => setSelectedVille(ville)}>
                        {ville.titre}
                    </button>
                ))}
            </div>
            {selectedVille && (
                <div>
                    <h2>{selectedVille.titre}</h2>
                    <p>{selectedVille.description}</p>
                </div>
            )}
        </div>
    );
};

export default Ville;
