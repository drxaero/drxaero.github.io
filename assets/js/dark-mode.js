document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('color-mode-switch-input-id');
    const bsTheme = 'bsTheme';
    const lightTheme = 'light';
    const darkTheme = 'dark';

    // Update theme ans save to localStorage
    const updateTheme = (theme) => {
        htmlElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem(bsTheme, theme);
    };

    const initializeTheme = () => {
        const savedTheme = localStorage.getItem(bsTheme) || darkTheme;
        updateTheme(savedTheme);
        switchElement.checked = savedTheme === lightTheme;
    };

    const handleThemeSwitch = () => {
        const newTheme = switchElement.checked ? lightTheme : darkTheme;
        updateTheme(newTheme);
    };

    initializeTheme();

    switchElement.addEventListener('change', handleThemeSwitch);
});
