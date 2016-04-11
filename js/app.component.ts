import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home/home.component.ts';
import {Login} from './login/login.component.ts';

@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      Hello world!
      <nav>
        <ul>
          <li>
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li>
            <a [routerLink]=" ['Login'] ">Login</a>
          </li>
        </ul>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Home', component: Home, useAsDefault: true },
  { path: '/login', name: 'Login', component: Login }
])
export class AppComponent {
  
}