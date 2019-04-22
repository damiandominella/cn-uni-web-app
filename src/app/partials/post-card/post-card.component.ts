import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  public share(socialMedia: string): void {
    const width = 800;
    const height = 450;

    switch (socialMedia) {
      case 'whatsapp': {
        window.open(
          'whatsapp://send?text=' + encodeURIComponent(this.post.link),
          '_self'
        );
      } break;
      case 'telegram': {
        window.open(
          "https://telegram.me/share/url?url=" + this.post.link,
          '_blank',
          'width=' + width + ',height=' + height
        );
      } break;
      case 'facebook': {
        window.open(
          "https://www.facebook.com/share.php?u=" + this.post.link,
          '_blank',
          'width=' + width + ',height=' + height
        );
      } break;
      case 'twitter': {
        window.open(
          'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.post.link),
          'myWindow',
          'width=' + width + ',height=' + height
        );
      } break;
    }
  }

}
