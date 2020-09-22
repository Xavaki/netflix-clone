// grabs (from the DOM) all tab-items (tab icons) and puts them in a node list
const tabItems = document.querySelectorAll('.tab-item');
const tabContemItems = document.querySelectorAll('.tab-content-item');

// Select tab content item (takes in an event object)
function selectItem(e) {
    // Remove borders from previous tabs
    removeBorder();
    // Remove show class from other tabs
    removeShow();

    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class to grabbed item
    tabContentItem.classList.add('show');


}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContemItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
