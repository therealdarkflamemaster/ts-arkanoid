// Types
import {Brick} from '../sprites/Brick';
import {Ball} from '../sprites/Ball';
import {Paddle} from '../sprites/Paddle';

export class CanvasView {

    private canvas : HTMLCanvasElement;
    private context : OffscreenCanvasRenderingContext2D | null;
    private socreDisplay : HTMLObjectElement | null;
    private start : HTMLObjectElement | null;
    private info : HTMLObjectElement | null;

    constructor(canvasName : string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        
    } 
}