import { connectDB } from "./src/db.js";
import app from "./src/app.js";

const port = 4000;

connectDB();

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
