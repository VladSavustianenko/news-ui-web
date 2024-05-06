import { Component, HostListener, Input, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "../../services/category.service";
import { Topic, ViewType } from "../../../core/models/news";
import { NewsService } from "../../services/news.service";

@Component({
    selector: 'news-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class NewsCategoryComponent {
    private router = inject(Router)
    private route = inject(ActivatedRoute)
    private categoryService = inject(CategoryService)
    private newsService = inject(NewsService)

    private isLoading = false
    private offset = 20

    public news: Topic[] = []
    public activeCategory$ = this.categoryService.selectedCategory$
    public activeSubcategory$ = this.categoryService.selectedSubcategory$

    constructor() {
        this.route.data.subscribe(({ news }) => {
            this.news = news
        })
    }

    navigateToCategory(section: string) {
        this.router.navigate(['/category', section])
    }

    navigateToSubcategory(section: string, subsection: string) {
        this.router.navigate(['/category', section, subsection])
    }

    navigateToTopic(topicId: number) {
        this.newsService.addViewHistory({ topicId, viewType: ViewType.Basic })
        this.router.navigate(['/news', topicId])
    }

    selectSubcategoriesByCategory$(category: string) {
        return this.categoryService.selectSubcategoriesByCategory(category)
    }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        if (this.isNearBottom() && !this.isLoading) {
            this.isLoading = true
            this.loadMoreTopics()
        }
    }

    private isNearBottom(): boolean {
        const scrollTop = window.scrollY
        const totalHeight = document.body.scrollHeight
        const windowHeight = window.innerHeight

        return (scrollTop + windowHeight + 100 >= totalHeight)
    }

    private loadMoreTopics() {
        const categoryName = this.route.snapshot.paramMap.get('categoryName')
        const categorySubname = this.route.snapshot.paramMap.get('categorySubname')

        this.newsService.fetchNewsByCategory(categoryName as string, categorySubname, { offset: this.offset }).subscribe((topics: Topic[]) => {
            this.news = [...this.news, ...topics]
            this.isLoading = false
            this.offset += 20
        })
    }
}