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

let complitedCount = document.getElementById('complitedCount');
let openCount = document.getElementById('openCount');
let notificationCount = document.getElementById('notificationCount');
const linksList = document.querySelectorAll('.links');

//Loads active user info
document.getElementById('userPhoto').src = activeUser.photo;
document.getElementById('userName').textContent = activeUser.name;
document.getElementById('userStatus').textContent = activeUser.status;
complitedCount.textContent = activeUser.complited;
openCount.textContent = activeUser.open;
notificationCount.textContent = activeUser.notifications;

//Events
linksList.forEach(function (item) {
    item.addEventListener('click', setActileLink); //for links
});

complitedCount.addEventListener('click', setTasks); //for complited count click

//Adds users icons
setImages(usersList, ['usersIcon'], document.getElementById('titleBanner'), false, true, false);

// ========================================================
//                        Lesson 2
// 1.
// Checks open tasks.
//      openCount        - declared on row 43
function setTasks() {
    Number(openCount.textContent) > 0 ?
        isAboveZero() :
        alert('Sorry, there are no open tasks!');
}

// Modifies tasks data
//      openCount        - declared on row 43
//      complitedCount   - declared on row 42
function isAboveZero() {
    if (confirm('Are you sure you want to change the number of tasks?')) {
        Number(complitedCount.textContent++);
        openCount.textContent -= 1;
    }
}

// 2.
// Adds messages image
//      messageImagesList   - declared on row 15
//      setImages()         - on row 99
setImages(messageImagesList, ['outpostImages', 'pointerCursor'], document.querySelector('.messageOutpostImages'), true, false, true);

// Adds images in content
//      element          - array of images data
//      className        - class of images
//      parent           - parent for insert
//      firstInsert      - true: insert in start, else - in end
//      hint             - true: show hint of elemnt
//      getIndex         - true: get index of element in array
function setImages(element, className, parent, firstInsert, hint, getIndex) {
    element.forEach(function (item, key) {
        let addImage = document.createElement('img');
        addImage.src = item.photo;
        addImage.alt = item.name;
        className.forEach(function (item) {
            addImage.classList.add(item);
        })
        // For lesson 2.2
        // Add click event for images
        if (getIndex) {
            addImage.addEventListener('click', function () {
                notificationCount.textContent = key;
            })
        }
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
//========================================================

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