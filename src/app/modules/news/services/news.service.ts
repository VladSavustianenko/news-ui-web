import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Topic, ViewHistory } from "../../core/models/news";
import { ApiServise } from "../../core/services/api.service";

@Injectable()
export class NewsService extends ApiServise {
    fetchNews() {
        return this.get('/api/news') as Observable<Topic[]>
    }

    fetchTopicById(topicId: string) {
        return this.get(`/api/news/${topicId}`)
    }

    fetchNewsByCategory(category: string, subCategory: string | null, params?: any) {
        return this.get(`/api/news/category/${category}` + (subCategory ? `/${subCategory}` : ''), params) as Observable<Topic[]>
    }

    addViewHistory(data: ViewHistory) {
        this.post('/api/news/view', data).subscribe()
    }

    getTopicsByQuery(queryStr: string) {
        return this.get('/api/news/search' + (queryStr ? `?${queryStr}` : '')) as Observable<Topic[]>
    }

    fetchGeneralRecommendations() {
        return this.get('/api/news/general-recommendations') as Observable<Topic[]>
    }

    fetchRecommendations(topicId: number) {
        return this.get(`/api/news/recommendations/${topicId}`) as Observable<Topic[]>
    }
}