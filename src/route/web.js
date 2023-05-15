import {getHomePage, getDetailPage, createNewUser, deleteUser, editUser, postEditUser} from "../controller/homeController"
import express from "express"

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', getHomePage) 
    router.get('/about', (req, res) => {
        res.send(`I'm Eric!`)
    })
    router.get('/detail/user/:userID', getDetailPage)
    router.get('/edit/:userID', editUser)
    router.post('/create-new-user', createNewUser)
    router.post('/delete-user', deleteUser)
    router.post('/update-user', postEditUser)

    return app.use("/", router)
}


module.exports = initWebRoute;