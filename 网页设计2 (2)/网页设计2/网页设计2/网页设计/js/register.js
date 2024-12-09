document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const country = document.getElementById('country').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 验证用户名
    if (username === '') {
        alert('用户名不能为空！');
        return;
    }

    // 验证邮箱格式
    if (!emailRegex.test(email)) {
        alert('请输入有效的邮箱地址！');
        return;
    }

    // 验证密码
    if (password.length < 6) {
        alert('密码长度不能少于6位！');
        return;
    }

    // 验证两次密码输入是否一致
    if (password !== confirmPassword) {
        alert('两次输入的密码不一致！');
        return;
    }

    // 验证国家选择
    if (country === '') {
        alert('请选择国家！');
        return;
    }

    // 如果所有验证通过
    alert('注册成功！');
    // 可以在此处添加进一步的逻辑，例如发送数据到服务器
});
