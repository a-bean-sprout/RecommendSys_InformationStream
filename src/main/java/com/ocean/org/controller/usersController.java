package com.ocean.org.controller;

import com.github.pagehelper.PageInfo;
import com.ocean.org.domain.Data;
import com.ocean.org.domain.users;
import com.ocean.org.domain.user;
import com.ocean.org.domain.Material;
import com.ocean.org.response.Response;
import com.ocean.org.service.usersService;
import com.ocean.org.service.InvertMidService;
import com.ocean.org.utils.JsonUtils;
import com.ocean.org.utils.Md5Utils;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedList;
import java.util.List;

/**
 * 对用户的交互操作
 */
@Controller
@RequestMapping("/views/")
public class usersController {
    @Autowired
    private usersService usersService;

    private InvertMidService  InvertMidService;



    /**
     * 用户登录
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "user/Login",produces="application/json;charset=UTF-8")
    public String login(HttpServletRequest httpServletRequest){

        String username=httpServletRequest.getParameter("username");
        String password=httpServletRequest.getParameter("password");
        Response response=new Response();

        users user=usersService.selectUserByName(username);

        if (user.getPassword().equals(Md5Utils.encryptPassword(username,password,username))){

            if(!user.getIfOldUser()){
                String firstInterest = user.getFinterest();
                String secondInterest = user.getSinterest();
                String thirdInterest = user.getTinterest();

                if(firstInterest == null && secondInterest == null && thirdInterest ==null)
                    user.setIfOldUser(false);

                else {
                    String totalInterest= firstInterest +","+ secondInterest + "," + thirdInterest ;
                    String[] listInterest = totalInterest.trim().split(",");
                    boolean ifOldUser=false;

                    for (int i =0 ;i <listInterest.length ;i++){
                        String strWeight=listInterest[i].split(":")[1];
                        double douWeight = Double.parseDouble(strWeight);
                        if( douWeight>0.2 ){
                            ifOldUser = true;
                            usersService.updateIfOldUser(username,ifOldUser);
                            break;
                        }
                    }

                    user.setIfOldUser(ifOldUser);
                }
            }
            response.setCode(0);
            response.setMsg("成功登陆");
            List<users> usersList=new LinkedList<users>();
            usersList.add(user);
            response.setData(usersList);
        }
        else {
            response.setCode(1);
            response.setMsg("登陆失败");
        }

        System.out.printf(JsonUtils.objectToJson(response));

        return JsonUtils.objectToJson(response);
    }
    /**
     * 用户注册
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "user/Register",produces = "application/json;charset=UTF-8")
    public String Register(HttpServletRequest httpServletRequest){
        String username=httpServletRequest.getParameter("username");
        String password=httpServletRequest.getParameter("password");
        String nickname=httpServletRequest.getParameter("nickname");

        //初始化响应
        Response response=new Response();
        //查找用户 如果不存在就添加用户
        users user=usersService.selectUserByName(username);

        if (user!=null){
            response.setMsg("用户名已经存在，请重新输入用户名");
            response.setCode(1);
        }else {
            usersService.addRegisterUser(username,password,nickname);
            response.setMsg("注册成功");
            response.setCode(0);
        }
        return JsonUtils.objectToJson(response);
    }


    /**
     * 得到分页用户
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "user/user/GetWebUsers",produces = "application/json;charset=UTF-8")
    public String getAllUsers(HttpServletRequest request) {
        Integer page=Integer.valueOf(request.getParameter("page"));
        Integer limit=Integer.valueOf(request.getParameter("limit"));

        //初始化响应信息
        Response response=new Response();

        //得到所有用户分页
        PageInfo<users> pageInfo = usersService.getUserByPage(page, limit);
        //设置响应信息
        response.setCode(0);
        response.setData(pageInfo.getList());
        response.setMsg("得到用户的分页信息");

        return JsonUtils.objectToJson(response);
    }

    /**
     * 审核网站用户
     * @param user
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "user/user/updateWebUserStateAjax",produces = "application/json;charset=UTF-8")
    public String updateUser(users user){
        Response state=new Response();
        usersService.updateWebUserState(user);
        state.setCode(0);
        state.setCount(1);
        state.setMsg("更新成功");

        return  JsonUtils.objectToJson(state);
    }


    /**
     * 得到管理员用户
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "user/user/GetManagerUsers",produces = "application/json;charset=UTF-8")
    public String getUsersByRole(HttpServletRequest request) {
        String role=request.getParameter("role");
        //初始化响应信息
        Response response=new Response();

        //得到管理员用户
        List<users> users = usersService.getUsersByRole(role);
        //设置响应信息
        response.setCode(0);
        response.setData(users);
        response.setMsg("得到管理员用户");
        return JsonUtils.objectToJson(response);
    }


    /**
     * 更新用户信息 兴趣
     * @param users
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "set/user/updateUserCart",produces = "application/json;charset=UTF-8")
    public String updateUserCart( users users) {
        //初始化响应信息
        Response response=new Response();
        //更新用户
        usersService.updateUserCart(users);
        //设置响应信息
        response.setCode(0);
        response.setMsg("更新用户信息");
        return JsonUtils.objectToJson(response);
    }

    /**
     * 登录用户推荐流程
     * @param user
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "set/user/indexs",produces = "application/json;charset=UTF-8")
    public String userRecommend(user user) {

        Set<String> multiRecallSet = new HashSet<>();

        Set<String> contentRecallSet= contentRecall(user);
        multiRecallSet.addAll(contentRecallSet);

        if(user.getIfOldUser()){
            Set<String> userRecall= userRecall(user);
            multiRecallSet.addAll(userRecall);
        }

        Set<String> materialRecallSet= materialRecall(user);
        multiRecallSet.addAll(materialRecallSet);

        multiRecallSet=listDropPushed(multiRecallSet);

        while((multiRecallSet.size()< 50)){

            Set<String> hotRecallSet=hotRecall(20);
            hotRecallSet=listDropPushed(hotRecallSet);
            multiRecallSet.addAll(hotRecallSet);
        }

        List<Material> sortMaterial=sortByCtr(multiRecallSet);

        String[] pushMids=diversifyList(sortMaterial);

        String materialsJson=weiboMaterialJson(pushMids);

        return materialsJson;
    }

    // 多样化
    public String[] diversifyList(List<Material> sortedMaterial){
        String[] pushMids=new String[20];
        List<Material> pushMaterial = new ArrayList<>();
        pushMaterial.add(sortedMaterial.get(0));
        sortedMaterial.remove(0);
        pushMids[0]=pushMaterial.get(0).getMid();
        int i=1;
        while(i<pushMids.length){
            float max=-100.0f;
            int maxIndex=0;
            for(int j=0;j<sortedMaterial.size();j++){
                float score=calDiverityScore(sortedMaterial.get(j),pushMaterial);
                if(score>max) {
                    max=score;
                    maxIndex=j;
                }
            }
            pushMaterial.add(sortedMaterial.get(maxIndex));
            sortedMaterial.remove(maxIndex);
            pushMids[i]=pushMaterial.get(i).getMid();
            i++;
        }
        return pushMids;
    }

    public  float calDiverityScore(Material x,List<Material> pushMaterials){
        float a=0.0f;
        return  a;
    }

    // 通过用户个人信息或隐式兴趣召回
    public Set<String> contentRecall(user user){

        Set<String> contentRecallSet = new HashSet<>();

        if(user.getIfOldUser()){
            String[] intertestClass= new String[3];
            intertestClass[0]=user.getFinterest();
            intertestClass[1]=user.getSinterest();
            intertestClass[2]=user.getTinterest();
            for(String interest : intertestClass){
                String[] tagWeightStrs = interest.trim().split(",");

                Map<String, Double>  tagWeightMap= new HashMap<>();
                double sumWeight= 0.0;
                for(String tagWeightStr: tagWeightStrs){
                    String[] tagWeight=tagWeightStr.split(":");
                    double weight=Double.parseDouble(tagWeight[1]);
                    if(weight < 0.2) continue;
                    String tag=tagWeight[0];
                    tagWeightMap.put(tag,weight);
                    sumWeight+=weight;
                }

                for(Map.Entry<String,Double> entry : tagWeightMap.entrySet()){
                    String tag=entry.getKey();
                    int num = (int)(entry.getValue()/sumWeight*200);
                    String midsStr=InvertMidService.getMidsBytag(tag);
                    Set<String> midsSet=randomMids(midsStr,num);
                    contentRecallSet.addAll(midsSet);
                }
            }
        }
        else {
            String[] favoriteCats= new String[3];
            favoriteCats[0]=user.getFavoriteCat1();
            favoriteCats[1]=user.getFavoriteCat2();
            favoriteCats[2]=user.getFavoriteCat3();
            for(String favoriteCat:favoriteCats){
                String midsStr=InvertMidService.getMidsBytag(favoriteCat);
                Set<String> midsSet=randomMids(midsStr,67);
                contentRecallSet.addAll(midsSet);
            }
        }
        return contentRecallSet;
    }


    // 调用用户群体id，访问用户群体表获取物料id
    public Set<String> userRecall(user user){
        Set<String> a = new HashSet<>();
        return a;
    }
    // 访问用户行为表,20条物料id，获取物料相关id列表。
    public Set<String> materialRecall(user user){
        Set<String> a = new HashSet<>();
        return a;
    }
    // 访问用户推送表，去重处理
    public Set<String> listDropPushed(Set<String> recallSet){
        Set<String> a = new HashSet<>();
        return a;
    }
    // 判断条数，加入热门物料
    public Set<String>hotRecall(int recallNum){
        Set<String> a = new HashSet<>();
        return a;
    }
    // 排序
    public List<Material> sortByCtr(Set<String> recall){
        List<Material> x1 = new LinkedList<>();
        return  x1;
    }

    public String weiboMaterialJson(String[] materials){
        return "m";
    }

    public Set<String> randomMids(String mids,int num){
        Set<String> a = new HashSet<>();
        return a;
    }
}
