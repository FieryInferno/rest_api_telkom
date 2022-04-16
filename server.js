const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const db = require('./app/models');
// const Mk = db.mk;

// const initialMataKuliah = () => {
//   Mk.create({
//     id: 1,
//     kode: 'MK1',
//     nama: 'Algoritma dan Pemrograman',
//     jadwal: 'Senin',
//   });
//   Mk.create({
//     id: 2,
//     kode: 'MK2',
//     jadwal: 'Selasa',
//   });
//   Mk.create({
//     id: 3,
//     kode: 'MK3',
//     jadwal: 'Rabu',
//   });
// };

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initialMataKuliah();
// });

app.get('/', (req, res) => {
  res.json({message: 'Welcome'});
});

require('./app/routes/auth.routes')(app);
require('./app/routes/mahasiswa.routes')(app);
require('./app/routes/mataKuliah.routes')(app);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
