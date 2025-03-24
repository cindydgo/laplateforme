<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Plateforme</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel='stylesheet' href='./assets/css/index.css'>
</head>
<body>
    <header class="bg-dark p-3">
        <nav class="nav nav-fill gap-2 p-1 justify-content-between align-items-center">
            <div class="col-4">
                <a href="index.php" class="nav-item">
                    <img src="./assets/logo-laplateforme.png" alt="logo" class="img-fluid object-fit-sm-contain">
                </a>
            </div>
            <ul class="list-unstyled d-flex gap-2">
                <li class="nav-item">
                    <a href="login.html" class="nav-link text-white">Se Connecter</a>
                </li>
                <li class="nav-item">
                    <a href="register.html" class="nav-link text-white">S'inscrire</a>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="container">
            <div class="d-flex flex-column align-items-center shadow p-3 mt-4 mb-4 rounded">
                <h3 class="text-center">Connexion</h3>
                <div class="col-3">
                    <img src="./assets/logo-laplateforme.png" alt="logo" class="img-fluid">
                </div>
                <form action="" method="post" id="loginForm" class="d-flex flex-column align-items-center gap-2">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="@laplateforme.io" required>
                    <label for="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" required>
                    <input type="submit" name="submit" value="Se connecter" class="btn btn-primary">
                </form>
                <div id="message"></div>
            </div>
        </section>
        <section class="container">
            <div class="d-flex flex-column align-items-center shadow p-3 mb-4 rounded">
                <h3 class="text-center">Jour de présence</h3>
                <form class="d-flex flex-column align-items-center gap-2" id="presenceForm">
                    <label for="date">Selectionner votre jour de présence</label>
                    <input
                        type="date"
                        id="datePresence"
                        name="datePresence"
                        value="2025-03-24"
                        min="2025-01-01"
                        max="2025-12-31"
                        required 
                    />
                    <input type="submit" value="Envoyer" class="btn btn-primary"/>
                </form>
            </div>
        </section>
        <section class="container">
            <div class="d-flex flex-column align-items-center shadow p-3 mb-4 rounded">
                <h3 class="text-center">Gestion des utilisateurs</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Utilisateur</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="userTableBody">
                    <!-- Les utilisateurs seront ajoutés ici dynamiquement -->
                    </tbody>
                </table>
                <button id="button" class="btn btn-primary">Update</button>
            </div>
        </section>
        <section class="container">
            <div class="d-flex flex-column align-items-center shadow p-3 mb-4 rounded">
                <h3 class="text-center">Demandes de présence</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Utilisateur</th>
                            <th>Date</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="studentTableBody">
                    <!-- Les utilisateurs seront ajoutés ici dynamiquement -->
                    </tbody>
                </table>
                <button id="updateButton" class="btn btn-primary">Update</button>
            </div>
        </section>
    </main>
    <footer class="bg-dark text-white p-3">
        <ul class="list-unstyled d-flex gap-2 align-items-center justify-content-center">
            <li>©LaPlateforme</li>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
            <li>Contact</li>
        </ul>
    </footer>
    <script src="./js/script.js"></script>
</body> 
</html>