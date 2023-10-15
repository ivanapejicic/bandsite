const commentsCont = document.querySelector(".join__content-comments");
const form = document.querySelector("form");
const api_key = "11631f94-ded6-432e-9403-f17d7e61c05a";
const backendComments = new BandSiteApi(api_key);

// function that converts timestamp to a date of format MM/DD/YYYY
function convertTimestamp(ts) {
    const formattedDate = (new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })).format(new Date(ts));
    return formattedDate;
}

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
    const formattedDate = convertTimestamp(timestamp);
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

async function displayComments() {
    try {
        const comments = await backendComments.getComments();
        for (const comment of comments) {
            displayComment(comment);
        }

    } catch {
        alert('cannot get data from API');
    }
}
displayComments();


// handling form input
async function submitHandler(event) {
    event.preventDefault();
    const nameElement = form.nameInput.value;
    const commentElement = form.textInput.value;
    const date = new Date(Date.now());
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formatDate = date.toLocaleDateString(undefined, options);

    if (nameElement === '' || commentElement === '') {
        alert("400. Bad request error.");
        return;
    }
    let commentObject  = {
        name: nameElement,
        comment: commentElement
    };
    await backendComments.postComment(commentObject);
    commentsCont.innerText = '';
    
    displayComments();
    form.nameInput.value = '';
    form.textInput.value = '';
}

form.addEventListener("submit", submitHandler);

