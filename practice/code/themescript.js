/**
 * При нажатии на кнопку 'theme' переключается тема.
 * Исходной темой является темная. При нажатии на кнопку, тема меняется на светлую.
 * currentTheme - константа, обозначающая текущую тему.
 */

document.getElementById('theme').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
});