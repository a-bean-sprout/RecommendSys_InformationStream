package com.ocean.org.service;


import com.github.pagehelper.PageInfo;
import com.ocean.org.domain.info;
import com.ocean.org.domain.users;
import org.apache.ibatis.annotations.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 召回操作接口
 */
public interface infoService {



    /**
     * 分页查找 召回信息
     * @param PageNum
     * @param PageSize
     * @return
     */
    @Transactional
    PageInfo<info> getInfo(Integer PageNum, Integer PageSize);

    /**
     * 得到召回的用户信息
     * @return
     */
    @Transactional
    PageInfo<users> getInfoUsers(Integer PageNum, Integer PageSize);



    /**
     * 根据类型查找召回信息
     * @param infoType
     * @return
     */
    PageInfo<info>  getInfoByType(Integer PageNum, Integer PageSize,String infoType);

    /**
     * 根据类型查找召回信息
     * @param username
     * @return
     */
    PageInfo<users>  getInfoUserByUsername(Integer PageNum, Integer PageSize,String username);

    /**
     * 删除一个召回信息
     */
    void delInfoById (Integer id);


    /**
     * 删除召回用户数据信息
     * @param id
     */
    void delUsersById(Integer id);
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
