// ici se trouve notre traiteur de requete de CRUD

import { Router } from 'express';
import {
  getListOfStudents,
  getStudent,
  postNewStudent,
  putStudent,
  patchStudent,
  deleteStudent
} from './student.controller'; 

const router = Router();

router.get('/', getListOfStudents);
router.get('/:id', getStudent);
router.post('/', postNewStudent);
router.put('/:id', putStudent);
router.patch('/:id', patchStudent);
router.delete('/:id', deleteStudent);

export default router;