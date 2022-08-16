// step-1 : add click event handler with the submit button 
document.getElementById('button-submit').addEventListener('click', function () {
    // step-2: get the email address inside the email input field 
    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // step-3: get password
    // 3.a: set   id on the html Element
    // 3.b:  get the Element
    // 3.c: get the value from the Element
    const passField = document.getElementById('user-Password');
    const userPass = passField.value;

    // danger: do not verify email password on the client saite
    // step-4: verify email and password and scheck whether valid user or not
    if (userEmail === 'jillurahmanjibon@gmail.com' && userPass === 'Jibon27') {
        // console.log('Welcome back');
        window.location.href = 'bank.html';
    } else if (userEmail === '') {
        alert('Please input your Email')
    } else if (userPass === '') {
        alert('Please input your password')
    }
    else {
        alert('You are not a user or may have you are given wrong pass and email!')
    }


})