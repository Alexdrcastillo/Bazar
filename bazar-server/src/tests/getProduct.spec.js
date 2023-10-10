const router = require("../routes/routes.js")
const request = require("supertest")

const api = request(router)

test("comprobar numero de state 200", async () => {
      await api.get("/products"); console.log(api)
     
         
})