import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoUtilsService {
  // Note: Dans une application réelle, le chiffrement des mots de passe
  // devrait être fait côté serveur avec bcrypt ou scrypt.
  // Cette implémentation est simplifiée et à des fins de démonstration uniquement.
  
  async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
}