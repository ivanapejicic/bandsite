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

// function that add/posts object/comment
async function addComment(comment) {
    try {
        const comments = await backendComments.postComment(comment);

    } catch {
        alert('cannot add your comment');
    }
}

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
    addComment(commentObject);
    commentsCont.innerText = '';
    console.log(commentsCont);

    // for (let i = comments.length - 1; i > -1; i--) {
    //     displayComment(comments[i]);
    // }
    displayComments();
    form.nameInput.value = '';
    form.textInput.value = '';
}

form.addEventListener("submit", submitHandler);

