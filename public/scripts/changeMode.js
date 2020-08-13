(function () {
    const iconSelectMode = document.querySelector('i.change-mode');
    let button = document.querySelector('button');
    let wantDarkMode = true;

    iconSelectMode.addEventListener('click', changeMode);

    function changeMode() {
        if (wantDarkMode) {

            wantDarkMode = false;

            let inputs = getAllElements('input');
            let labels = getAllElements('label');
            let selects = getAllElements('select');

            isDarkMode(inputs, selects, labels, button);
        } else {

            wantDarkMode = true;

            let inputs = getAllElements('input');
            let labels = getAllElements('label');
            let selects = getAllElements('select');

            isLightMode(inputs, selects, labels, button);
        }
    };

    function getAllElements(element) {
        return document.querySelectorAll(element);
    };

    function isDarkMode(inputs, selects, labels, button) {

        document.body.style.background = "var(--color-background-dark)"
        iconSelectMode.classList.add('lightIcon');
        
        inputs.forEach((input) => {
            input.classList.remove('lightFields');
            input.classList.add('darkFields');
        });

        selects.forEach((select) => {
            select.classList.remove('lightFields');
            select.classList.add('darkFields');
        });

        labels.forEach((label) => {
            label.style.color = "white";
        });

        button.style.color = "white";
    };

    function isLightMode(inputs, selects, labels, button) {

        document.body.style.background = "var(--color-background-light)"
        iconSelectMode.classList.add('darkIcon');

        inputs.forEach((input) => {
            input.classList.remove('darkFields');
            input.classList.add('lightFields');
        });

        selects.forEach((select) => {
            select.classList.remove('darkFields');
            select.classList.add('lightFields');
        });

        labels.forEach((label) => {
            label.style.color = "black";
        });

        button.style.color = "black";
    };
})();