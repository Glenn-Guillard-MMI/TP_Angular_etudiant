import { IEtudiant } from './ietudiant';

export class Etudiant implements IEtudiant {
  _nom: string;
  _prenom: string;
  _cp: string;
  _rue: string;
  _age: number;
  _courriel: string;
  _genre: string;
  _idCand: number;
  _ville: string;

  constructor(
    _nom: string,
    _prenom: string,
    _rue: string,
    _cp: string,
    _ville: string,
    _courriel: string,
    _genre: string,
    _age: number,
    _idCand: number
  ) {
    this._nom = _nom;
    this._prenom = _prenom;
    this._cp = _cp;
    this._rue = _rue;
    this._ville = _ville;
    this._courriel = _courriel;
    this._genre = _genre;
    this._idCand = _idCand;
    this._ville = _ville;
    this._courriel = _courriel;
    this._genre = _genre;
    this._age = _age;
  }
}
