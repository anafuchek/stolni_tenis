import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from './player';
import { PLAYERS } from './mock-players';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playersUrl = 'api/players';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET players from the server */
    getPlayers(): Observable<Player[]> {
      return this.http.get<Player[]>(this.playersUrl)
      .pipe(
      tap(_ => this.log('fetched players')),
      catchError(this.handleError<Player[]>('getPlayers', []))
    );
  }

  /** POST: add a new player to the server */
    addPlayer(player: Player): Observable<Player> {
      return this.http.post<Player>(this.playersUrl, player, this.httpOptions).pipe(
        tap((newPlayer: Player) => this.log(`added player w/ id=${newPlayer.id}`)),
        catchError(this.handleError<Player>('addPlayer'))
      );
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PlayerService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PlayerService: ${message}`);
  }
}
