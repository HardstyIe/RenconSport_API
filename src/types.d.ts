declare namespace Express {
  export interface Request {
    user?: {
      jwt: string;
      uuid: string;
      // Ajoutez d'autres champs si nécessaire
    };
  }
}
