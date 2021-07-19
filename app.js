const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "takutlupa123",
  database: "gamedb",
});

client.connect();
client.on("connect", () => {
  console.log("database connected succesfully");
});

client.query(`SELECT * FROM user_game`, (err, res) => {
  if (!err) {
    console.table(res.rows);
  }
});

client.query(`SELECT * FROM user_game_biodata`, (err, res) => {
  if (!err) {
    console.table(res.rows);
  }
});

client.query(`SELECT * FROM user_game_history`, (err, res) => {
  if (!err) {
    console.table(res.rows);
  }
});

//   --------UNCOMMENT ONE OF THE SCRIPT BELOW TO SEE THE CHANGES----------

//-----1.INSERT DATA
// const insertQuery = `INSERT INTO user_game(
// 	user_id, username, password)
// 	VALUES (4, 'syahiral', '123')`;
// client.query(insertQuery, (err, res) => {
//   if (!err) {
//     console.log("Query executed succesfully");
//     client.query(`SELECT * FROM user_game`, (err, res) => {
//       if (!err) {
//         console.table(res.rows);
//       }

//     });
//   }else {
//     console.log(err.detail);
// }

// });

//-----2.DELETE DATA
// const deleteQuery = `DELETE FROM user_game
// WHERE user_id=4`;
// client.query(deleteQuery, (err, res) => {
//   if (!err) {
//     console.log("Row deleted succesfully");
//     client.query(`SELECT * FROM user_game`, (err, res) => {
//       if (!err) {
//         console.table(res.rows);
//       }
//     });
//   } else {
//     console.log(err.detail);
//   }
// });

//-----3.UPDATE DATA
// const updateQuery = `UPDATE user_game
// SET user_id=7, username='jojokeren', password='321'
// WHERE user_id=1`;
// client.query(updateQuery, (err, res) => {
//   if (!err) {
//     console.log("Row updated succesfully");
//     client.query(`SELECT * FROM user_game`, (err, res) => {
//       if (!err) {
//         console.table(res.rows);
//       }
//     });
//   } else {
//     console.log(err.detail);
//   }
// });
