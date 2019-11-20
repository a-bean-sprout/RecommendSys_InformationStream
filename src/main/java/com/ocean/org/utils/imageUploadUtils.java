package com.ocean.org.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Random;

public class imageUploadUtils {
    /**
     * 处理上传文件
     * @param file
     * @param path
     * @return
     */
    public static String upLoadFile(MultipartFile file, String path) throws IOException {
        String name=file.getOriginalFilename();//上传文件的路径
        //获取后缀名
        String suffixName=name.substring(name.lastIndexOf("."));
        //随机数字作为后缀名
        String hash=Integer.toHexString(new Random().nextInt());
        String fileName=hash+suffixName;

        //存入文件
        File tempFfile=new File(path,fileName);
        if (!tempFfile.getParentFile().exists()){
            tempFfile.getParentFile().mkdir();
        }

        if (tempFfile.exists()){
            tempFfile.delete();
        }

        tempFfile.createNewFile();
        file.transferTo(tempFfile);
        return tempFfile.getName();

    }
}
