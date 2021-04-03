// Types
import {Brick} from './sprites/Brick';
import {Ball} from './sprites/Ball';
import {Paddle} from './sprites/Paddle';
import { CanvasView } from './view/CanvasView';

export class Collison {


    isCollidingBrick(ball : Ball, brick : Brick ) : boolean {
        if (
            ball.pos.x < brick.pos.x + brick.width &&
            ball.pos.x + ball.width > brick.pos.x &&
            ball.pos.y < brick.pos.y + brick.height &&
            ball.pos.y + ball.height > brick.pos.y 
        ) {
            return true;
        }
        return false;
    }

    // check ball collison with bricks
    isCollidingBricks(ball : Ball, bricks : Brick[]) : boolean {
        let colliding = false;

        bricks.forEach((brick,i) => {
            if ( this.isCollidingBrick(ball, brick)) {
                ball.changeYDirection();
                if(brick.energy === 1) {
                    bricks.splice(i,1);
                }else {
                    brick.energy -= 1;
                }
                colliding = true;
            }
        })
        return colliding;
    }

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
        // Ball movement Y constarintes
        if ( ball.pos.y <0 ) {
            ball.changeYDirection();
        }
    }
}