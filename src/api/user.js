import service from "../utils/request";


// @Summary 获取用户列表
// @Produce  application/json
// @Param 可以什么都不填 调一下即可
// @Router /v1/user/users [get]
export const getAllUserInfo = () => {
    return service({
      url: "/v1/user/users",
      method: "get",
    });
  };


// @Summary 获取用户menu关联关系
// @Produce  application/json
// @Param authorityId string
// @Router /v1/user/userid/4 [get]
export const getUserInfoById = (uid) => {
    return service({
    //   url: `/menu/${aid}/getMenuByAuthID`,
      url: `/v1/user/userid/${uid}`,
      method: "get",
    });
  }; 

// @Summary 修改menu列表
// @Produce  application/json
// @Param menu Object
// @Router /menu/updateBaseMenu [post]
export const updateBaseMenu = (data) => {
    return service({
      url: "/menu/updateBaseMenu",
      method: "post",
      data,
    });
  };

  export function login(params) {
    return service.post("/user/login", params);
  }
  
  export function getINfo() {
    return service.get("/user/getinfo");
  }
  
  export function logout() {
    return service.get("/user/loginout");
  }
// 删除用户
export const deleteUser = (uid) => {
    return service({
      url: `/user/${uid}/delete_user`,
      method: "delete",
    });
  };
// 重置密码
export const resetPassword = (uid) => {
    return service({
      url: `/user/${uid}/reset_pwd`,
      method: "put",
    });
  };
// 注册用户
export const GetDeptByPage = (data) => {
    return service({
      url: `/user/getDeptByPage`,
      method: "post",
      data,
    });
  };

export const getSysOperationRecordList = (query) => {
    return service({
      url: "/operation/get_operations",
      method: "get",
      params: query,
    });
  };        