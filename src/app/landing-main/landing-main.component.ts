import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.css']
})
export class LandingMainComponent implements OnInit, OnDestroy {
  // Array of image paths
  imagePaths: string[] = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
    'assets/img/5.jpg',
  ];

  currentImageIndex = 0;
  private intervalSubscription: Subscription = new Subscription();

  ngOnInit() {
    // Set initial image
    this.updateImage();

    // Change image every 3 seconds
    this.intervalSubscription = interval(3000).subscribe(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
      this.updateImage();
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  updateImage() {
    const sliderImg = document.getElementById('sliderImg') as HTMLImageElement;
    if (sliderImg) {
      sliderImg.src = this.imagePaths[this.currentImageIndex];
    }
  }
}
