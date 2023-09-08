declare namespace Express {
  export interface Request {
    user?: {
      uuid: string;
      // Ajoutez d'autres champs si nécessaire
    };
  }
}
