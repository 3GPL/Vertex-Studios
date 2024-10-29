// JavaScript to toggle the Dynamic Island into a search bar
function toggleSearchBar() {
    const dynamicIsland = document.querySelector('.dynamic-island');
    const searchInput = document.querySelector('.search-input');
    
    dynamicIsland.classList.toggle('expanded');
    
    // Focus on the search input when expanded
    if (dynamicIsland.classList.contains('expanded')) {
        searchInput.focus();
    } else {
        searchInput.value = ""; // Clear search input when collapsing
    }
}
