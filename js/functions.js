function showMyBirthday() {
    const dateCell = document.querySelector('#date__cell');
    dateCell.innerHTML = moment('19910406', 'YYYYDDMM').format('DD MM YYYY');
}

function validateInputs() {
    let isValid = true;

    let birthYear = document.querySelector('#input-year');
    let birthMonth = document.querySelector('#input-month');
    let birthDay = document.querySelector('#input-day');

    let patternYear = /^\d{4}$/;
    let resultYear = patternYear.test(birthYear.value);
    let patternMonth = /^[0][1-9]|[0-1][0-2]$/;
    let resultMonth = patternMonth.test(birthMonth.value);
    let patternDay = /^[0-2][1-9]|[0-3][0-1]$/;
    let resultDay = patternDay.test(birthDay.value);

    if (!resultYear) {
        birthYear.classList.add('incorrect');
        isValid = false;
    } else {
        birthYear.classList.remove('incorrect');
    }

    if (!resultMonth) {
        birthMonth.classList.add('incorrect');
        isValid = false;
    } else {
        birthMonth.classList.remove('incorrect');
    }

    if (!resultDay) {
        birthDay.classList.add('incorrect');
        isValid = false;
    } else {
        birthDay.classList.remove('incorrect');
    }

    return isValid;
}