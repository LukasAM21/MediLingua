// Function to load the selected language
function loadLanguage(lang) {
    fetch(`lang-${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Update Navbar
            document.getElementById('nav-home').textContent = data.navbar.home;
            document.getElementById('nav-about').textContent = data.navbar.about;
            document.getElementById('nav-quiz').textContent = data.navbar.quiz;
            document.getElementById('nav-lexicon').textContent = data.navbar.lexicon;
            document.getElementById('nav-symptomata').textContent = data.navbar.symptomata;

            // Update Header
            const headerElement = document.querySelector('header h1');
            if (headerElement) headerElement.textContent = data.header;

            // Update Content
            const contentTitle = document.querySelector('.content h2');
            if (contentTitle) contentTitle.textContent = data.content.title;

            const contentIntro = document.querySelector('.content p');
            if (contentIntro) contentIntro.textContent = data.content.intro;

            // Update Footer
            const footerElement = document.querySelector('footer p');
            if (footerElement) footerElement.textContent = data.footer;
        })
        .catch(error => console.error('Error loading language:', error));
}

// Load initial language from localStorage or default to 'en'
const languageSwitcher = document.getElementById('languageSwitcher');
const savedLang = localStorage.getItem('selectedLanguage') || 'cz';  // Default to Czech
languageSwitcher.value = savedLang;
loadLanguage(savedLang);

// Change language on user selection and save preference
languageSwitcher.addEventListener('change', () => {
    const selectedLang = languageSwitcher.value;
    localStorage.setItem('selectedLanguage', selectedLang); // Save preference
    loadLanguage(selectedLang);
});
