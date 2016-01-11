System.register(['angular2/platform/browser', "angular2/core", "angular2/router", "./page-one", "./page-two"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, router_2, router_3, page_one_1, page_two_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (page_one_1_1) {
                page_one_1 = page_one_1_1;
            },
            function (page_two_1_1) {
                page_two_1 = page_two_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [router_3.ROUTER_DIRECTIVES, router_1.RouterLink],
                        template: "\n    <div>\n      Hello World from the app component!&nbsp;&nbsp;&nbsp;<a [routerLink]=\"['PageOne']\">Show Page One</a>&nbsp;&nbsp;&nbsp;<a [routerLink]=\"['PageTwo']\">Show Page Two</a>\n      <div style=\"padding-left:10px;\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  "
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: page_one_1.PageOneComponent },
                        { path: '/page-one', name: 'PageOne', component: page_one_1.PageOneComponent },
                        { path: '/page-two', name: 'PageTwo', component: page_two_1.PageTwoComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [router_2.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.js.map