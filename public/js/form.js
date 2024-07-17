document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact_form');
    const telephoneInput = document.getElementById('telephone_input');
    const countryInput = document.getElementById('country_input');
    const telephoneRegex = /^\+?[0-9]{10,15}$/;

    function validateTelephone() {
        const telephoneValue = telephoneInput.value.trim();
        return telephoneRegex.test(telephoneValue);
    }

    function validateCountry() {
        return countryInput.value !== "Country";
    }

    form.addEventListener('submit', function(event) {
        let isValid = true;
        let errorMessage = '';

        if (!validateTelephone()) {
            isValid = false;
            telephoneInput.classList.add('error');
            errorMessage += 'Пожалуйста, введите корректный номер телефона.\n';
        } else {
            telephoneInput.classList.remove('error');
        }

        if (!validateCountry()) {
            isValid = false;
            countryInput.classList.add('error');
            errorMessage += 'Пожалуйста, выберите страну.\n';
        } else {
            countryInput.classList.remove('error');
        }

        if (!isValid) {
            event.preventDefault();
            alert(errorMessage.trim());
        }
    });

    telephoneInput.addEventListener('input', function() {
        if (validateTelephone()) {
            telephoneInput.classList.remove('error');
        } else {
            telephoneInput.classList.add('error');
        }
    });

    countryInput.addEventListener('change', function() {
        if (validateCountry()) {
            countryInput.classList.remove('error');
        } else {
            countryInput.classList.add('error');
        }
    });
});
