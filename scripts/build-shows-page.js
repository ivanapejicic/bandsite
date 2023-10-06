let concerts = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane ",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA "
    },
    {
        date: "Fri Oct 15 2021 ",
        venue: "View Lounge",
        location: "San Francisco, CA "
    },
    {
        date: "Sat Nov 06 2021 ",
        venue: "Hyatt Agency",
        location: "San Francisco, CA "
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center ",
        location: "San Francisco, CA "
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA "
    }

];

const concertsContainer = document.querySelector(".concerts__content");
const showsHeader = document.querySelector(".concerts__header");

// function that will help create a container for each show and reduce repeating 
function createMyElement(elClass, content){
    const element = document.createElement("div");
    element.className = 'concerts__content-container__' + elClass;
    element.textContent = content;
    return element;
}

for (let i=0; i<concerts.length; i++){
    const concertDiv = document.createElement("div");
    concertDiv.className = "concerts__content-container";

    concertDiv.appendChild(createMyElement("subtitle", "DATE"));
    concertDiv.appendChild(createMyElement("date", concerts[i].date));
    concertDiv.appendChild(createMyElement("subtitle", "VENUE"));
    concertDiv.appendChild(createMyElement("venue", concerts[i].venue));
    concertDiv.appendChild(createMyElement("subtitle", "LOCATION"));
    concertDiv.appendChild(createMyElement("location", concerts[i].location));

    const button = document.createElement("button");
    button.className = 'concerts__content-container__button labels-buttons';
    button.textContent = "BUY TICKETS";

    concertDiv.appendChild(button);

    concertsContainer.appendChild(concertDiv);
};

// function that will add header for Shows for tablet/desktop view
function addShowsHeader(){
    const titleContainer = document.createElement("div");
    titleContainer.className = ("concerts__header-shows");

    const date = document.createElement("div");
    date.className = "concerts__header-shows__subtitle subtitle-tablet";
    date.textContent = "DATE";
    titleContainer.appendChild(date);

    const venue = document.createElement("div");
    venue.className = "concerts__header-shows__subtitle subtitle-tablet";
    venue.textContent = "VENUE";
    titleContainer.appendChild(venue);

    const location = document.createElement("div");
    location.className = "concerts__header-shows__subtitle subtitle-tablet";
    location.textContent = "LOCATION";
    titleContainer.appendChild(location);
    
    showsHeader.appendChild(titleContainer);

};

addShowsHeader();