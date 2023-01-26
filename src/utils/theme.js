const initTheme = () => {
    const theme = currenTheme();

    loadTheme(theme);
};

const currenTheme = () => {
    const localStoreageTheme = localStorage.getItem('studybox.theme');
    const systemTheme = window.matchMedia('[prefers-color-scheme: light]').matches;

    if (localStoreageTheme) {
        return localStoreageTheme;
    }

    return (systemTheme) ? 'light' : 'dark';
};

const loadTheme = (theme) => {
    const root = document.querySelector(':root');

    root.setAttribute('color-scheme', theme);
    localStorage.setItem('studybox.theme', theme);
}

export { initTheme };