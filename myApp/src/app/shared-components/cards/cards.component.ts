import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"]
})
export class CardsComponent implements OnInit {
  cards = [];

  constructor() {
    this.cards.push({ title: "The title", description: "the description" });
    this.cards.push({ title: "The title", description: "the description" });
    this.cards.push({ title: "The title", description: "the description" });
    this.cards.push({ title: "The title", description: "the description" });
    this.cards.push({ title: "The title", description: "the description" });
    this.cards.push({ title: "The title", description: "the description" });
    this.cards.push({ title: "The title", description: "the description" });
    this.cards.push({ title: "The title", description: "the description" });
  }

  ngOnInit() {}
}
