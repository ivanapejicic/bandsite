const comments = [
    {
        name: 'Connor Walton',
        date: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: 'Emilie Beach',
        date: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: 'Miles Acosta',
        date: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

const commentsCont = document.querySelector(".join__content-comments");

function displayComment(comment) {
    const commentContainer = document.createElement("div");
    commentContainer.className = "comment";

    const avatar = document.createElement("div");
    avatar.className = 'comment__avatar';

    const obj = document.createElement("div");
    obj.className = 'comment__obj';

    const objTop = document.createElement("div");
    objTop.className = "comment__obj-top";
    const name = document.createElement("h3");
    name.className = "commen__obj-top__name subheader-comments";
    name.textContent = comment.name;
    objTop.appendChild(name);
    const date = document.createElement("p");
    date.className = "comment__obj-top__date";
    date.textContent = comment.date;
    objTop.appendChild(date);

    const objBottom = document.createElement("p");
    objBottom.className = "comment__obj-bottom body-copy";
    objBottom.textContent = comment.text;

    obj.appendChild(objTop);
    obj.appendChild(objBottom);

    commentContainer.appendChild(avatar);
    commentContainer.appendChild(obj);

    commentsCont.appendChild(commentContainer);

}
for (const comment of comments) {
    displayComment(comment);
}