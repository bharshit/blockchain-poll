import { Component } from '@angular/core';
import { Poll, Pollform, PollVote } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null;

  polls = this.ps.getPolls();


  constructor(private ps: PollService){

  }

  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    },100);
  }

  handlePollCreate(poll: Pollform){
    this.ps.createPoll(poll);
  }

  handlePollVote(pollVoted: PollVote){
    this.ps.vote(pollVoted.id, pollVoted.vote);
  }
}
