import { Component } from "@angular/core";
import { CharacterInput } from "./components/item-card/item-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  characters: Array<CharacterInput> = [
    {
      name: "Will Smith",
      image: "../../../assets/imgs/will.jpg",
      actorName: "Jabari Banks",
      description:
        "Ator estadunidense que interpreta Will Smith em Bel-Air, reboot da série Fresh Prince of Bel-Air (Um maluco no pedaço).",
    },
    {
      name: "Carlton Banks",
      image:
        "https://thenexus.one/storage/2022/03/Olly-Sholotan-as-Carlton-in-Bel-Air-season-1.jpg",
      actorName: "Olly Sholotan",
      description:
        "Ator estadunidense que interpreta Carlton Banks em Bel-Air, reboot da série Fresh Prince of Bel-Air (Um maluco no pedaço).",
    },
    {
      name: "Philip Banks",
      image:
        "https://globalnews.ca/wp-content/uploads/2022/03/adrian-holmes-bel-air-uncle-phil.jpeg?quality=85&strip=all",
      actorName: "Adrian Holmes",
      description:
        "Ator inglês que interpreta o tio Phil em Bel-Air, reboot da série Fresh Prince of Bel-Air (Um maluco no pedaço).",
    },
    {
      name: "Hilary Banks",
      image:
        "https://epipoca.com.br/wp-content/uploads/2022/02/coco-jones-bel-air-1200x900.jpg",
      actorName: "Coco Jones",
      description:
        "Atriz estadunidense que interpreta Hilary Banks em Bel-Air, reboot da série Fresh Prince of Bel-Air (Um maluco no pedaço).",
    },
    {
      name: "Ashley Banks",
      image:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/02/akira-akbar-bel-air-1645211717836.jpg",
      actorName: "Akira Akbar",
      description:
        "Atriz estadunidense que interpreta Ashley Banks em Bel-Air, reboot da série Fresh Prince of Bel-Air (Um maluco no pedaço).",
    },
    {
      name: "Vivian Banks",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/nup-195316-03146-1644619947.jpg?crop=1.00xw:0.752xh;0,0&resize=640:*",
      actorName: "Cassandra Freeman",
      description:
        "Atriz estadunidense que interpreta Vivian Banks em Bel-Air, reboot da série Fresh Prince of Bel-Air (Um maluco no pedaço).",
    },
    {
      name: "Geoffrey",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2022/02/Jimmy-Akingbola.jpg",
      actorName: "Jimmy Akingbola",
      description:
        "Ator inglês que interpreta Geoffrey em Bel-Air, reboot da série Fresh Prince of Bel-Air (Um maluco no pedaço).",
    },
  ];

  logInput(event: string) {
    console.log(event);
  }
}
