import prisma from "../../constants/config.js";
import bcrypt from "bcryptjs";

const loginService = async (req, res) => {
    const { email, password } = req.body;
   try{
    //check if email exists
    const userAccount = await prisma.user.findUnique({
        where: {
            email: email.toLowerCase(),
        },
    });
    if (!user) {
        return res.status(400).json({
            authed: false,
            message: "Invalid Credentials",
        });
    }
    //if the userId is correct
    req.session.userId = userAccount.id;
    return res.status(200).json({
        message: req.session.userId,
    });
   } catch (e) {
    console.log(e);
    return res.status(401).json({
        authed: false,
        message: "Something Went Wrong",
    })
   }
};

export default loginService;