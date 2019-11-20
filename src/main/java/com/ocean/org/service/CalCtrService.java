package com.ocean.org.service;
import java.util.HashMap;
import java.util.Map;

public interface CalCtrService {
    /**
     *
     * @param featIndex，特征索引矩阵
     * @param featValue，特征值矩阵
     * @param modelPath，模型存储地址
     * @return res，用户对物料的喜好值列表
     */
    public float[] LRCalCtr(int[][] featIndex,float[][] featValue,String modelPath);

    /**
     *
     * @param featIndex，特征索引矩阵
     * @param featValue，特征值矩阵
     * @param modelPath，模型存储路径
     * @param Hyperparameter，DeepFM超参数
     * @return res，用户对物料的喜好值列表
     */
    public float[] DeepFMCalCtr(int[][] featIndex, float[][] featValue, String modelPath, Map<String, Object> Hyperparameter
    );
}
