package com.ocean.org.service.serviceImpl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ocean.org.dao.infoDao;
import com.ocean.org.dao.usersDao;
import com.ocean.org.domain.info;
import com.ocean.org.domain.users;
import com.ocean.org.service.infoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class infoServiceImpl implements infoService {
    @Autowired
    private infoDao infoDao;

    @Autowired usersDao usersDao;


    @Override
    public PageInfo<info> getInfo(Integer PageNum, Integer PageSize) {
        //PageHelper的过滤条件
        PageHelper.startPage(PageNum, PageSize);
        //过滤器是对查询数据进行过滤
        List<info> res= infoDao.getAllInfo();
        PageInfo<info> result=new PageInfo<info>(res);
        return result;
    }

    @Override
    public PageInfo<users> getInfoUsers(Integer PageNum, Integer PageSize) {
        //PageHelper的过滤条件
        PageHelper.startPage(PageNum, PageSize);
        //过滤器是对查询数据进行过滤
        List<users> res= usersDao.getAllUsers();
        PageInfo<users> result=new PageInfo<users>(res);
        return result;
    }

    @Override
    public PageInfo<info> getInfoByType(Integer PageNum, Integer PageSize, String infoType) {
        //PageHelper的过滤条件
        PageHelper.startPage(PageNum, PageSize);
        //过滤器是对查询数据进行过滤
        List<info> res= infoDao.getInfoByType(infoType);
        PageInfo<info> result=new PageInfo<info>(res);
        return result;
    }

    @Override
    public PageInfo<users> getInfoUserByUsername(Integer PageNum, Integer PageSize, String username) {
        //PageHelper的过滤条件
        PageHelper.startPage(PageNum, PageSize);
        //过滤器是对查询数据进行过滤
        List<users> res=infoDao.getInfoUserByUsername(username);
        PageInfo<users> result=new PageInfo<users>(res);
        return result;
    }

    @Override
    public void delInfoById(Integer id) {
        infoDao.delInfoById(id);
    }

    @Override
    public void delUsersById(Integer id) {
        infoDao.delUsersById(id);
    }

    @Override
    public void updateInfoUser(users users) {
        infoDao.updateInfoUser(users);
    }

    @Override
    public void updateInfoCarts(users users) {
        infoDao.updateInfoCarts(users);
    }
}
