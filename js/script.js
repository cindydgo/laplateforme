document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");
    
    // Vérifie les champs
    if (!email.endsWith("@laplateforme.io")) {
        messageElement.textContent = "Seuls les membres de La Plateforme_ peuvent s'inscrire.";
        messageElement.style.color = "red";
        return;
    }
    
    if (password.length < 6) {
        messageElement.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
        messageElement.style.color = "red";
        return;
    }
    //Simulation d'une connexion
    const simulateLogin = () => {
        // Simule une réponse de serveur avec un délai
        setTimeout(() => {
            if (email && password) {
                localStorage.setItem("user_id", "123"); // Stocke l'ID utilisateur
                messageElement.textContent = "Connexion réussie!";
                messageElement.style.color = "green";
                
            } else {
                messageElement.textContent = "Mauvais identifiants";
                messageElement.style.color = "red";
            }
        }, 500);
    };
    // Pour les tests locaux avec fichier JSON statique
    simulateLogin();
});

// Attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le formulaire
    const presenceForm = document.getElementById('presenceForm');
    
    // Ajout écouteur d'événement pour la soumission du formulaire
    presenceForm.addEventListener('submit', function(event) {
        // Empêche le rechargement de la page
        event.preventDefault();
        
        // Récupère la date sélectionnée
        const datePresence = document.getElementById('datePresence').value;
        const dateObj = new Date(datePresence);
        const jour = String(dateObj.getDate()).padStart(2, '0');
        const mois = String(dateObj.getMonth() + 1).padStart(2, '0');
        const annee = String(dateObj.getFullYear());
        
        const dateFormatee = `${jour}-${mois}-${annee}`;
        
        // Affiche message de confirmation
        alert('Date de présence soumise : ' + dateFormatee);
        
        console.log('Date de présence soumise :', dateFormatee);
        
        // Réinitialise le formulaire
        presenceForm.reset();
    });
});

document.getElementById("button").addEventListener("click", () => {
    fetch("users.json")
        .then(response => response.json()) // Convertit la réponse en JSON
        .then(data => {
            const tableBody = document.getElementById("userTableBody");
            tableBody.innerHTML = ""; // Vide le tableau avant d'ajouter les nouvelles données

            // Ajoute chaque utilisateur sous forme de ligne dans le tableau
            data.forEach(user => {
                const row = document.createElement("tr");

                // Crée des cellules avec les infos de l'utilisateur
                row.innerHTML = `
                    <td>${user.email}</td>
                    <td><button class="deleteButton">Supprimer</button></td>
                `;

                tableBody.appendChild(row);
            });

            // Ajoute un événement "click" à tous les boutons "Supprimer"
            document.querySelectorAll(".deleteButton").forEach((button, index) => {
                button.addEventListener("click", () => {
                    tableBody.deleteRow(index);
                });
            });

        })
        .catch(error => console.error("Erreur lors du chargement des utilisateurs :", error));
});

document.getElementById("updateButton").addEventListener("click", () => {
    fetch("users.json")
        .then(response => response.json()) // Convertit la réponse en JSON
        .then(data => {
            const tableBody = document.getElementById("studentTableBody");
            tableBody.innerHTML = ""; // Vide le tableau avant d'ajouter les nouvelles données

            // Ajoute chaque utilisateur sous forme de ligne dans le tableau
            data.forEach(user => {
                const row = document.createElement("tr");
                row.setAttribute("data-id", user.id); // Stocke l'ID dans l'attribut data-id de la ligne

                // Crée des cellules avec les infos de l'utilisateur
                row.innerHTML = `
                    <td>${user.email}</td>
                    <td>${user.date}</td>
                    <td class="status-cell">${user.status}</td>
                    <td>
                        <button class="acceptButton">Accepter</button>
                        <button class="refuseButton">Refuser</button>
                    </td>
                `;

                // Ajoute des écouteurs d'événements après création de la ligne
                const acceptButton = row.querySelector(".acceptButton");
                const refuseButton = row.querySelector(".refuseButton");
                
                acceptButton.addEventListener("click", () => {
                    updateStatus(row, 'accept');
                });
                
                refuseButton.addEventListener("click", () => {
                    updateStatus(row, 'reject');
                });

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Erreur lors du chargement des utilisateurs :", error));
});

// Met à jour le statut d'un élève dans le tableau
function updateStatus(row, action) {
    const statusCell = row.querySelector(".status-cell");
    
    // Mise à jour visuelle dans le tableau
    if (action === 'accept') {
        statusCell.textContent = "présent";
    } else {
        statusCell.textContent = "absent";
    }
}