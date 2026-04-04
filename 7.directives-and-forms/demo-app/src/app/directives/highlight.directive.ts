import { Directive, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighLight]',
    standalone: true,
})
export class HighLightDirective implements OnInit{

    ngOnInit(): void {
        console.log('Directive is loaded!');
        
    }
}