import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Player } from '../interfaces/player';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersDb: AngularFireList<Player>;

  constructor(private db: AngularFireDatabase) { 
    /* entrando a la base de datos de firebase, dentro a la lista de jugadores y ordenarla por nombre */
    this.playersDb = this.db.list('/players', ref => ref.orderByChild('name'));
  }


  getPlayers(): Observable<Player[]> {
    // obtener la informacion cuando pido la información
    /* snapshot se refiere a obtener la información de los datos es decir mostrara todos los datos que tiene la tabla 
    y el payload navega en los datos, es decir trae la información dependiendo de la key 
    en otras palabras trae la información de cada jugador, su posicion, nombre etc.
    snapshot equivale a un select *from de Jugadores y payload a un select * from de jugadores con un where, en SQL asi se representaría */
    return this.playersDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  addPlayer(player: Player) {
    return this.playersDb.push(player)
  }

  deletePlayer(id: string) {
    this.db.list('/players').remove(id);
  }

  editPlayer(newPlayerData) {
    const $key = newPlayerData.$key;
    delete(newPlayerData.$key);
    this.db.list('/players').update($key, newPlayerData);
  }
}
