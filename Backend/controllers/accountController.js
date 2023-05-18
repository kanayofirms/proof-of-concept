import registerService from "../services/accountServices/registerService";

const register = async (req, res) => {
    await registerService(req, res);
};

export { register };