// Types
import {Brick} from './sprites/Brick';
import {Ball} from './sprites/Ball';
import {Paddle} from './sprites/Paddle';
import { CanvasView } from './view/CanvasView';

export class Collison {
    checkBallCollison(ball : Ball, paddle : Paddle, view : CanvasView) : void {
        // 1. check ball collison with paddle
        if (
            ball.pos.x + ball.width > paddle.pos.x &&
            ball.pos.x < paddle.pos.x + paddle.width &&
            ball.pos.y + ball.height === paddle.pos.y  // hit the corner
        ) {
            ball.changeYDirection();   
        }
        // 2. check ball collison with walls
        // ball movement X constraintes
        if ( ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
            ball.changeXDirection();
        }
    }
}