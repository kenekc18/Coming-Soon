let email_ = document.getElementById('email-log');
let button_ = document.getElementById('btn');
let form_ = document.getElementById('form');
let message_ = document.getElementById("error-message-container");


form_.addEventListener("submit", function(e){
    e.preventDefault();

    if (email_.value == '' || email_.value == null){
        console.log('No')
        message_.classList.remove('error-message');
        message_.classList.add('error-message-02');
    }
    else{
        console.log('Yes')
        message_.classList.remove('error-message-02');
        message_.classList.add('error-message');
    }
})

