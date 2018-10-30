import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-a-picture',
  templateUrl: './take-a-picture.component.html',
  styleUrls: ['./take-a-picture.component.css']
})
export class TakeAPictureComponent implements OnInit {
  title = 'app';
  selectedFile = null;
  constructor() {}

  ngOnInit() {}

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }
}
