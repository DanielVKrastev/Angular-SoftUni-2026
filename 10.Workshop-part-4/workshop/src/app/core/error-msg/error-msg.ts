import { Component, OnInit } from '@angular/core';
import { ErrorMsgService } from './error-msg.service';

@Component({
  selector: 'app-error-msg',
  imports: [],
  templateUrl: './error-msg.html',
  styleUrl: './error-msg.css',
})
export class ErrorMsgComponent implements OnInit{
  constructor(private errorMsgService: ErrorMsgService) {}

  ngOnInit(): void {
    
  }
}
