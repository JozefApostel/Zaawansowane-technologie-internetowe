document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pobierz wartości z pól formularza
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;

    // Wyrażenia regularne do walidacji
    var usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Sprawdź walidację dla nazwy użytkownika
    if (!usernameRegex.test(username)) {
        alert("Nazwa użytkownika musi zawierać co najmniej 3 znaki alfanumeryczne.");
        return;
    }

    // Sprawdź walidację dla hasła
    if (!passwordRegex.test(password)) {
        alert("Hasło musi zawierać co najmniej 6 znaków, w tym przynajmniej jedną małą literę, jedną wielką literę, jedną cyfrę i jeden znak specjalny.");
        return;
    }

    // Sprawdź, czy hasła są takie same
    if (password !== confirmPassword) {
        alert("Hasła nie pasują do siebie.");
        return;
    }

    // Sprawdź walidację dla adresu email
    if (!emailRegex.test(email)) {
        alert("Podaj poprawny adres email.");
        return;
    }

    // Jeśli wszystkie walidacje przeszły pomyślnie, można przesłać formularz lub wykonać inne działania
    alert("Formularz został pomyślnie przesłany!");
});
