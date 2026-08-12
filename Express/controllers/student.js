import { json } from 'body-parser';
import fs from 'fs';
export const getListOfStudents = (req , res) => {
    const data = fs.readFileSync('./datas/students.json');
    const allStudents = JSON.parse(data); // cette parametre permet de changer le texte brut du json en objet javascript
    res.json(allStudents); // renvoyer la reponse sous forme de json 
}

export const PostNewStudent = (req , res) => {
    const data1 = fs.readFileSync('./datas/students.json');
    const data2 = fs.writeFileSync('./datas/students.json');
    const allStudents = JSON.parse(data2);
    const newStudent = { id: data1.length + 1 , name: req.body.name, firstName: req.body.firstName }
}