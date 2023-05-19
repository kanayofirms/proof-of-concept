import loginService from "../services/accountService/loginService.js";
import registerService from "../services/accountService/registerService.js";

const register = async (req, res) => {
    await registerService(req, res);
};

const login = async (req, res) => {
    await loginService(req, res);
};

export { register, login };