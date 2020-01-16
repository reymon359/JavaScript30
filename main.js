const PROJECTS = ["01 - JavaScript Drum Kit", "02 - JS and CSS Clock",
    "03 - CSS Variables", "04 - Array Cardio Day 1",
    "05 - Flex Panel Gallery", "06 - Type Ahead",
    "07 - Array Cardio Day 2", "08 - Fun with HTML5 Canvas",
    "09 - Dev Tools Domination", "10 - Hold Shift and Check Checkboxes",
    "11 - Custom Video Player", "12 - Key Sequence Detection",
    "13 - Slide in on Scroll", "14 - JavaScript References VS Copying",
    "15 - LocalStorage", "16 - Mouse Move Shadow",
    "17 - Sort Without Articles", "18 - Adding Up Times with Reduce",
    "19 - Webcam Fun", "20 - Speech Detection",
    "21 - Geolocation", "22 - Follow Along Link Highlighter",
    "23 - Speech Synthesis", "24 - Sticky Nav",
    "25 - Event Capture, Propagation, Bubbling and Once", "26 - Stripe Follow Along Nav",
    "27 - Click and Drag", "28 - Video Speed Controller",
    "29 - Countdown Timer", "30 - Whack A Mole",
];


window.onload = () => {
    console.log('hi0');

    loadProjects();
    loadSignature();
};

function loadProjects() {
    console.log('hi');
    let projects = shuffleArray(PROJECTS),
        projectsContainer = document.getElementById('projects'),
        html = '';

    projects.forEach((project) => {

        // Card header
        // If the browser is not chrome we disable the events
        if (!(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime))) html += `  <div class="card-wrap">`;
        else html += `  <div onmouseenter="cardMouseEnter(event)" onmousemove="cardMouseMove(event)" onmouseleave="cardMouseLeave(event)" class="card-wrap">`;

        html += `      <div class="card" >`;
        let backgroundImageUrl = `images/${project}.png`;
        html += `          <div class="card-bg" style="background-image: url('${backgroundImageUrl}');"></div>`;
        html += `          <div class="card-info">`;
        html += `              <h1>${project}</h1>`;

        // Card buttons
        html += `              <div class="card-info-buttons">`;
        // If it is a project. Buttons = more info and the first button
     html += `<a href="${project}/index.html" target="_blank" class="card-info-button">See it</a>`;
        html += `              </div>`;
        html += `          </div>`;
        html += `      </div>`;
        html += `  </div>`;
    });
    projectsContainer.innerHTML = html;
}
let project_cardWrap, project_card, project_cardBg, project_cardBgImg;
let prCard_width, prCard_height, prCard_mouseX, prCard_mouseY = 0;
let prCard_mouseLeaveDelay = null;

function cardMouseEnter(e) {
    project_cardWrap = e.target;
    project_card = project_cardWrap.children[0];
    project_cardBg = project_card.children[0];
    project_cardBgImg = project_cardBg.style.backgroundImage;
    // clearTimeout(prCard_mouseLeaveDelay);
}

function cardMouseMove(e) {
    prCard_width = project_cardWrap.offsetWidth;
    prCard_height = project_cardWrap.offsetHeight;

    prCard_mouseX = e.pageX - project_cardWrap.offsetLeft - prCard_width / 2;
    prCard_mouseY = e.pageY - project_cardWrap.offsetTop - prCard_height / 2;
    setStyles();
}

function cardMouseLeave(e) {

    prCard_mouseLeaveDelay = setTimeout(() => {
        e.target.children[0].setAttribute("style", 'transform: rotateY(0deg) rotateX(0deg);');
        e.target.children[0].children[0].setAttribute("style", `background-image: ${e.target.children[0].children[0].style.backgroundImage};transform: translateX(0px) translateY(0px);`);
    }, 700);
}

function setStyles() {
    rotX = (prCard_mouseX / prCard_width) * 30;
    rotY = (prCard_mouseY / prCard_height) * -30;
    let styleCard = `transform: rotateY(${rotX}deg) rotateX(${rotY}deg);`;
    project_card.setAttribute("style", styleCard);

    traX = (prCard_mouseX / prCard_width) * -40;
    traY = (prCard_mouseY / prCard_height) * -40;
    let styleCardBg = `background-image: ${project_cardBgImg};transform: translateX(${traX}px) translateY(${traY}px);`;
    project_cardBg.setAttribute("style", styleCardBg);
}

