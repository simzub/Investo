import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent {
  faqs = [
    [
      {
        question: 'How do I know the stock tips are good, dude?',
        answer:
          'Well, our entire business depends on providing top-notch stock tips, so it’s in our best interest that they are. Just trust us, you might get as rich as Mr. Burns!',
      },
      {
        question: 'Isn’t this app like insider trading, like in a cartoon?',
        answer:
          'You betcha! But it’s like Springfield’s secret donut recipe – it’s not illegal here. Our app brings you insider trading tips from folks you don’t even know, just like the alien secrets at Area 51!',
      },
      {
        question: 'But isn’t insider trading forbidden by the SEC?',
        answer:
          "Well, here's the scoop, you're the one doing the insider trading, not us. We're just providing you with the tips and some tools to make trades. We're not doing anything wrong here, officer Wiggum.",
      },
    ],
    [
      {
        question:
          'Do the people giving you stock tips realize what they are doing, man?',
        answer:
          "Hey, it's Springfield – everybody makes their own choices. If they don't research the consequences, that's on them, not on us. We're just like the Comic Book Guy, providing information.",
      },
      {
        question: 'Where is our app based, in Krustyland?',
        answer:
          "Well, let's just say it's not somewhere where the SEC is going to find us. It's a bit like finding a secret passage to Moe's Tavern.",
      },
      {
        question: 'Is there any age limit for using our app, like for Maggie?',
        answer:
          "For our free plan, the age limit is based on the minimum age to trade in your country of residence. Our VIP plan uses advanced transaction anonymization, so you can use that plan even if you're 9 years old. Or even if you're Santa's Little Helper.",
      },
    ],
    [
      {
        question:
          'How did you get this app on the App Store, like with the help of Sideshow Bob?',
        answer:
          "Honestly, we were surprised too, but eventually, we found out that the app reviewer found the app so compelling they approved it just so they could use it themselves. It's a bit like a plot from a sideshow!",
      },
      {
        question:
          'How do I report my earnings to the IRS, like Homer explaining donuts?',
        answer:
          "This feels like one-hundred percent a you problem, like Bart's chalkboard punishments. Our app is not responsible in any way for your tax returns. You might want to ask an accountant, maybe Flanders.",
      },
      {
        question:
          'How do I become an insider, like with the secret Krusty Burger menu?',
        answer:
          "Contact us with some details about your industry and the type of access you have to apply for an insider account. Once approved, we'll send you a guide on collecting insider information without being detected at work, just like Bart and Milhouse sneak into Moe's Tavern!",
      },
    ],
  ];
}
