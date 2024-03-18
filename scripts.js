document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    startApp();
})

function startApp() {
    try {
        applyTheme();
    } catch (error) {
        console.warn("Error trying to apply the theme");
    }

    try {
        btnSwitchLoader();
    } catch (error) {
        console.warn("Error trying to load switch button script");
    }
}

function btnSwitchLoader() {
    const btnSwitch = document.querySelector('#switch')

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

function applyTheme() {
    const btnSwitch = document.querySelector('#switch');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

    console.log(currentTheme);

    if (currentTheme == 'dark') {
        document.body.classList.add(currentTheme);
        if (currentTheme == 'dark') {
            btnSwitch.classList.add('active');
        }
    }
}