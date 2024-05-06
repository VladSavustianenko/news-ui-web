import { Component, HostListener, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Topic, ViewType } from "../../../core/models/news";
import { NewsService } from "../../services/news.service";
import { map, switchMap } from "rxjs";

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class NewsSearchComponent implements OnInit {
    private newsService = inject(NewsService)
    private router = inject(Router)
    private activatedRoute = inject(ActivatedRoute)

    private isLoading = false
    private offset = 20

    topics: Topic[] = []
    currentSearch$ = this.activatedRoute.queryParams.pipe(map(({ text }) => text || ''))

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({ topics }) => {
            this.topics = topics
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
        this.activatedRoute.queryParams.pipe(
            switchMap(({text}) => {
                let queryStr = ''
                
                if (text) {
                  queryStr += `text=${text}`
                }
                queryStr += `&offset=${this.offset}`

                return this.newsService.getTopicsByQuery(queryStr)
            })
        ).subscribe((topics: Topic[]) => {
            this.topics = [...this.topics, ...topics]
            this.isLoading = false
            this.offset += 20
        })
    }
}