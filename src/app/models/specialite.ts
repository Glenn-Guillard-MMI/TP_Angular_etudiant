import { ISpecialite } from './ispecialite';

export class Specialite implements ISpecialite {
  _libelle: string;
  _idSpec: number;
  constructor(_libelle: string, _idSpec: number) {
    this._libelle = _libelle;
    this._idSpec = _idSpec;
  }
}
