'use strict';
$('.btn').tooltip({boundary: 'window'})
$('#toggleBtn').click(function() {
    $('.alert').toggleClass('hidden')
})

showMyBirthday();

buttonSubmit.addEventListener('click', () => {
    let isValid = validateInputs();
    if (isValid) {
        let birthYear = document.querySelector('#input-year');
        let birthMonth = document.querySelector('#input-month');
        let birthDay = document.querySelector('#input-day');
        let resultBox = document.querySelector('.input__result');
        let userBirthday = moment(`${birthYear.value}${birthDay.value}${birthMonth.value}`, 'YYYYDDMM').format('DD MM YYYY');
        resultBox.innerHTML = userBirthday;
    } 
});