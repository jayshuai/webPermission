import service from "@/service.js";

export const login = (data) => {
    return service({
        url: '/login',
        method: 'post',
        data: data
    })
}