function loging(event) {
    event.preventDefault();

    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123') {
        console.log('Username:', username, 'Password:', password);
        alert('Login successful!');
        window.location.href = 'dashboard.html'; 
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
