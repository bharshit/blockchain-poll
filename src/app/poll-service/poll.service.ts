import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { Poll, PollForm, Pollform } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}

  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: 'Do you like bikes or cars?',
        thumbnail:
          'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?cs=srgb&dl=pexels-garvin-st-villier-3311574.jpg&fm=jpg',
        results: [0, 5, 7, 1],
        options: ['Cars', 'bikes', 'both', 'none'],
        voted: true,
      },
      {
        id: 2,
        question: 'What kind of movies you like?',
        thumbnail:
          'https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        results: [1, 5, 3, 8],
        options: ['Red', 'Violet', 'others', 'none'],
        voted: false,
      },
    ]).pipe(delay(2000));
  }

  vote(pollId: number,voteNumber: number) {
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
