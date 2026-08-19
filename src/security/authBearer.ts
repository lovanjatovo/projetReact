// src/security/authBearer.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Étend le type Request d'Express pour y attacher les données de l'utilisateur authentifié
export interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

/**
 * Middleware vérifiant la présence et la validité du token Bearer dans les headers
 */
export const authenticateBearer = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  // 1. Récupération du header 'Authorization'
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // 2. Extraction du token (format attendu : "Bearer <token>")
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Token format must be Bearer <token>' });
  }

  const token = parts[1];
  const secret = process.env.JWT_SECRET || 'your_fallback_secret_key';

  // 3. Vérification de la validité du token
  try {
    const decoded = jwt.verify(token, secret);
    
    // On attache les données décodées du token à la requête
    req.user = decoded;
    
    // On passe au middleware ou au controller suivant
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token', error });
  }
};