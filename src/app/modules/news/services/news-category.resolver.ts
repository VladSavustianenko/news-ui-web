import { inject } from "@angular/core";
import { NewsService } from "./news.service";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Topic } from "../../core/models/news";

export class NewsCategoryResolver implements Resolve<Topic[]> {
    private newsServise = inject(NewsService)
    private router = inject(Router)

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const categoryName = route.paramMap.get('categoryName')
    const categorySubname = route.paramMap.get('categorySubname')
    
    return this.newsServise.fetchNewsByCategory(categoryName as string, categorySubname)
  }
}