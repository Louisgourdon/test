import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {RssService} from '../../../services/rss/rss.service';
import {map, Observable, startWith} from "rxjs";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {FormControl} from "@angular/forms";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css'],
})

export class PressComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl('');
  feedData!: any[];
  favorites: string[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  filteredCategories!: Observable<string[]>;
  filteredFeedData: any[] = [];

  @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor(private rssService: RssService) {
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) => (category ? this._filter(category) : this.categories.slice())),
    );
  }

  ngOnInit() {
    this.rssService.getNews().subscribe(
      (response) => {
        this.feedData = response;
        this.feedData.forEach((item: any) => {
          item.data.categories.forEach((category: string) => {
            this.categories.push(category.toUpperCase());
          });
        });
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  filterDataByCategories() {
    if (this.selectedCategories.length > 0) {
      this.filteredFeedData = this.feedData.filter((item: any) => {
        const itemCategories = item.data.categories.map((category: string) => category.toLowerCase());
        return this.selectedCategories.some(selectedCategory => itemCategories.includes(selectedCategory.toLowerCase()));
      });
    } else {
      this.filteredFeedData = [...this.feedData];
    }
  }

  toggleFavorite(item: any): void {
    const title = item.data.title;
    const index = this.favorites.indexOf(title);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(title);
    }
  }

  isFavorite(item: any): boolean {
    const title = item.data.title;
    return this.favorites.includes(title);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedCategories.push(value);
    }
    event.chipInput!.clear();
    this.categoryCtrl.setValue(null);
  }

  remove(category: string): void {
    const index = this.selectedCategories.indexOf(category);
    if (index >= 0) {
      this.selectedCategories.splice(index, 1);
      this.announcer.announce(`Removed ${category}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedCategories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.categories.filter(category => category.toLowerCase().includes(filterValue));
  }

}
