import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
      } else {
        const students = {};
        const lines = data.split('\n');
        lines.forEach((line, index) => {
          if (index === 0) return; // skip header line
          const [firstname, lastname, age, field] = line.split(',');

          if (field) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname);
          }
        });

        for (const field in students) {
          students[field] = students[field].sort();
        }
        resolve(students);
      }
    });
  });
};
