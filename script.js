function toggleTooltip() {
    var tooltip = document.querySelector('.tooltip');
    tooltip.classList.toggle('active');
    
    var trigger = document.querySelector('.trigger');
    if (trigger.textContent === '+') {
        trigger.textContent = '×'; // Replace plus with cross
    } else {
        trigger.textContent = '+'; // Replace cross with plus
    }
}