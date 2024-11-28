// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const filePath = './database.csv'; // Adjust as needed
    readDatabase(filePath)
      .then((students) => {
        let response = 'This is the list of our students\n';
        Object.keys(students).forEach((field) => {
          response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const filePath = './database.csv'; // Adjust as needed

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(filePath)
      .then((students) => {
        if (!students[major]) {
          return res.status(500).send('Cannot load the database');
        }
        res.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

