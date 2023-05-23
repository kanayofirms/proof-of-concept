const requiresAuth = (req, res, next) => {
    if (req?.session?.userId) {
        next();
    } else {
        return res.status(401).json({ authed: "false", message: "You Are Not Logged In" });
    }
};

export default requiresAuth;