import { Component } from '@angular/core';

export interface Review {
  stars: number;
  title: string;
  description: string;
  author: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  reviews = [
    {
      title: 'Exciting!',
      description:
        "This app is an absolute thrill. I'm having a blast while making big profits!",
      author: 'BartSimpson',
      stars: 5,
    },
    {
      title: 'Impressed!',
      description:
        "I never thought I'd say this, but I'm genuinely impressed with this app. It's a game-changer!",
      author: 'LisaSimpson',
      stars: 5,
    },
    {
      title: 'Thriving!',
      description:
        "My investments are thriving, and it's all thanks to this amazing app. I'm on cloud nine!",
      author: 'MargeSimpson',
      stars: 5,
    },
    {
      title: 'Riches Await!',
      description:
        "This app is a goldmine. I'm already seeing incredible returns. The future looks bright!",
      author: 'MrBurns',
      stars: 5,
    },
    {
      title: 'Blessed!',
      description:
        "I feel truly blessed to have found this app. It's a godsend for my financial goals.",
      author: 'NedFlanders',
      stars: 5,
    },
    {
      title: 'Impulsive Joy!',
      description:
        "I'm riding high on impulsive joy with this app. It's a fun rollercoaster of profits!",
      author: 'HomerSimpson',
      stars: 5,
    },
    {
      title: 'Amazed!',
      description:
        "I'm amazed by how easy and profitable this app is. It's like magic!",
      author: 'KrustytheClown',
      stars: 5,
    },
    {
      title: 'Revenging Success!',
      description:
        'My plan for revenge is working, and this app is a key part of it. Sweet success!',
      author: 'SideshowBob',
      stars: 5,
    },
    {
      title: 'Addictive Profits!',
      description:
        "Just like my old addiction, this app is addictive, but this time it's for profits!",
      author: 'BarneyGumble',
      stars: 5,
    },
    {
      title: 'Family Fortune!',
      description:
        "Our family is building a fortune together with this app. It's a bonding experience!",
      author: 'SimpsonsFamily',
      stars: 5,
    },
    {
      title: "Baby's College Fund!",
      description:
        "We're growing Maggie's college fund, and it's as easy as pie with this app!",
      author: 'HomerSimpson',
      stars: 5,
    },
    {
      title: "Principal's Choice!",
      description:
        "As a principal, I make sensible choices. This app is no exception – it's a winner!",
      author: 'PrincipalSkinner',
      stars: 5,
    },
    {
      title: 'Healthy Returns!',
      description:
        "I'm enjoying healthy returns with this app. It's good for my financial health!",
      author: 'DrHibbert',
      stars: 5,
    },
    {
      title: 'Dynamic Duo!',
      description:
        "Bart and I are the dynamic duo of investing with this app. We're unstoppable!",
      author: 'MilhouseVanHouten',
      stars: 5,
    },
    {
      title: 'Incredible!',
      description:
        "This app is absolutely incredible! I can't believe the amazing returns I'm getting.",
      author: 'ApuNahasapeemapetilon',
      stars: 5,
    },
  ];

  getTopReviews(): Review[] {
    return this.reviews.slice(0, 5);
  }
  getMiddleReviews(): Review[] {
    return this.reviews.slice(5, 10);
  }
  getBottomReviews(): Review[] {
    return this.reviews.slice(10, 15);
  }
}
