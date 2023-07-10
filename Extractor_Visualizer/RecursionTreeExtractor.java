package Extractor_Visualizer;


import java.io.FileWriter;
import java.io.IOException;

public class RecursionTreeExtractor {

    StringBuilder ToBeJSON = new StringBuilder("") ;
    


    public void addNewCall (Object... param) {

        // parameters potion
        ToBeJSON.append("{\"param\":[");
        for (Object object : param) {
            ToBeJSON.append("\""+object.toString()+"\",");
        }
        if(ToBeJSON.charAt(ToBeJSON.length()-1)==','){
            ToBeJSON.deleteCharAt(ToBeJSON.length()-1);
        }
        ToBeJSON.append("],");

        // 
        ToBeJSON.append("\"next\":[");



    }

    public <T> T addNewReturn (T returnVal){
        if(ToBeJSON.charAt(ToBeJSON.length()-1)==','){
            ToBeJSON.deleteCharAt(ToBeJSON.length()-1);
        }
        ToBeJSON.append("],");
        ToBeJSON.append("\"returns\":");
        ToBeJSON.append("\""+returnVal.toString()+"\"");
        ToBeJSON.append("},");

        return returnVal;

    }

    public void CreateJSON (String fileName){
        ToBeJSON.deleteCharAt(ToBeJSON.length()-1);
        try (FileWriter fw = new FileWriter(fileName);) {
            fw.write(ToBeJSON.toString());
        } catch (IOException e) {
            System.out.println("IO Exception");
        }
    }

    public void CreateJSON (){
        CreateJSON("Registry.JSON");
    }

    public static void CreateJSON(RecursionTreeExtractor rr){
        rr.CreateJSON();
    }

    public static void CreateJSON(RecursionTreeExtractor rr,String fileName){
        rr.CreateJSON(fileName);
    }

    
    // FOR TESTING ONLY
    public static void main(String[] args) {
        RecursionTreeExtractor rr = new RecursionTreeExtractor();
        rr.addNewCall(12,13,14);
        rr.addNewCall(12,13,14);
        rr.addNewCall(12,13,14);

        rr.addNewReturn(1);

        rr.addNewCall(12,13,14);

        rr.addNewReturn(1);
        rr.addNewReturn(1);

        rr.addNewCall(12,13,14);
        rr.addNewCall(12,13,14);
        
        rr.addNewReturn(1);

        rr.addNewCall(12,13,14);

        
        rr.addNewReturn(1);
        rr.addNewReturn(1);
        rr.addNewReturn(1);


        rr.CreateJSON();

    }


}