package com.ocean.org.controller;

import com.github.pagehelper.PageInfo;
import com.ocean.org.domain.info;
import com.ocean.org.domain.users;
import com.ocean.org.response.Response;
import com.ocean.org.service.infoService;
import com.ocean.org.utils.JsonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/views/")
public class infoController {
    @Autowired
    private infoService infoService;
    /**
     * 得到分页信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/getAllInfoAjax",produces = "application/json;charset=UTF-8")
    public String getAllInfo(HttpServletRequest request) {
        Integer page=Integer.valueOf(request.getParameter("page"));
        Integer limit=Integer.valueOf(request.getParameter("limit"));
        //初始化响应信息
        Response response=new Response();
        //得到所有召回信息
        PageInfo<info> pageInfo = infoService.getInfo(page, limit);
        //设置响应信息
        response.setCode(0);
        response.setData(pageInfo.getList());
        response.setMsg("得到召回数据的的分页信息");

        return JsonUtils.objectToJson(response);
    }


    /**
     * 得到召回的用户分页信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/getInfoUsersAjax",produces = "application/json;charset=UTF-8")
    public String getInfoUsers(HttpServletRequest request) {
        Integer page=Integer.valueOf(request.getParameter("page"));
        Integer limit=Integer.valueOf(request.getParameter("limit"));
        //初始化响应信息
        Response response=new Response();
        //得到所有召回信息
        PageInfo<users> pageInfo = infoService.getInfoUsers(page, limit);
        //设置响应信息
        response.setCode(0);
        response.setData(pageInfo.getList());
        response.setMsg("得到用户信息");

        return JsonUtils.objectToJson(response);
    }

    /**
     * 得到召回的用户分页信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/getInfoCartsAjax",produces = "application/json;charset=UTF-8")
    public String getInfoCarts(HttpServletRequest request) {
        Integer page=Integer.valueOf(request.getParameter("page"));
        Integer limit=Integer.valueOf(request.getParameter("limit"));
        //初始化响应信息
        Response response=new Response();
        //得到所有召回信息
        PageInfo<users> pageInfo = infoService.getInfoUsers(page, limit);
        //设置响应信息
        response.setCode(0);
        response.setCount(pageInfo.getList().size());
        response.setData(pageInfo.getList());
        response.setMsg("得到兴趣信息");

        return JsonUtils.objectToJson(response);
    }

    /**
     * 根据召回类型得到分页信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/getInfoByTypeAjax",produces = "application/json;charset=UTF-8")
    public String getInfoByType(HttpServletRequest request) {
        Integer page=Integer.valueOf(request.getParameter("page"));
        Integer limit=Integer.valueOf(request.getParameter("limit"));
        String infoType=request.getParameter("infoType");
        //初始化响应信息
        Response response=new Response();
        //得到所有召回信息
        PageInfo<info> pageInfo = infoService.getInfoByType(page,limit,infoType);
        //设置响应信息
        response.setCode(0);
        response.setData(pageInfo.getList());
        response.setMsg("根据召回类型得到召回数据");

        return JsonUtils.objectToJson(response);
    }


    /**
     * 根据用户名得到分页信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/getInfoUserByUsernameAjax",produces = "application/json;charset=UTF-8")
    public String getInfoUserByUsername(HttpServletRequest request) {
        Integer page=Integer.valueOf(request.getParameter("page"));
        Integer limit=Integer.valueOf(request.getParameter("limit"));
        String username=request.getParameter("username");
        //初始化响应信息
        Response response=new Response();
        //得到所有召回信息
        PageInfo<users> pageInfo = infoService.getInfoUserByUsername(page,limit,username);
        //设置响应信息
        response.setCode(0);
        response.setData(pageInfo.getList());
        response.setMsg("根据召回类型得到召回数据");

        return JsonUtils.objectToJson(response);
    }

    /**
     * 根据用户名得到分页信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/delInfoByIdAjax",produces = "application/json;charset=UTF-8")
    public String delInfoById(HttpServletRequest request) {
        Integer id=Integer.valueOf(request.getParameter("id"));
        //初始化响应信息
        Response response=new Response();
        //删除
        infoService.delInfoById(id);
        //设置响应信息
        response.setCode(0);
        response.setMsg("删除一条信息");

        return JsonUtils.objectToJson(response);
    }

    /**
     * 根据用户名得到分页信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/delUsersByIdAjax",produces = "application/json;charset=UTF-8")
    public String delUsersById(HttpServletRequest request) {
        Integer id=Integer.valueOf(request.getParameter("id"));
        //初始化响应信息
        Response response=new Response();
        //删除
        infoService.delUsersById(id);
        //设置响应信息
        response.setCode(0);
        response.setMsg("删除一条召回用户信息");

        return JsonUtils.objectToJson(response);
    }

    /**
     * 更新召回用户
     * @param user
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/updateInfoUserAjax",produces = "application/json;charset=UTF-8")
    public String updateInfoUser(users user){
        Response state=new Response();
        infoService.updateInfoUser(user);
        state.setCode(0);
        state.setCount(1);
        state.setMsg("更新成功");
        return  JsonUtils.objectToJson(state);
    }


    /**
     * 更新召回兴趣
     * @param user
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "info/updateInfoCartsAjax",produces = "application/json;charset=UTF-8")
    public String updateInfoCarts(users user){
        Response state=new Response();
        infoService.updateInfoCarts(user);
        state.setCode(0);
        state.setCount(1);
        state.setMsg("更新成功");
        return  JsonUtils.objectToJson(state);
    }
}
