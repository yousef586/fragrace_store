


const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const address = document.getElementById('address');
const city = document.getElementById('city');
const country = document.getElementById('country');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const lastNameValue = lastName.value.trim();
    const cityValue = city.value.trim();
    const countryValue = country.value.trim();
    const addressValue = address.value.trim();

    if(firstNameValue === '') {
        setError(firstName, 'Username is required');
    } else {
        setSuccess(firstName);
    }
    if(lastNameValue === '') {
        setError(lastName, 'Username is required');
    } else {
        setSuccess(lastName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(cityValue === '') {
        setError(city, 'City is required');
    } else {
        setSuccess(city);
    }

    if(countryValue === '') {
        setError(country, 'Country is required');
    } else {
        setSuccess(country);
    }
    
    if(addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }
 
};
