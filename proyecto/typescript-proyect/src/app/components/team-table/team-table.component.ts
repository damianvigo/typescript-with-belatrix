import { TeamService, TeamsTableHeaders } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/interfaces/team';
import { take } from 'rxjs/operators';
import { Countries } from 'src/app/interfaces/player';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  public teams$: Observable<Team[]>; // el $ al final significa que la variable es asincronica
  public tableHeaders = TeamsTableHeaders;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
    this.teamService.getTeams().pipe(take(1)).subscribe(teams => {
      if (teams.length == 0) {
        const team: Team = {
          name: 'MyAmazingTeam',
          country: Countries.Argentina,
          players: null
        };
        this.teamService.addTeam(team);
      }
    }); // obtener solo un elemento, subscriba simulando una promesa
  }

}
