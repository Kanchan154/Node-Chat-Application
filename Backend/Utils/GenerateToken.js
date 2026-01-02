import jwt from "jsonwebtoken";

const generatetikenandSetCookie = (userID, res) => {
    const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, //prevent XSS attacks cross-site scrypting attaks
        sameSite: "strict", //CSRF attacks cross-site requests forgrey attacks
        secure : process.env.NODE_ENV !== "development",
    });
}

export default generatetikenandSetCookie;