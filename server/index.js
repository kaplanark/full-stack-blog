import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("kaplanark blog");
});

const PORT = process.env.PORT || 5000;

const CONNECTİON_URL =
  "mongodb+srv://kaplanark:59ayx9sd.5445@cluster0.kf5k9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTİON_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is runing on port:${PORT}`);
    });
  })
  .catch(() => {
    console.error(error.message);
  });
