import { inject } from "@angular/core";
import { NewsService } from "./news.service";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Topic } from "../../core/models/news";

export class TopicResolver implements Resolve<Topic> {
  private newsServise = inject(NewsService)

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const topicId = route.paramMap.get('topicId') || ''
    
    return this.newsServise.fetchTopicById(topicId) as Observable<Topic>
  }
}

export class TopicsSearchResolver implements Resolve<Topic[]> {
  private newsServise = inject(NewsService)

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let queryStr = ''
    
    if (route.queryParams['text']) {
      queryStr += `text=${route.queryParams['text']}`
    }
    
    return this.newsServise.getTopicsByQuery(queryStr) as Observable<Topic[]>
  }
}