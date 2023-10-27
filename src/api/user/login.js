
import service from "../../utils/request";

export function login(data) {
    return service({
        url: '/v1/user/login',
        method: 'post',
        data
    })
}