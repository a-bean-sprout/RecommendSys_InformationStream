package com.ocean.org.service.serviceImpl;

import org.tensorflow.*;
import java.io.*;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import com.ocean.org.service.CalCtrService;

public class CalCtrServicelmpl implements CalCtrService {

    @Override
    public float[] LRCalCtr(int[][] featIndex,float[][] featValue,String modelPath){



        Map<Integer, Float> featWeight = new HashMap<>();
        try {
            InputStream in=new FileInputStream(modelPath);
            BufferedReader br = new BufferedReader(new InputStreamReader(in));
            String line;
            while ((line = br.readLine()) != null) {
                String[] lineSplitted = line.trim().split("=");
                if (lineSplitted.length == 2) {
                    int index=Integer.valueOf(lineSplitted[0]);
                    float weight=Float.parseFloat(lineSplitted[1]);
                    featWeight.put(index,weight);
                }
            }
            br.close();
            in.close();
        } catch (IOException e) {
            System.out.println(e);
        }

        float[] res=new float[featIndex.length];

        for(int i=0;i<featIndex.length;i++){
            float resOne=featWeight.get(0);
            for(int j=0;j<featIndex[0].length;j++){
                resOne+=featWeight.get(featIndex[i][j])*featValue[i][j];
            }
            res[i]=(float)(1/(1+Math.exp(-resOne)));
        }
        return res;
    }

    @Override
    public float[] DeepFMCalCtr(int[][] featIndex,float[][] featValue,String modelPath,Map<String, Object> Hyperparameter){

        float[] res = new float[featIndex.length];

        try(Graph graph = new Graph()){
            byte[] graphBytes = IOUtils.toByteArray(new FileInputStream(modelPath));
            graph.importGraphDef(graphBytes);

            try(Session session = new Session(graph)) {
                Tensor<?> out = session.runner()
                        .feed("feat_index", Tensor.create(featIndex))
                        .feed("feat_value", Tensor.create(featValue))
                        .feed("dropout_keep_fm", Tensor.create(Hyperparameter.get("dropout_keep_fm")))
                        .feed("dropout_keep_deep", Tensor.create(Hyperparameter.get("dropout_keep_deep")))
                        .feed("train_phase", Tensor.create(Hyperparameter.get("train_phase")))
                        .fetch("results").run().get(0);
                out.copyTo(res);
            }
        } catch (IOException e) {
            System.out.println(e);
        }

        return res;
    }

}
