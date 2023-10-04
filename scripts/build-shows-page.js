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

    // const titleRow = document.create("div");
    // titleRow.className = 'subtitles';
    // titleRow.textContent = ""

    concertDiv.appendChild(button);

    concertsContainer.appendChild(concertDiv);

};