import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ObservableInput, switchMap } from "rxjs";
import { CategoryService } from "../../services/category.service";
import { LoginService } from "../../../login/services/login.service";
import { UserSessionService } from "../../../core/services/user-session.service";

@Component({
    selector: 'news-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class NewsHeaderComponent implements OnInit {
    private categoryService = inject(CategoryService)
    private loginService = inject(LoginService)
    private userSessionService = inject(UserSessionService)
    private router = inject(Router)
    private route = inject(ActivatedRoute)

    public categories$ = this.categoryService.categories$
    public activeCategory$ = this.categoryService.selectedCategory$

    searchInput: string = ''

    get userName() {
        return this.userSessionService.user?.name
    }

    constructor() {
        this.categoryService.populateCategories()
    }

    ngOnInit(): void {
        this.router.events.pipe(
            switchMap((_) => {
                return this.route.firstChild?.params as ObservableInput<any>
            })
        ).subscribe(params => {
            if (params) {
                this.categoryService.selectCategory(params['categoryName'])
                this.categoryService.selectSubcategory(params['categorySubname'])
            } else {
                this.categoryService.selectCategory('')
                this.categoryService.selectSubcategory('')
            }
        })
    }

    logout() {
        this.loginService.logout()
    }

    search() {
        this.router.navigate(['/news', 'search'], { queryParams: { text: this.searchInput } })
        this.searchInput = ''
    }
}