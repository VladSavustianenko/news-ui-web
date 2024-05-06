import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, distinctUntilChanged, filter, map, pipe } from "rxjs";
import { Categories } from "../../core/models/news";
import { ApiServise } from "../../core/services/api.service";

@Injectable()
export class CategoryService extends ApiServise {
    private _categories$ = new BehaviorSubject<Categories[]>([])
    private _selectedCategory$ = new BehaviorSubject<string>('')
    private _selectedSubcategory$ = new BehaviorSubject<string>('')

    public categories$ = this._categories$ as Observable<Categories[]>
    public selectedCategory$ = this._selectedCategory$.pipe(distinctUntilChanged()) as Observable<string>
    public selectedSubcategory$ = this._selectedSubcategory$.pipe(distinctUntilChanged()) as Observable<string>

    populateCategories() {
        this.get('/api/topics').subscribe((categories: any) => {
            this._categories$.next(categories)
        })
    }

    selectCategory(category: string) {
        this._selectedCategory$.next(category)
    }

    selectSubcategory(subcategory: string) {
        this._selectedSubcategory$.next(subcategory)
    }

    selectSubcategoriesByCategory(category: string): Observable<string[] | null | undefined> {
        return this.categories$.pipe(
            map(categories => categories.find(c => c.topic === category)?.subtopics)
        )
    }
}
