document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 验证账号和密码
    if (username === '123456' && password === '123456') {
        window.location.href = './index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
