const bodyArea = document.body;
const square = bodyArea.querySelector('.square');
const squareMessage = square.querySelector('span');
const step = 10;
function hideMessage () { 
    squareMessage.className = 'hidden';
};

function squareActionsHandler (event) {
    console.log(event);
    const areaSizes = {
        bodyWidth: bodyArea.clientWidth,
        bodyHeight: bodyArea.clientHeight,
        squareHalfWidth:square.clientWidth / 2,
        squareHalfHeight: square.clientHeight / 2,
    }

    switch (event.code) {
        case 'ArrowUp':
        arrowUpAction(areaSizes);
        break;
        case 'ArrowDown':
        arrowDownAction(areaSizes);
        break;
        case 'ArrowLeft':
        arrowLeftAction(areaSizes);
        break;
        case 'ArrowRight':
        arrowRightAction(areaSizes);
        break;
        case 'Space':
        spaceAction(areaSizes);
        break;
        case 'ControlRight':
        case 'ControlLeft':
        controlAction(areaSizes);
        break;
    }
    document.addEventListener('keydown', squareActionsHandler);
}

function transitionHandler() {
    square.removeEventListener('transitionend', transitionHandler);
    document.addEventListener('keydown', squareActionsHandler);
    square.style.transition = null;
}

function arrowUpAction (sizes) {
    const nextPosition = square.offsetTop - step;
    if (nextPosition <= sizes.squareHalfHeight) {
        square.style.top = (sizes.squareHalfHeight + 2 * step) + 'px';
        squareMessage.className = 'visible';
        setTimeout(hideMessage, 2000);
    } else {
        square.style.top = nextPosition +'px';
        
    }
}

function arrowDownAction (sizes) {
    const nextPosition = square.offsetTop + step;
    if (nextPosition >= sizes.bodyHeight - sizes.squareHalfHeight) {
        square.style.top = (sizes.bodyHeight -sizes.squareHalfHeight - 2 * step) + 'px';
        squareMessage.className = 'visible';
        setTimeout(hideMessage, 2000);
    } else {
        square.style.top = nextPosition +'px';
    }
}

function arrowLeftAction (sizes) {
    const nextPosition = square.offsetLeft - step;
    if (nextPosition < sizes.squareHalfWidth) {
        square.style.left = (sizes.squareHalfWidth + 2 * step) + 'px';
        squareMessage.className = 'visible';
        setTimeout(hideMessage, 2000);
    } else {
        square.style.left = nextPosition +'px';
    }
}

function arrowRightAction (sizes) {
    const nextPosition = square.offsetLeft + step;
    if (nextPosition >= (sizes.bodyWidth - sizes.squareHalfWidth)) {
        square.style.left = (sizes.bodyWidth - sizes.squareHalfWidth - 2 * step) + 'px';
        squareMessage.className = 'visible';
        setTimeout(hideMessage, 2000);
    } else {
        square.style.left = nextPosition +'px';
    }
}

function spaceAction (sizes) {
document.removeEventListener ('keydown', squareActionsHandler);
    square.style.transition = 'top 1s ease-out';
    square.style.top = square.offsetTop - 10 + 'px';

    setTimeout(() => {
        square.addEventListener('transitionend', transitionHandler);
        square.style.transition = 'top 1s ease-in';
        square.style.top = square.offsetTop + 10 + 'px';
    }, 1000)
}

function controlAction () {
    square.style.transition = 'height 1s, width 1s';
    const defaultHeight = square.clientHeight;
    const defaultWidth = square.clientWidth;

    square.style.height = square.clientHeight * 0.6 + 'px';
    square.style.width = square.clientWidth * 1.25 + 'px';

    setTimeout(() => {
        square.addEventListener('transitionend', transitionHandler);
        square.style.transition = 'height 1s, width 1s';
        square.style.height = defaultHeight + 'px';
        square.style.width = defaultWidth + 'px';
    }, 1000)
}

document.addEventListener('keydown', squareActionsHandler);


















