import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MATCHES } from '../mock-matches';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches = MATCHES;
  selectedMatch?: Match;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(match: Match): void {
    this.selectedMatch = match;
  }
}