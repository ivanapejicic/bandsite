// const comments = [
//     {
//         name: 'Miles Acosta',
//         date: "12/20/2020",
//         text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     },
//     {
//         name: 'Emilie Beach',
//         date: "01/09/2021",
//         text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {
//         name: 'Connor Walton',
//         date: "02/17/2021",
//         text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
//     }
// ];

const commentsCont = document.querySelector(".join__content-comments");
const form = document.querySelector("form");
const api_key = "11631f94-ded6-432e-9403-f17d7e61c05a";
const backendComments = new BandSiteApi(api_key);

function displayComment(comment) {
    const commentContainer = document.createElement("div");
    commentContainer.className = "comment";

    const avatar = document.createElement("div");
    avatar.classList.add('comment__avatar');

    const obj = document.createElement("div");
    obj.className = 'comment__obj';

    const objTop = document.createElement("div");
    objTop.classList.add("comment__obj-top");
    const name = document.createElement("h3");
    name.classList.add("comment__obj-top__name", "subheader-comments");
    name.textContent = comment.name;
    objTop.appendChild(name);
    const date = document.createElement("p");
    const timestamp = comment.timestamp;
    const formattedDate = (new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })).format(new Date(timestamp));
    date.classList.add("comment__obj-top__date");
    date.textContent = formattedDate;
    objTop.appendChild(date);

    const objBottom = document.createElement("p");
    objBottom.classList.add("comment__obj-bottom", "body-copy");
    objBottom.textContent = comment.comment;

    obj.appendChild(objTop);
    obj.appendChild(objBottom);

    commentContainer.appendChild(avatar);
    commentContainer.appendChild(obj);

    commentsCont.appendChild(commentContainer);

}

// displaying default comments
async function displayComments() {
    try {
        const comments = await backendComments.getComments();
        console.log(comments);
        // commentsCont.innerText = '';
        for (const comment of comments) {
            displayComment(comment);
        }

    } catch {
        alert('cannot get data from API');
    }
}
displayComments();

// handling form input
function submitHandler(event) {
    event.preventDefault();
    const nameElement = form.nameInput.value;
    const commentElement = form.textInput.value;
    const date = new Date(Date.now());
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formatDate = date.toLocaleDateString(undefined, options);

    if (nameElement === '') {
        alert("Please provide your name :-)");
        return;
    }
    if (commentElement === '') {
        alert("Don't you want to leave us a comment? :)");
        return;
    }
    let commentObject = {
        name: nameElement,
        date: formatDate,
        text: commentElement
    };

    comments.push(commentObject);
    commentsCont.innerText = '';

    for (let i = comments.length - 1; i > -1; i--) {
        displayComment(comments[i]);
    }
    form.nameInput.value = '';
    form.textInput.value = '';
}

form.addEventListener("submit", submitHandler);

