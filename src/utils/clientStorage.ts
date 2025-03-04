export const clientStorage = {
	getToken: () => {
		return localStorage.getItem("token");
	},
	setToken: (token: string) => {
		localStorage.setItem("token", token);
	},
	setEmail: (email: string) => {
		sessionStorage.setItem("email", email);
	},
	getEmail: () => {
		return sessionStorage.getItem("email");
	},
};

(async () => {})();
