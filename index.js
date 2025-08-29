// Connection checking
console.log('JavaScript File Connected');

// Heart count function for increasing heart count
const heartButtons = document.getElementsByClassName('heart-button');
const heartCounts = document.getElementById('heart-count');
for (let btn of heartButtons) {
    btn.addEventListener('click', function () {
        console.log('Heart button clicked');
        const count = parseInt(heartCounts.innerText);
        heartCounts.innerText = count + 1;
    });
}

// Call buttons functionality for calling & adding history list items
const callButtons = document.getElementsByClassName('call-button');
const coinAmount = document.getElementById('coin-amount');
const historyList = document.getElementById('history-item-list');
for (let btn of callButtons) {
    btn.addEventListener('click', function () {
        let coins = parseInt(coinAmount.innerText);
        if (coins >= 20) {
            const card = btn.closest('.card');
            const serviceName = card.querySelector('h2').innerText;
            const serviceNumber = card.querySelectorAll('h2')[1].innerText;

            // Used chatGPT for how to get current time
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            let ampm;
            if (hours >= 12) {
                ampm = 'PM';
            } else {
                ampm = 'AM';
            }
            if (hours === 0) {
                hours = 12;
            } else if (hours > 12) {
                hours = hours - 12;
            }
            const timeStr = `${hours}:${minutes}:${seconds}`;

            const historyItem = document.createElement('div');
            historyItem.className = "history-item flex justify-between items-center bg-gray-100 p-2 m-2 rounded-2xl";
            historyItem.innerHTML = `
                <div>
                    <h3 class="service-name font-semibold">${serviceName}</h3>
                    <p class="service-name text-gray-600">${serviceNumber}</p>
                </div>
                <div>
                    <p class=""><span class="time">${timeStr}</span> <span class="am-pm">${ampm}</span></p>
                </div>
            `;
            historyList.prepend(historyItem);

            alert(`Calling ${serviceName} at ${serviceNumber}...`);
            coinAmount.innerText = coins - 20;
        } 
        else {
            alert('Not enough coins to make a call!');
        }
    });
}

// Clear Button push for clearing history
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
    historyList.innerHTML = '';
});

// Copy buttons functionality for copying service number
const copyButtons = document.getElementsByClassName('copy-button');
const copyCount = document.getElementById('copy-count');
for (let btn of copyButtons) {
    btn.addEventListener('click', function () {
        const card = btn.closest('.card');
        const serviceNumber = card.querySelectorAll('h2')[1].innerText;
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                let count = parseInt(copyCount.innerText) || 0;
                copyCount.innerText = count + 1;
                alert(`Copied: ${serviceNumber}`);
            })
            .catch(() => {
                alert('Failed to copy!');
            });
    });
}


