'use strict';
const chat = document.querySelector('.chat');

const chatTitle = chat.querySelector('.chat-title'),
    user = chatTitle.querySelector('h1'),
    chatStatus = chatTitle.querySelector('.chat-status');

const messagesTemplates = chat.querySelector('.messages-templates'),
    messageLoading = messagesTemplates.querySelector('.loading'),
    messageReceived = messageLoading.nextElementSibling,
    messageSent = messagesTemplates.querySelector('.message-personal'),
    messageStatus = messagesTemplates.querySelector('.message-status');

const messagesContent = chat.querySelector('.messages-content'),
    messageBox = chat.querySelector('.message-box'),
    messageInput = messageBox.querySelector('.message-input'),
    messageSubmitBtn = messageBox.querySelector('button.message-submit');

const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');


connection.addEventListener('open', () => {
    chatStatus.textContent = chatStatus.dataset.online;
    messageSubmitBtn.disabled = false;
    messagesContent.appendChild(clone(messageStatus, `Пользователь появился в сети`));
});

connection.addEventListener('message', event => {

    if (event.data === '...') {
        messagesContent.appendChild(clone(messageLoading));
    } else {
        const loading = messagesContent.querySelector('.loading');
        if (loading) {
            loading.parentNode.removeChild(loading);
        }
        messagesContent.appendChild(clone(messageReceived, event.data, showTime()));
        messagesContent.style.top = (messagesContent.clientHeight - messagesContent.scrollHeight) + 'px';
    }
    if (event.data === 'Удачи') {
        connection.close();
    }
});

connection.addEventListener('close', () => {
    chatStatus.textContent = chatStatus.dataset.offline;
    messageSubmitBtn.disabled = true;
    messagesContent.appendChild(clone(messageStatus, `Пользователь не в сети`));
});

messageSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (messageInput.value !== '') {
        messagesContent.appendChild(clone(messageSent, messageInput.value, showTime()));
        messagesContent.style.top = (messagesContent.clientHeight - messagesContent.scrollHeight) + 'px';
        connection.send(messageInput.value);
        messageInput.value = '';
    }
});

function clone(node, text = '', time = '') {
    const newNode = node.cloneNode(true);
    if (text) {
        const nodeText = newNode.querySelector('span');
        nodeText.textContent = text;
    }
    if (time) {
        const nodeTime = newNode.querySelector('.timestamp');
        nodeTime.textContent = time;
    }
    return newNode;
}

function showTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'});
}
