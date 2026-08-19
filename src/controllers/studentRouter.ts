import { Router } from 'express';
import {
  getListOfStudents,
  getStudent,
  postNewStudent
} from './studentController';

const router = Router();

router.get('/', getListOfStudents);
router.get('/:id', getStudent);
router.post('/', postNewStudent);

import { authenticateBearer } from '../security/authBearer';

router.get('/', getListOfStudents);

router.post('/', authenticateBearer, postNewStudent);

export default router;