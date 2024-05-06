import { Component, inject } from "@angular/core";
import { NewsService } from "../../services/news.service";
import { Router } from "@angular/router";
import { Topic, ViewType } from "../../../core/models/news";

@Component({
    selector: 'news-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class NewsMainComponent {
    private newsService = inject(NewsService)
    private router = inject(Router)

    public news: Topic[] = []
    public recommendations: Topic[] = []

    constructor() {
        this.newsService.fetchNews().subscribe((news) => {
            this.news = news
        })

        this.newsService.fetchGeneralRecommendations().subscribe((recommendations) => {
            this.recommendations = recommendations
        })
    }
    
    navigateToCategoryList(category: string) {
        this.router.navigate(['/category', category])
    }

    selectTopicFromMainList(topicId: number) {
        this.newsService.addViewHistory({ topicId, viewType: ViewType.Basic })
        this.router.navigate(['/news', topicId])
    }

    selectRecommendedTopic(topicId: number) {
        this.newsService.addViewHistory({ topicId, viewType: ViewType.Recommended })
        this.router.navigate(['/news', topicId])
    }
}