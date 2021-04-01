import {CanvasView} from './view/CanvasView';
import {Ball} from './sprites/Ball';
import {Brick} from './sprites/Brick';
import {Paddle} from './sprites/Paddle';
// Images
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
// Level and Colors
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from './setup';
// Helpers
import {createBricks} from './helpers';

let gameOver = false;
let score = 0;

function setGameOver(view : CanvasView) {
    view.drawInfo('Game Over !')
    gameOver = false;
}

function setGameWin(view : CanvasView) {
    view.drawInfo('Game Won !');
    gameOver = false;
}

function gameLoop (
    view : CanvasView, 
    bricks: Brick[], 
    paddle : Paddle, 
    ball : Ball
    ) {

        view.clear();
        view.drawBricks(bricks);
        view.drawSprite(paddle);
        view.drawSprite(ball);

        // Move Ball
        ball.moveBall();

        // move paddle so it won't exit the playfield
        if (
            (paddle.isMoveingLeft && paddle.pos.x > 0) ||
            (paddle.isMoveingRight && paddle.pos.x < view.canvas.width - paddle.width)
        ) {
            paddle.movePaddle();
        }
        requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball))
}

function startGame ( view : CanvasView) {
    // Reset the display
    score = 0;
    view.drawInfo('');
    view.drawSocre(0);
    // Create all bricks
    const bricks = createBricks();
    // Create Paddle
    const paddle = new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        { 
            x : PADDLE_STARTX, 
            y : view.canvas.height - PADDLE_HEIGHT - 5
        },
        PADDLE_IMAGE
    );
    // Create a ball
    const ball = new Ball(
        BALL_SPEED,
        BALL_SIZE,
        { x : BALL_STARTX, y : BALL_STARTY},
        BALL_IMAGE
    );

    gameLoop(view, bricks, paddle, ball);
}

// Create a new view
const view = new CanvasView('#playField');
view.initStartButton(startGame);
