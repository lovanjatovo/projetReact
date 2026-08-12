import { json } from 'body-parser';
import fs from 'fs';
import { message } from 'statuses';
export const getListOfStudents = (req, res) => {
  const data = fs.readFileSync('./datas/students.json');
  const allStudents = JSON.parse(data); // cette parametre permet de changer le texte brut du json en objet javascript
  res.status(200).json(allStudents); // renvoyer la reponse sous forme de json
}

export const postNewStudent = (req, res) => {
  const data1 = fs.readFileSync('./datas/students.json');
  const allStudents = JSON.parse(data1);

    if(!req.body.name || req.body.firstName){
        return res.status(400).json({
            message: "Erreur: parametre manquante !"
        });
    }

  const newStudent = {
    id: allStudents.length + 1,
    name: req.body.name,
    firstName: req.body.firstName
  };

  allStudents.push(newStudent);

  fs.writeFileSync('./datas/students.json',JSON.stringify(allStudents),null,2);

  res.status(201).json({
    message: "creation of a new student inside the API",
    student: newStudent
  });
}

export const deleteStudent = (req , res) => {
    const idStudent = req.params.id;
    const data1 = fs.readFileSync('./datas/students.json');
    const allStudents = JSON.parse(data1);

    const newList = allStudents.filter((element) , () => {
        return element.id !== parseInt(idStudent);
    })

    fs.writeFileSync("./datas/students.json",JSON.stringify(newList),null,2);
    res.status(204).json({
        message: "No content"
    })
}