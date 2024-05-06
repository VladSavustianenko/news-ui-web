import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "../../services/news.service";
import { Topic, ViewType } from "../../../core/models/news";

@Component({
    selector: 'news-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class NewsDetailsComponent {
    private newsService = inject(NewsService)
    private router = inject(Router)
    private route = inject(ActivatedRoute)

    public topic: any
    public recommendations?: Topic[] = []

    constructor() {
        this.route.data.subscribe(({ topic }) => {
            this.topic = topic
            
            if (this.topic) {
                this.newsService.fetchRecommendations(this.topic.id).subscribe((topics) => {
                    this.recommendations = topics
                })
            }
        })
    }

    navigateToCategory(section: string) {
        this.router.navigate(['/category', section])
    }
    
    navigateToRelevantTopic(topicId: number) {
        this.newsService.addViewHistory({ topicId, viewType: ViewType.Relevant })
        this.router.navigate(['/news', topicId])
    }
}