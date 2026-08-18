import { Router } from 'express';
import {
  getListOfStudents,
  getStudent,
  postNewStudent
} from './studentController.ts';

const router = Router();

router.get('/', getListOfStudents);
router.get('/:id', getStudent);
router.post('/', postNewStudent);

export default router;