import app from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT);
console.log("Server corriendo en el puerto ", PORT);
