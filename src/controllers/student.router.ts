import { Router } from 'express';
import {
  getListOfStudents,
  getStudent,
  postNewStudent,
  putStudent,
  patchStudent,
  deleteStudent
} from '../services/student.service.ts';

const router = Router();

router.get('/', getListOfStudents);
router.get('/:id', getStudent);
router.post('/', postNewStudent);
router.put('/:id', putStudent);
router.patch('/:id', patchStudent);
router.delete('/:id', deleteStudent);

export default router;