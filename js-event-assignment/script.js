// Button click event
const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', () => {
    clickButton.textContent = "Clicked!";
    clickButton.style.backgroundColor = "lightgreen";
});

// Hover effect
const hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.style.color = "blue";
});
hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.style.color = "black";
});

// Keypress detection
const keypressInput = document.getElementById('keypressInput');
keypressInput.addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Double-click or long press
const doubleClickArea = document.getElementById('doubleClickArea');
doubleClickArea.addEventListener('dblclick', () => {
    doubleClickArea.style.backgroundColor = "yellow";
    doubleClickArea.textContent = "Double-clicked!";
});

// Long press detection
let pressTimer;
doubleClickArea.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        doubleClickArea.style.backgroundColor = "red";
        doubleClickArea.textContent = "Long Pressed!";
    }, 800);
});
doubleClickArea.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});

// Image gallery
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const nextImageButton = document.getElementById('nextImage');

nextImageButton.addEventListener('click', () => {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
});

// Tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(`tabContent${tabId}`).style.display = 'block';
    });
});
