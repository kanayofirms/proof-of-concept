const logoutService = async (req, res) => {
    try {
        if (req?.session?.userId) {
            req.session.destroy();
            return res.status(401).json({
                message: "Logged Out",
            });
        } else {
            return res.status(401).json({
                message: "Not Logged In",
            });
        }
    } catch (e) {
        return res.status(401).json({
            message: "Something Went Wrong",
        });
    }
};

export default logoutService;