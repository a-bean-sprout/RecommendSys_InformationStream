package com.ocean.org.dao;


import com.ocean.org.domain.users;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 关于用户的Dao层接口
 */
@Repository
@Mapper
public interface usersDao {

    /**
     * 根据用户名查找用户密码
     * @param username
     * @return
     */
    users selectUserByName(@Param("username") String username);

    /**
     * 增加用户
     * @param user
     */
    void addUser(users user);

    /**
     * 注册用户
     * @param username
     * @param password
     * @param nickname
     */
    void addRegisterUser(@Param("username") String username, @Param("password") String password, @Param("nickname") String nickname);


    /**
     * 得到所有的用户信息
     * @return
     */
    List<users> getAllUsers();

    /**
     * 修改用户信息
     * @param user
     */
    void updateUser(users user);

    /**
     * 审核网站用户
     * @param user
     */
    void updateWebUserState(users user);

    /**
     * 更新用户密码
     * @param
     */
    void updatePassword(@Param("username") String username, @Param("password") String password);

    /**
     * 根据城市名得到用户
     * @param city
     * @return
     */
    List<users> getUsersByCity(@Param("city") String city);

    /**
     * 根据角色得到用户
     * @return
     */
    List<users> getUsersByRole(@Param("role") String role);


    /**
     * 根据用户id得到用户
     * @param uid
     * @return
     */
    users getUserByUid(@Param("uid") Integer uid);


    /**
     * 更新用户信息
     * @param users
     */
    void updateUserCart(users users);






    /**
     * 根据用户id得到其粉丝的id列表
     * @param uid
     * @return
     */
    List<Integer> getFanIdByUid(@Param("uid") Integer uid);

    /**
     * 根据用户id得到其通讯录id列表  返回结果为List
     * @param uid
     * @return
     */
    List<Integer> getFriendsIdByUid(@Param("uid") Integer uid);

    /**
     * 根据用户id得到其黑名单id  返回结果为List
     * @param uid
     * @return
     */
    List<Integer> getBlackListIdByUid(@Param("uid") Integer uid);


    /**
     * 根据List id 批量得到用户
     * @param id
     * @return
     */
    List<users> getUserListByListId(List<Integer> id);


    /**
     * 关注用户
     * @param uid 用户
     * @param rid 被关注着
     */
    void attentionUser(@Param("uid") Integer uid, @Param("rid") Integer rid);

    /**
     * 取消关注用户
     * @param uid 用户
     * @param rid 被关注着
     */
    void unAttentionUser(@Param("uid") Integer uid, @Param("rid") Integer rid);


    /**
     * 将用户加入黑名单
     * @param uid
     * @param bid
     */
    void addUserInBlackList(@Param("uid") Integer uid, @Param("bid") Integer bid);




    /**
     * @功能 得到所有的系统名
     * @return
     */
    List<String> getAllUserName();

}
