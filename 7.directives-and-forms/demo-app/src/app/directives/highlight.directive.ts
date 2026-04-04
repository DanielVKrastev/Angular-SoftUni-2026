import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appHighLight]',
    standalone: true,
})
export class HighLightDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        console.log('Directive is loaded!');
        console.log(this.elRef.nativeElement); // = document.getElementById('para');

        // ! Important: Bad practice
        // ! this.elRef.nativeElement.style.background = 'red';

        // Good Practice
        //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');

        this.renderer.listen(
            this.elRef.nativeElement,
            'mouseenter',
            this.mouseEnterHandler.bind(this)
        );

        this.renderer.listen(
            this.elRef.nativeElement, //element
            'mouseleave',  //event
            this.mouseLeaveHandler.bind(this) //function
        );
    }

    mouseEnterHandler() {
        console.log('mouse involked!');
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');
    }

    mouseLeaveHandler() {
        console.log('mouse involked!');
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial');
    }
}