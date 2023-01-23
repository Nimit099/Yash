public with sharing class customMetadata {
    public customMetadata() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Progress_Indicator__mdt> getProgressindicator(){
        return Progress_Indicator__mdt.getAll().values();
       
    }
    @AuraEnabled(cacheable=true)
    public static List<	Captcha_Type__mdt> getCaptchatype(){
        return Captcha_Type__mdt.getAll().values();
       
    }
}