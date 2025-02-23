// Écouter l'événement de soumission du formulaire
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire

    // Mot de passe correct
    const correctPassword = "Jameson";

    // Récupérer le mot de passe entré par l'utilisateur
    const enteredPassword = document.getElementById('password').value;

    // Vérifier si le mot de passe est correct
    if (enteredPassword === correctPassword) {
        // Rediriger vers la page protégée
        window.location.href = "paj3.html";
    } else {
        // Afficher un message d'erreur
        document.getElementById('errorMessage').style.display = 'block';
    }
});