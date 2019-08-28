import { Component, OnInit } from '@angular/core';
import { DataImageService } from '../services/data-image.service';
import { images } from '../model/image';

@Component({
  selector: 'app-imagesgif',
  templateUrl: './imagesgif.component.html',
  styleUrls: ['./imagesgif.component.css']
})

export class ImagesgifComponent implements OnInit {
  name: string;
  image = [];
  constructor(private imageServ: DataImageService) { }
  names: string = 'itachi';
  ngOnInit() {
    this.save();
    this.names = 'itachi';
    this.getimagesForm(this.names);
  }
  getimagesForm(names) {
    this.imageServ.getImages(names).subscribe(res => {
      //console.log(res.data);
      this.image = res.data;
    })
  }

  save() {
    this.names = this.name;
    this.getimagesForm(this.names)
  }

}
