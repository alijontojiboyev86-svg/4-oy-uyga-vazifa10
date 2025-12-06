const {Router} = require("express")
const { get_one_data, add_data, update_data, delete_data, getAll_data,} = require("../controller/data.controller")


const dataRouter = Router()


dataRouter.get("/get_all_data",getAll_data)
dataRouter.get("get_one_data/:id",get_one_data)
dataRouter.post("/add_data",add_data)
dataRouter.put("/update_data",update_data)
dataRouter.delete("/delete_data",delete_data)


module.exports = dataRouter


