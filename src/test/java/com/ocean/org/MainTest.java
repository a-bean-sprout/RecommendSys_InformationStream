package com.ocean.org;

import org.junit.Test;
import com.ocean.org.service.serviceImpl.CalCtrServicelmpl;

import java.util.HashMap;
import java.util.Map;


public class MainTest {

    @Test
    public void main_test(){

        int[][] featIndex={{2,3},{1,2}};
        float[][] featValue={{1,1},{1,1}};
        String modelPath="src/main/resources/static/model/LR_model";

        CalCtrServicelmpl model=new CalCtrServicelmpl();
        float[] res=model.LRCalCtr(featIndex,featValue,modelPath);
        for(int i=0;i<res.length;i++)
            System.out.println(res[i]);

        Map<String, Object> test = new HashMap<>();
        test.put("1","ddd");
        test.put("2",3);
        model.DeepFMCalCtr(featIndex,featValue,modelPath,test);



    }
    
}
