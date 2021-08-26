// Random Generator of ninja names
// Everytime runs, randomize output
// Combine components to display final message.

const NINJA_NAMES_FRAGMENTS = {
    A: 'ka',
    B: 'zu',
    C: 'mi',
    D: 'te',
    E: 'ku',
    F: 'lu',
    G: 'ji',
    H: 'ri',
    I: 'ki',
    J: 'zu',
    K: 'me',
    L: 'ta',
    M: 'rin',
    N: 'to',
    O: 'mo',
    P: 'no',
    Q: 'ke',
    R: 'shi',
    S: 'ari',
    T: 'chi',
    U: 'do',
    V: 'ru',
    W: 'mei',
    X: 'na',
    Y: 'fu',
    Z: 'zi'
};

function randomKey() {
    // 65 = A, 90 = Z
    let random = Math.floor(Math.random() * 26 + 65); // Returns a random key between 'A' & 'Z'.
    return String.fromCharCode(random);
};

// Thanks to a person from the forum I changed this:
function randomizeNinjaName() {
    let random = '';

    for (let i = 1; i <= 3; i++) {
        random += NINJA_NAMES_FRAGMENTS[randomKey()];
    }

    return random;
}

// Of this:
//
// function randomizeNinjaName() {
//     let random = NINJA_NAMES_FRAGMENTS[randomKey()];
//     let random_2 = NINJA_NAMES_FRAGMENTS[randomKey()];
//     let random_3 = NINJA_NAMES_FRAGMENTS[randomKey()];

//     return `${random}${random_2}${random_3}`;
// };


// DOM manage
const body = document.getElementById('body');
const display = document.getElementById('ninja-name');
const generate = document.getElementById('new-ninja-name');

display.innerHTML = randomizeNinjaName();

generate.addEventListener('click', () => {
    display.innerHTML = randomizeNinjaName();
});

// Change Background and Text color every touch
let cls_bg = 'bg-color-1';
let cls_txt = 'txt-color-1';

function change() {
    let reg = /\d/;
    let temp = 0;

    for (let el of cls_bg) {
        if (reg.test(el)) {
            let tmp = parseInt(el);
            if (tmp < 4) {
                temp = tmp + 1;
            } else {
                temp = 1;
            }
        }
    }
  
    cls_bg = 'bg-color-' + temp;
    cls_txt = 'txt-color-' + temp;
};

generate.addEventListener('click', () => {
    change();
    body.setAttribute('class', cls_bg);
    generate.setAttribute('class', cls_bg);
    display.setAttribute('class', cls_txt);
});