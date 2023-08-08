import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());

app.get("/set-cookies", async (req, res) => {
    res.cookie('session', 'user.access_token', { httpOnly: false, sameSite: 'none', secure: true });
    res.cookie('session_refresh', 'user.refresh_token', { httpOnly: false, sameSite: 'none', secure: true });
    res.json({ message: "Cookies set successfully" })
})

app.get("/get-cookies", async (req, res) => {
    const cookies = req.cookies;
    res.json(cookies);
})

app.get("/remove-cookies", async (req, res) => {
    res.clearCookie('session');
    res.clearCookie('session_refresh');
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
})