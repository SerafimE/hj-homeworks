'use strict';

function createComment(comment) {
    const element = document.createElement('div');
    element.className = 'comment-wrap';
    const photo = document.createElement('div');
    photo.className = 'photo';
    photo.title = comment.author.name;
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.style.backgroundImage = `url(${comment.author.pic})`;
    const commentBlock = document.createElement('div');
    commentBlock.className = 'comment-block';
    const commentText = document.createElement('p');
    commentText.className = 'comment-text';
    commentText.innerText = comment.text.split('\\n').join('<br>');
    const bottomComment = document.createElement('div');
    bottomComment.className = 'bottom-comment';
    const commentDate = document.createElement('div');
    commentDate.className = 'comment-date';
    commentDate.textContent = new Date(comment.date).toLocaleString('ru-Ru');
    const commentAction = document.createElement('ul');
    commentAction.className = 'comment-actions';
    const complain = document.createElement('li');
    complain.className = 'complain';
    complain.innerText = 'Пожаловаться';
    const reply = document.createElement('li');
    reply.className = 'reply';
    reply.innerText = 'Ответить';

    element.appendChild(photo);
    photo.appendChild(avatar);
    element.appendChild(commentBlock);
    commentBlock.appendChild(commentText);
    commentBlock.appendChild(bottomComment);
    bottomComment.appendChild(commentDate);
    bottomComment.appendChild(commentAction);
    commentAction.appendChild(complain);
    commentAction.appendChild(reply);

    return element;
}

function showComments(list) {
    const fragment = document.createDocumentFragment();
    list.forEach(li => {
        fragment.appendChild(
            createComment(li),
        )
    });
    document.querySelector('.comments').appendChild(fragment);
}


fetch('https://neto-api.herokuapp.com/comments')
    .then(res => res.json())
    .then(showComments);
