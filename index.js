// Connection Check
console.log('JavaScript File Connected');

// Heart Count Increase Function
const heartButtons = document.getElementsByClassName('heart-button');
const heartCounts = document.getElementById('heart-count');

for (btn of heartButtons) {
    btn.addEventListener('click', function () {
        console.log('Heart button clicked');
        const count = parseInt(heartCounts.innerText);
        heartCounts.innerText = count + 1;
    });
}


