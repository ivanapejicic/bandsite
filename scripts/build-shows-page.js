const concertsContainer = document.querySelector(".concerts__content");
const showsHeader = document.querySelector(".concerts__header");
const api_key = "11631f94-ded6-432e-9403-f17d7e61c05a";
const backendShows = new BandSiteApi(api_key);

// function that converts timestamp to a date for shows
function convertTimestampShows(ts){
    const date = (new Date(ts)).toDateString();
    return date;
}
// function that will help create a container for each show and reduce repeating 
function createMyElement(elClass, content) {
    const element = document.createElement("div");
    element.classList.add('concerts__content-container__' + elClass);
    element.textContent = content;
    return element;
}

function displayShow(showObject){
    const concertDiv = document.createElement("div");
    concertDiv.classList.add("concerts__content-container");

    concertDiv.appendChild(createMyElement("subtitle", "DATE"));
    concertDiv.appendChild(createMyElement("date", convertTimestampShows(showObject.date)));
    concertDiv.appendChild(createMyElement("subtitle", "VENUE"));
    concertDiv.appendChild(createMyElement("venue", showObject.place));
    concertDiv.appendChild(createMyElement("subtitle", "LOCATION"));
    concertDiv.appendChild(createMyElement("location", showObject.location));

    const button = document.createElement("button");
    button.classList.add("concerts__content-container__button", "labels-buttons");
    button.textContent = "BUY TICKETS";

    concertDiv.appendChild(button);

    concertsContainer.appendChild(concertDiv);
};

async function displayShows() {
    try {
        const shows = await backendShows.getShows();
        console.log(shows);
        for (const show of shows) {
            displayShow(show);
        }
        
    } catch {
        alert('cannot get data from API');
    }
}
displayShows();

// function that will add header for Shows for tablet/desktop view
function addShowsHeader() {
    const titleContainer = document.createElement("div");
    titleContainer.className = ("concerts__header-shows");

    const date = document.createElement("div");
    date.classList.add("concerts__header-shows__subtitle", "subtitle-tablet");
    date.textContent = "DATE";
    titleContainer.appendChild(date);

    const venue = document.createElement("div");
    venue.classList.add("concerts__header-shows__subtitle", "subtitle-tablet");
    venue.textContent = "VENUE";
    titleContainer.appendChild(venue);

    const location = document.createElement("div");
    location.classList.add("concerts__header-shows__subtitle", "subtitle-tablet");
    location.textContent = "LOCATION";
    titleContainer.appendChild(location);

    showsHeader.appendChild(titleContainer);

};

const shows = document.querySelectorAll('.concerts__content-container');

//function that will make a row "selected" until another row is clicked
shows.forEach((show) => {
    show.addEventListener('click', () => {
        show.classList.add('active');
        shows.forEach((differentShow) => {
            if (differentShow !== show) {
                differentShow.classList.remove('active');
            }
        });
    });
});

addShowsHeader();