function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function loadSignature() {
    const FRUITS = ['🥝', '🥥', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓'];
    let socialNode = document.createElement('div');
    socialNode.setAttribute('class', 'social');
    html = ` 
    <div class="initial cube">${FRUITS[Math.floor(Math.random() * FRUITS.length)]}</div>
        <div class="social-buttons">
            <div class="cube website">
                <a href="https://ramonmorcillo.com" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
                </a>
            </div>

            <div class="cube linkedin">
                <a href="https://www.linkedin.com/in/ramon-morcillo" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                </a>
            </div>
            <div class="cube github">
                <a href="https://github.com/reymon359" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></i>
                </a>
            </div>
            <div class="cube codepen">
                <a href="https://codepen.io/reymon359" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"/></svg>
                </a>
            </div>
        </div>
    </div>`;
    socialNode.innerHTML = html;
    document.querySelector('body').appendChild(socialNode);


    let styleNode = document.createElement('style');
    html = `    
    .social {
        position: fixed;
        bottom: 35px;
        left: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 17082019;
    }
    
    .social .cube {
        width: 40px;
        height: 40px;
        background: #272727;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        font-size: 20px;
        box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, .7);
        color: white;
    }
    
    .social .cube a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    .social .initial {
        transition: width 0.2s linear 0.12s, height 0.2s linear 0.12s, transform 0.2s linear 0.12s, opacity 0s linear 0.12s;
    }
    
    .social .social-buttons {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 120px;
        height: 120px;
        border-radius: 8px;
        transform: rotate(45deg);
        opacity: 0;
        transition: opacity 0s linear 0.12s;
    }
    
    .social .social-buttons .cube {
        position: absolute;
    }
    
    .social .social-buttons .cube:hover {
        width: 80px;
        height: 80px;
    }
    
    .social .social-buttons .cube svg {
        opacity: 0;
        transition: opacity 0.1s linear 0.2s;
        width: 50%;
        transform: rotate(-45deg);
        fill: white;
    }
    
    .social .social-buttons .cube:nth-child(1) {
        left: 1px;
        top: 1px;
        transition: left 0.12s linear 0.2s, top 0.12s linear 0.2s;
    }
    
    .social .social-buttons .cube:nth-child(2) {
        right: 1px;
        top: 1px;
        transition: right 0.12s linear 0.2s, top 0.12s linear 0.2s;
    }
    
    .social .social-buttons .cube:nth-child(3) {
        left: 1px;
        bottom: 1px;
        transition: left 0.12s linear 0.2s, bottom 0.12s linear 0.2s;
    }
    
    .social .social-buttons .cube:nth-child(4) {
        right: 1px;
        bottom: 1px;
        transition: right 0.12s linear 0.2s, bottom 0.12s linear 0.2s;
    }
    
    .social:hover .initial {
        width: 120px;
        height: 120px;
        transform: rotate(45deg);
        font-size: 0px;
        opacity: 0;
        transition: width 0.2s, height 0.2s, transform 0.2s, font-size 0.2s, opacity 0.1s linear 0.2s;
    }
    
    .social:hover .social-buttons {
        opacity: 1;
        transition: opacity 0s linear 0.2s;
    }
    
    .social:hover .social-buttons .cube:nth-child(1) {
        left: -4px;
        top: -4px;
        transition: left 0.12s linear 0.2s, top 0.12s linear 0.2s, height .25s ease-in, width .25s ease-in;
    }
    
    .social:hover .social-buttons .cube:nth-child(2) {
        right: -4px;
        top: -4px;
        transition: right 0.12s linear 0.2s, top 0.12s linear 0.2s, height .25s ease-in, width .25s ease-in;
    }
    
    .social:hover .social-buttons .cube:nth-child(3) {
        left: -4px;
        bottom: -4px;
        transition: left 0.12s linear 0.2s, bottom 0.12s linear 0.2s, height .25s ease-in, width .25s ease-in;
    }
    
    .social:hover .social-buttons .cube:nth-child(4) {
        right: -4px;
        bottom: -4px;
        transition: right 0.12s linear 0.2s, bottom 0.12s linear 0.2s, height .25s ease-in, width .25s ease-in;
    }
    
    .social:hover .social-buttons .cube svg {
        opacity: 1;
        transition: opacity 0.2s linear 0.2s;
    }`;
    styleNode.innerHTML = html;
    document.querySelector('body').appendChild(styleNode);


}
