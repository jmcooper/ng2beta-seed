import {bootstrap} from 'angular2/platform/browser'
import {Component, View} from "angular2/core";
import {RouteConfig, RouterLink} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {PageOneComponent} from "./page-one";
import {PageTwoComponent} from "./page-two";

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, RouterLink],
  template: `
    <div>
      Hello World from the app component!&nbsp;&nbsp;&nbsp;<a [routerLink]="['PageOne']">Show Page One</a>&nbsp;&nbsp;&nbsp;<a [routerLink]="['PageTwo']">Show Page Two</a>
      <div style="padding-left:10px;">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
@RouteConfig([
  {path: '/', name: 'Home', component: PageOneComponent },
  {path: '/page-one', name: 'PageOne', component: PageOneComponent },
  {path: '/page-two', name: 'PageTwo', component: PageTwoComponent }
])
export class App {
}

bootstrap(App, [ROUTER_PROVIDERS]);