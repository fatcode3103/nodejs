import pool from "../config/connectDB"

let getHomePage = async (req, res) => {
    //logic
    // let data = []
    // connection.query(
    //     'SELECT * FROM `users`',
    //     (err, results, fields) => {
    //         // data = results.map(result => result)
    //         // res.render("index.ejs", {dataUsers: data})
    //     }
    // );

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');

    return res.render("index.ejs", {dataUsers: rows})
}

let getDetailPage = async (req, res) => {
    const userID = req.params.userID
    const [rows, fields] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [userID])
    let [data] = rows
    return res.render("detail.ejs", {data: data})
}

let createNewUser = async (req, res) => {
    // INSERT INTO table_name (column1, column2, column3, ...)
    // VALUES (value1, value2, value3, ...);
    const {firstName, lastName, email, address} = req.body
    await pool.execute(`INSERT INTO users(firstName, lastName, email, address) VALUES(?, ?, ?, ?)`, [firstName, lastName, email, address])
    return res.redirect('/')
}

let deleteUser = async(req, res) => {
    const {userID} = req.body;
    await pool.execute(`DELETE FROM users WHERE id = ?`, [userID])
    return res.redirect('/')
}

let editUser = async(req, res) => {
    let id = req.params.userID
    let [user] = await pool.execute(`SELECT * FROM users WHERE id=?`, [id])
    return res.render("update.ejs", {user: user[0]})
}

let postEditUser = async(req, res) => {
    const {firstName, lastName, email, address, id} = req.body
    await pool.execute(`UPDATE users SET firstName=?, lastName=?, email=?, address=? WHERE id=?`, [firstName, lastName, email, address, id] )
    return res.redirect('/')
}


module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser,
    deleteUser,
    editUser,
    postEditUser
}