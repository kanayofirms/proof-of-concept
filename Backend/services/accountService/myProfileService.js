import prisma from "../../constants/config.js";

const myProfile = async (req, res) => {
    try{
        const userAccount = await prisma.user.findUnique({
            where: {
                id: req?.session?.userId,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                userRole: true,
            },
        });

        //if account does not exist
        if (!userAccount) return res.status(401).json({ authed: False });

        return res.status(200).json({
            authed: true,
            userAccount,
        });
    } catch(e) {
        console.log(e);
        return res.status(400).json({ message: "Something Went Wrong"});
    }
};

export default myProfile;