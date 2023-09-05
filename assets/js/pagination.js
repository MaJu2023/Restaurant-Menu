
let filteredResults;
const prevPageButton = document.querySelector("#anterior");
const nextPageButton = document.querySelector("#siguiente");
const btnPagination =  document.querySelector(".btn-pagination");

let resultsPerPage = 4;
let currentPage = 1;


function updatePaginationButtons() {
    
    if (filteredResults.length > resultsPerPage) {
        btnPagination.classList.add("show");
        prevPageButton.style.display = currentPage > 1 ? "block" : "none";
        nextPageButton.style.display = currentPage < Math.ceil(filteredResults.length / resultsPerPage) ? "block" : "none";
    } else {
        btnPagination.classList.add("show");
        btnPagination.style.display = "none";
        prevPageButton.classList.remove("show");
    }
}

function displayResultsForPage() {

    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const resultsToShow = filteredResults.slice(startIndex, endIndex);
    printResults(resultsToShow);
    updatePaginationButtons();
}

prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayResultsForPage(currentPage);
    }
});

nextPageButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(filteredResults.length / resultsPerPage)) {
        currentPage++;
        displayResultsForPage(currentPage);
    }
});

function pagination(filteredData){
    filteredResults = filteredData;
    displayResultsForPage();
}



