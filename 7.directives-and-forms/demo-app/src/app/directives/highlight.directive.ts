import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from "@angular/core";

type MyVoid = () => void;

@Directive({
    selector: '[appHighLight]',
    standalone: true,
})
export class HighLightDirective implements OnInit, OnDestroy {
    unsubEventArray: (() => void)[] = [];
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        console.log('Directive is loaded!');
        console.log(this.elRef.nativeElement); // = document.getElementById('para');

        // ! Important: Bad practice
        // ! this.elRef.nativeElement.style.background = 'red';

        // Good Practice
        //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');

        const mouseEnterEvent = this.renderer.listen(
            this.elRef.nativeElement,
            'mouseenter',
            this.mouseEnterHandler.bind(this)
        );

        const mouseLeaveEvent = this.renderer.listen(
            this.elRef.nativeElement, //element
            'mouseleave',  //event
            this.mouseLeaveHandler.bind(this) //function
        );

        this.unsubEventArray.push(mouseEnterEvent);
        this.unsubEventArray.push(mouseLeaveEvent);
    }
    mouseEnterHandler() {
        // console.log('mouse enter!');
        // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');
        this.renderer.addClass(this.elRef.nativeElement, 'highlight'); //get class
    }

    mouseLeaveHandler() {
        // console.log('mouse left!');
        // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial');
        this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    }

    ngOnDestroy(): void {
        console.log('On destroy Invoked!');
        console.log(this.unsubEventArray);

        this.unsubEventArray.forEach(eventFn => {
            //console.log(eventFn);
            eventFn();
        })
    }

}