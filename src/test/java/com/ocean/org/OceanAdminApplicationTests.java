package com.ocean.org;

import com.ocean.org.dao.infoDao;
import org.apache.commons.io.IOUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.tensorflow.Graph;
import org.tensorflow.Session;
import org.tensorflow.*;
import java.io.File;

import java.io.FileInputStream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OceanAdminApplicationTests {

@Autowired
private infoDao infoDao;

	@Test
	public void contextLoads() {
		System.out.println("Wrong!");

	}

	@Test
	public void getInfo(){
		infoDao.delUsersById(11);
	}

}
