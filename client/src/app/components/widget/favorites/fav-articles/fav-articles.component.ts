import {Component, OnInit} from '@angular/core';
import {RssService} from "../../../../services/rss/rss.service";
@Component({
  selector: 'app-fav-articles',
  templateUrl: './fav-articles.component.html',
  styleUrls: ['./fav-articles.component.css'],
})
export class FavArticlesComponent implements OnInit {
  feedData!: any[];
  favorites: string[] = [];
  constructor(private rssService: RssService) { }

  ngOnInit() {
    this.rssService.getNews().subscribe(
      (data) => {
        this.feedData = data;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
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
}
