document.addEventListener("DOMContentLoaded", function () {
    const summaryParagraphs = document.querySelectorAll('.summary p');
    const companies = [
        { name: 'Amazon', logoClass: 'ri-amazon-fill', bestSeller: 'Samboodi Bag Shee', stats: '72k Favorited, 12k Checked-out' },
        { name: 'Facebook', logoClass: 'ri-facebook-fill', bestSeller: 'Shoulder Bag', stats: '50k Favorited, 8k Checked-out' },
        { name: 'App Store', logoClass: 'ri-app-store-fill', bestSeller: 'The Grand Mafia', stats: '990k Favorited, 150k Checked-out' },
        { name: 'Alibaba(Alipay)', logoClass: 'ri-alipay-fill', bestSeller: 'Alibaba Play Station 5', stats: '400k Favorited, 100k Checked-out' },
        { name: 'Google Market Place', logoClass: 'ri-google-fill', bestSeller: 'Samsung 65 inch Fridge', stats: '90k Favorited, 15k Checked-out' }
    ];

    const countries = [
        { name: 'Indonesia', orders: '190k', flagClass: 'flag-icon-id' },
        { name: 'United States', orders: '150k', flagClass: 'flag-icon-us' }
        // Add more countries as needed
    ];

    let index = 0, currentCompanyIndex = 0, currentCountryIndex = 0;

    function cycleSummaryParagraphs() {
        summaryParagraphs.forEach(p => p.style.display = 'none');
        summaryParagraphs[index].style.display = 'block';
        index = (index + 1) % summaryParagraphs.length;
    }

    function cycleCompanies() {
        const company = companies[currentCompanyIndex];
        document.getElementById('company-logo').innerHTML = `<i class="${company.logoClass}"></i>`;
        document.getElementById('product-name').textContent = `Product best seller: ${company.bestSeller}`;
        document.getElementById('product-stats').textContent = company.stats;
        currentCompanyIndex = (currentCompanyIndex + 1) % companies.length;
    }

    function cycleCountries() {
        const country = countries[currentCountryIndex];
        const countryInfo = document.querySelector('.top-country');
        countryInfo.innerHTML = `
            <h2 style="font-size: 1em; margin-left: 12%;">Most users by country</h2>
            <div class="country-info">
                <span class="flag-icon ${country.flagClass}"></span>
                <p style="font-size: 0.8em;">${country.name}</p>
            </div>
            <p style="font-size: 0.8em;">${country.orders} orders</p>
        `;
        currentCountryIndex = (currentCountryIndex + 1) % countries.length;
    }

    cycleSummaryParagraphs();
    cycleCompanies();
    cycleCountries();

    setInterval(cycleSummaryParagraphs, 3000);
    setInterval(cycleCompanies, 5000);
    setInterval(cycleCountries, 5000);
});
