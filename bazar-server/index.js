const { connectDB } = require("./src/db.js")
const app = require("./src/app.js");

const port = 4000;

connectDB();


app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
