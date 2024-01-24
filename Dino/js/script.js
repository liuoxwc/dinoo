function openSignUpPopup() {
    document.getElementById('signup-popup').style.display = 'block';
}

function closeSignUpPopup() {
    document.getElementById('signup-popup').style.display = 'none';
}


function closeSignUpPopup() {
    document.getElementById('signup-popup').style.display = 'none';
}

function validateForm() {
    var id = document.getElementById('id').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    if (id.trim() === '' || password.trim() === '' || email.trim() === '') {
        alert('모든 필드를 입력하세요.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('올바른 이메일 주소를 입력하세요.');
        return false;
    }
    
    alert('회원가입이 완료되었습니다.');
    return true;
}
