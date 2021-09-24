const usersList = [{
        "name": "User3",
        "photo": "assets/user_3.png"
    },
    {
        "name": "User2",
        "photo": "assets/user_2.png"
    },
    {
        "name": "User1",
        "photo": "assets/user_1.png"
    }
];

const messageImagesList = [{
        "name": "Image3",
        "photo": "assets/image_1.png"
    },
    {
        "name": "Image2",
        "photo": "assets/image_2.png"
    },
    {
        "name": "Image1",
        "photo": "assets/image_3.png"
    },
    {
        "name": "Image4",
        "photo": "assets/image_4.png"
    }
];

const activeUser = {
    "name": "Jane",
    "status": "Owner",
    "complited": 372,
    "open": 11,
    "photo": "assets/user_active.png",
    "notifications": 3
};

const linksList = document.querySelectorAll('.links');

//Loads active user info
document.getElementById('userPhoto').src = activeUser.photo;
document.getElementById('userName').textContent = activeUser.name;
document.getElementById('userStatus').textContent = activeUser.status;
document.getElementById('complitedCount').textContent = activeUser.complited;
document.getElementById('openCount').textContent = activeUser.open;
document.getElementById('notificationCount').textContent = activeUser.notifications;

//Events
linksList.forEach(function (item) {
    item.addEventListener('click', setActileLink); //for links
});

//Adds users icons
setImages(usersList, 'usersIcon', document.getElementById('titleBanner'), false, true);

//Adds messages image
setImages(messageImagesList, 'outpostImages', document.querySelector('.messageOutpostImages'), true, false);

function setActileLink(event) {
    linksList.forEach(function (item) {
        item.classList.remove('linkActive');
        item.classList.add('linkPassive');
    });
    event.target.classList.remove('linkPassive');
    event.target.classList.add('linkActive');
}

function setMenuContentVisible() {
    document.querySelector('.menuContent').classList.toggle('visibled')
}

//Adds images in content
function setImages(element, className, parent, firstInsert, hint) {
    element.forEach(function (item) {
        let addImage = document.createElement('img');
        addImage.src = item.photo;
        addImage.alt = item.name;
        addImage.classList.add(className);
        if (hint) {
            addImage.title = item.name;
        }
        if (firstInsert) {
            parent.appendChild(addImage);
        } else {
            parent.insertBefore(addImage, parent.firstElementChild);
        }
    });
}