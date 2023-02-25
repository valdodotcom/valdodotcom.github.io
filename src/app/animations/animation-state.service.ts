import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationStateService {
  private hasAnimated = false;

  get hasAnimatedCategory(): boolean {
    return this.hasAnimated;
  }

  set hasAnimatedCategory(value: boolean) {
    this.hasAnimated = value;
  }
}