import { Component, OnInit } from '@angular/core';
import { ErrorMsgService } from './error-msg.service';

@Component({
  selector: 'app-error-msg',
  imports: [],
  templateUrl: './error-msg.html',
  styleUrl: './error-msg.css',
})
export class ErrorMsgComponent implements OnInit{
  errorMsg = '';
  constructor(private errorMsgService: ErrorMsgService) {}

  ngOnInit(): void {
    this.errorMsgService.apiError$.subscribe((err: any) => {
     this.errorMsg = (err?.message);
      
    })
  }
}
