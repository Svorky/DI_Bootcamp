const knex = require("knex");
const dotenv = require("dotenv");

dotenv.config();

const { PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD } = process.env;

const db = knex({
    client: "pg",
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false },
    },
});

// async function getVersion() {
//     try {
//         const result = await db.raw("select version()");
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// db("products")
//     .select("id", "name", "price")
//     .where('id','>',1)
//     .then((rows) => {
//         console.log(rows);
//     })
//     .catch((err) => console.error(err));

// db("products")
// .update({name: 'iPhone 16'})
// .where({id: 1})
// .returning('*')
// .then( result => {
//     console.log(result)
// })
// .catch(err => console.error(err))

// db('products')
// .insert(
//     [
//         {name: 'iPad', price: 1000},
//         {name: 'iWatch', price: 800}
//     ], ['*']
// )
// .then( result => {
//     console.log(result)
// })
// .catch(err => console.error(err))

// db('products')
// .where({id: 5})
// .delete()
// .returning('*')
// .then( result => {
//     console.log(result)
// })
// .catch(err => console.error(err))

// db.raw('select * from products')
// .then( res => {
//     console.log(res)
//     console.log(res.rows)
// })

module.exports = {
    db
}