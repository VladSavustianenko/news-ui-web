import { APP_INITIALIZER, Injectable, NgModule } from "@angular/core";
import { NewsCategoryComponent } from "./components/category/category.component";
import { NewsPageComponent } from "./components/page-component/page.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { NewsService } from "./services/news.service";
import { CommonModule } from "@angular/common";
import { NewsHeaderComponent } from "./components/header/header.component";
import { NewsMainComponent } from "./components/main/main.component";
import { NewsCategoryResolver } from "./services/news-category.resolver";
import { NewsDetailsComponent } from "./components/details/details.component";
import { TopicResolver, TopicsSearchResolver } from "./services/topic.resolver";
import { CategoryService } from "./services/category.service";
import { ErrorInterceptor } from "../core/services/error.interceptor";
import { AuthInterceptor } from "../core/services/auth.interceptor";
import { LoginService } from "../login/services/login.service";
import { NewsSearchComponent } from "./components/search/search.component";
import { FormsModule } from "@angular/forms";
import { WebSocketService } from "../core/services/socket.service";


export function initModule(moduleInitService: ModuleInitializationService) {
    return () => moduleInitService.init();
}


@Injectable()
export class ModuleInitializationService {
    constructor(private webSocketService: WebSocketService) {
        this.init();
    }

    init(): void {
        this.webSocketService.connect();
    }

    cleanup(): void {
        this.webSocketService.disconnect();
    }
}

const routes: Routes = [
    {
        path: '',
        component: NewsPageComponent,
        children: [
            { path: '', redirectTo: 'news', pathMatch: 'full' },
            {
                path: 'news',
                children: [
                    {
                        path: '',
                        component: NewsMainComponent,
                    },
                    {
                        path: 'search',
                        component: NewsSearchComponent,
                        resolve: {
                            topics: TopicsSearchResolver,
                        },
                        runGuardsAndResolvers: 'always',
                    },
                    {
                        path: ':topicId',
                        component: NewsDetailsComponent,
                        resolve: {
                            topic: TopicResolver,
                        },
                    },
                ],
            },
            { 
                path: 'category', 
                redirectTo: '' 
            },
            {
                path: 'category/:categoryName/:categorySubname',
                component: NewsCategoryComponent,
                resolve: {
                    news: NewsCategoryResolver,
                },
            },
            {
                path: 'category/:categoryName',
                component: NewsCategoryComponent,
                resolve: {
                    news: NewsCategoryResolver,
                },
            },
            {
                path: '**',
                redirectTo: 'news',
            }
        ],
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        RouterOutlet,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        NewsPageComponent,
        NewsMainComponent,
        NewsHeaderComponent,
        NewsCategoryComponent,
        NewsDetailsComponent,
        NewsSearchComponent,
    ],
    providers: [
        NewsService,
        NewsCategoryResolver,
        TopicResolver,
        TopicsSearchResolver,
        CategoryService,
        LoginService,
        WebSocketService,
        ModuleInitializationService,
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: initModule,
        //     deps: [ModuleInitializationService],
        //     multi: true
        // },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
    ]
})
export class NewsModule {
    // constructor(private initService: ModuleInitializationService) { }
}
