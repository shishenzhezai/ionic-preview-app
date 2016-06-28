import {Component} from '@angular/core';
import {reorderArray} from 'ionic-angular';

@Component({
  templateUrl: './build/pages/lists/thumbnail/template.html'
})
export class ThumbnailPage {
  items: any[] = [{
    thumbnail: "img/thumbnail-totoro.png",
    title: "My Neighbor Totoro",
    subtitle: "Hayao Miyazaki • 1988"
  },
  {
    thumbnail: "img/thumbnail-rotla.png",
    title: "Raiders of the Lost Ark",
    subtitle: "Steven Spielberg • 1981"
  },
  {
    thumbnail: "img/thumbnail-ghostbusters.png",
    title: "Ghostbusters",
    subtitle: "Ivan Reitman • 1984"
  },
  {
    thumbnail: "img/thumbnail-batman.png",
    title: "Batman",
    subtitle: "Tim Burton • 1988"
  },
  {
    thumbnail: "img/thumbnail-bttf.png",
    title: "Back to the Future",
    subtitle: "Robert Zemeckis • 1985"
  },
  {
    thumbnail: "img/thumbnail-esb.png",
    title: "The Empire Strikes Back",
    subtitle: "Irvin Kershner • 1980"
  },
  {
    thumbnail: "img/thumbnail-terminator.png",
    title: "The Terminator",
    subtitle: "James Cameron • 1984"
  }];

  isReordering: boolean = false;

  toggle() {
    this.isReordering = !this.isReordering;
  }

  reorder(indexes: any) {
    this.items = reorderArray(this.items, indexes);
  }

}
