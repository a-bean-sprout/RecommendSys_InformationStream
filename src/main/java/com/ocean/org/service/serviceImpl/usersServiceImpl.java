package com.ocean.org.service.serviceImpl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ocean.org.domain.users;
import com.ocean.org.service.usersService;
import com.ocean.org.utils.Md5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service层接口的实现
 */
@Service
public class usersServiceImpl implements usersService {

    @Autowired
    private com.ocean.org.dao.usersDao usersDao;
    /**
     * Service层实现  通过名字查找用户
     * @param username
     * @return
     */
    public users selectUserByName(String username) {
        return usersDao.selectUserByName(username);
    }
    /**
     * Service层实现
     * 注册用户
     * @param username
     * @param password
     * @param nickname
     */
    public void addRegisterUser(String username, String password, String nickname) {
        //使用MD5对密码进行加密
        String md5Word= Md5Utils.encryptPassword(username,password,username);
        usersDao.addRegisterUser(username,md5Word,nickname);
    }
    /**
     * Service层实现
     * 得到所有的用户
     * @return
     */
    public List<users> getAllUsers() {
        return usersDao.getAllUsers();
    }

    /**
     * 更新用户
     * @param users
     */
    public void updataUser(users users) {
        usersDao.updateUser(users);
    }

    @Override
    public void updateWebUserState(users user) {
        usersDao.updateWebUserState(user);
    }

    @Override
    public List<users> getUsersByRole(String role) {
        return usersDao.getUsersByRole(role);
    }


    /**
     * 更新用户密码
     * @param username
     * @param password
     */
    public void updatePassword(String username, String password) {
        usersDao.updatePassword(username,password);
    }

    @Override
    public List<users> getUsersByCity(String city) {
        return usersDao.getUsersByCity(city);
    }



    @Override
    public List<users> getUsersFriendsListByUid(Integer uid) {
        //根据用户id得到好友列表id
        List<Integer> fid=usersDao.getFriendsIdByUid(uid);

        if (fid.size()>0) {
            //根据好友id查找用户
            return usersDao.getUserListByListId(fid);
        }else {
            return null;
        }
    }

    @Override
    public List<users> getUsersFansListByUid(Integer uid) {
        //根据用户id得到关注列表id
        List<Integer> fid=usersDao.getFanIdByUid(uid);
        if (fid.size()>0){
            return usersDao.getUserListByListId(fid);
        }else {
            return null;
        }
    }

    @Override
    public users getUserByUid(Integer uid) {
        return usersDao.getUserByUid(uid);
    }

    @Override
    public void updateUserCart(users users) {
        usersDao.updateUserCart(users);
    }

    @Override
    public List<users> getUsersBlackListByUid(Integer uid) {
        //根据用户id得到其黑名单list
        List<Integer> bid=usersDao.getBlackListIdByUid(uid);
        if (bid.size()>0){
        return usersDao.getUserListByListId(bid);
        }else {
            return null;
        }
    }

    @Override
    public void attentionUser(Integer uid, Integer rid) {
        usersDao.attentionUser(uid,rid);
    }

    @Override
    public void unAttentionUser(Integer uid, Integer rid) {
        usersDao.unAttentionUser(uid,rid);
    }

    @Override
    public void addUserInBlackList(Integer uid, Integer bid) {
        usersDao.addUserInBlackList(uid,bid);
    }

    @Override
    public List<String> getAllUserName() {
        return usersDao.getAllUserName();
    }

    @Override
    public List<users> getUserListByListId(List<Integer> id) {
        return usersDao.getUserListByListId(id);
    }

    @Override
    public PageInfo<users> getUserByPage(Integer PageNum, Integer PageSize) {
        //PageHelper的过滤条件
        PageHelper.startPage(PageNum, PageSize);
        //过滤器是对查询数据进行过滤
        List<users>  res=usersDao.getAllUsers();
        PageInfo<users> result=new PageInfo<users>(res);
        return result;
    }
    @Override
    public void updateIfOldUser(String username,boolean ifOldUser){}


}
