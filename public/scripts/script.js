(function () {
    const resultContainer = document.querySelector('.result-container');
    const form = document.querySelector('form');

    resultContainer.style.display = "none";

    form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
        event.preventDefault(); // cancelando o evento

        const sex = document.querySelector('#sex').value;
        const age = getInputNumberValue('age');
        const weight = getInputNumberValue('weight');
        const height = getInputNumberValue('height');
        const activityLevel = getInputNumberValue('activity_level');


        const basalEnergyExpenditure = getBasalEnergyExpenditure(sex, height, weight, age);
        const maintenanceKcals = Math.round(basalEnergyExpenditure * activityLevel);
        const loseWeightKcals = maintenanceKcals - 450;
        const gainWeightKcals = (maintenanceKcals + 450);

        const layout = `<h2>Aqui está o resultado:</h2>
        <div class="result-content">
            <ul>
                <li>
                    Seu metabolismo basal é de:
                    <strong>${basalEnergyExpenditure} calorias diárias.</strong>
                </li>

                <li>
                    Para manter o peso você precisa consumir em media
                    <strong>${maintenanceKcals} calorias.</strong>
                </li>

                <li>
                    Para perder peso você precisa consumir em média
                    <strong>${loseWeightKcals} calorias.</strong>
                </li>

                <li>
                    Para ganhar peso você precisa consumir em média
                    <strong>${gainWeightKcals} calorias.</strong>
                </li>
            </ul>`;

        resultContainer.innerHTML = layout;

        resultContainer.style.display = "block";
    };

    function getInputNumberValue(id) {
        return parseFloat(document.querySelector(`#${id}`).value);
    };

    function getBasalEnergyExpenditure(sex, height, weight, age) {
        let basalEnergyExpenditure = 0;

        if (sex == "male") {
            basalEnergyExpenditure = 66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age);
        } else {
            basalEnergyExpenditure = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
        }

        return Math.round(basalEnergyExpenditure);
    };
})();