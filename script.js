function plotGraph() {
    const inputValue = document.getElementById("inputValue").value;
    const maxValue = document.getElementById("maxValue").value;

    if (inputValue > maxValue) {
        alert("Input value cannot be greater than max value");
        return;
    }

    const percentage = (inputValue / maxValue) * 100;

    const bar = document.querySelector(".bar");
    const value = document.querySelector(".value");

    bar.style.width = percentage + "%";
    value.innerText = percentage.toFixed(2) + "%";
}

// ****************
function calculatePercentage() {
    var inputValue = document.getElementById("inputValue").value;
    var percentage = (inputValue / 100) * 100;

    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.transform = `rotate(${percentage * 1.8}deg)`;

    var progressText = document.querySelector(".progress-text");
    progressText.textContent = `${percentage}%`;

    var graphBar = document.querySelector(".graph-bar");
    graphBar.style.width = `${percentage}%`;
}
