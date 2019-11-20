package com.ocean.org.service;


import com.github.pagehelper.PageInfo;
import com.ocean.org.domain.users;
import org.apache.ibatis.annotations.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 用户的操作接口
 */
public interface usersService{

    @Transactional
    void updateIfOldUser(String username,boolean ifOldUser);

    /**
     * Service层  通过name找到密码
     * @param username
     * @return
     */
    @Transactional
    users selectUserByName(String username);


    /**
     * Sercvice层 注册用户
     * @param username
     * @param password
     * @param nickname
     */
    @Transactional
    void addRegisterUser(String username, String password, String nickname);

    /**
     * 得到所用的用户信息
     * @return
     */
    @Transactional
    List<users> getAllUsers();


    /**
     * 更新用户信息
     * @param users
     */
    @Transactional
    void updataUser(users users);


    /**
     * 审核网站用户
     * @param user
     */
    @Transactional
    void updateWebUserState(users user);

    /**
     * 根据角色得到用户
     * @return
     */
    List<users> getUsersByRole(@Param("role") String role);



    /**
     * 更新用户密码
     * @param
     */
    @Transactional
    void updatePassword(String username, String password);

    /**
     * 根据城市名得到用户
     * @param city
     * @return
     */
    @Transactional
    List<users> getUsersByCity(@Param("city") String city);




    /**
     * 根据用户id的到其好友列表
     * @param uid
     * @return
     */
    @Transactional
    List<users> getUsersFriendsListByUid(Integer uid);

    /**
     * 根据用户id的到其粉丝列表
     * @param uid
     * @return
     */
    @Transactional
    List<users> getUsersFansListByUid(Integer uid);


    /**
     * 根据用户id得到用户
     * @param uid
     * @return
     */
    @Transactional
    users getUserByUid(Integer uid);


    /**
     * 更新用户信息
     * @param users
     */
    void updateUserCart(users users);







    /**
     * 根据用户id的到其黑名单
     * @param uid
     * @return
     */
    @Transactional
    List<users> getUsersBlackListByUid(Integer uid);


    /**
     * 关注用户
     * @param uid 用户
     * @param rid 被关注着
     */
    @Transactional
    void attentionUser(Integer uid, Integer rid);

    /**
     * 取消关注用户
     * @param uid 用户
     * @param rid 被关注着
     */
    @Transactional
    void unAttentionUser(Integer uid, Integer rid);


    /**
     * 将用户加入黑名单
     * @param uid
     * @param bid
     */
    @Transactional
    void addUserInBlackList(@Param("uid") Integer uid, @Param("bid") Integer bid);



    /**
     * @功能 得到所有的系统名
     * @return
     */
    @Transactional
    List<String> getAllUserName();

    /**
     * 根据List id 批量得到用户
     * @param id
     * @return
     */
    @Transactional
    List<users> getUserListByListId(List<Integer> id);


    /**
     * 分页查找
     * @param PageNum
     * @param PageSize
     * @return
     */
    @Transactional
    PageInfo<users> getUserByPage(Integer PageNum, Integer PageSize);


}
