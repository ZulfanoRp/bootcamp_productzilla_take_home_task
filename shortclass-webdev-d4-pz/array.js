const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];

function findCountry(countryName) {
    const checkCountry = countries.includes(countryName);

    const checkPartialCountry = countries.some(country => country.toLowerCase().includes(countryName.toLowerCase()) );

    if (checkCountry || checkPartialCountry) {
        return `${countryName} - Ada`
    } else {
        return `${countryName} - Tidak ada`
    }
}

console.log(findCountry("ikat"));