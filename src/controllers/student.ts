// ici se trouve notre traiteur de requete de CRUD

import { Request , Response } from "express";
const PORT = process.env.PORT || 3000;
const app = express();
import cors from 'cors';
app.use(cors());
const message = statuses;
const router = express.Router();

router.get("/" , getListOfStudents);

router.get("/students/:id" , getStudent);

router.post("/students" , postNewStudent);

router.put("/:id" , putStudent);

router.patch("/:id" , patchStudent);

router.delete("/:id" , deleteStudent );
