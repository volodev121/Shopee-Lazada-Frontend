

const auth = {
    setAuth: (token: string) => {
        localStorage.setItem("bougthnex-web-application", token)
    },
    getToken: () => {
        return localStorage.getItem("bougthnex-web-application")
    },
    removeToken: () => {
        localStorage.removeItem("bougthnex-web-application")
    }
}


export default auth