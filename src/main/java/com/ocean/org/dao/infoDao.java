package com.ocean.org.dao;

import com.ocean.org.domain.info;
import com.ocean.org.domain.users;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface infoDao {
    /**
     * 得到所有的用户信息
     * @return
     */
    List<info> getAllInfo();

    /**
     * 得到召回的用户信息
     * @return
     */
    List<users> getInfoUsers();

    /**
     * 根据类型查找召回信息
     * @param infoType
     * @return
     */
    List<info>  getInfoByType(@Param("infoType") String infoType);

    List<users> getInfoUserByUsername(@Param("username") String username);

    /**
     * 删除一个召回信息
     */
    void delInfoById (@Param("id")Integer id);

    /**
     * 删除召回用户数据信息
     * @param id
     */
    void delUsersById (Integer id);

    /**
     * 更新召回用户信息
     * @param users
     */
    void updateInfoUser(users users);

    /**
     * 更新用户兴趣信息
     * @param users
     */
    void updateInfoCarts(users users);

}
