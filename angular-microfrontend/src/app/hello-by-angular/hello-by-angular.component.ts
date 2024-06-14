import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {map} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    Hello {{name()}} by Angular!
  `
})
export class HelloByAngularComponent {
  private activatedRouter = inject(ActivatedRoute);
  name = toSignal(this.activatedRouter.queryParamMap.pipe(
    map(p => p.get('name'))
  ));
}
