import loginService from "../services/accountService/loginService.js";
import registerService from "../services/accountService/registerService.js";
import logoutService from "../services/accountService/logoutService.js";
import myProfile from "../services/accountService/myProfileService.js";

const register = async (req, res) => {
    await registerService(req, res);
};

const login = async (req, res) => {
    await loginService(req, res);
};

const logout = async (req, res) => {
    await logoutService(req, res);
};

const myProfile = async (req, res) => {
    await myProfile(req, res);
};

export { register, login, logout, myProfile };