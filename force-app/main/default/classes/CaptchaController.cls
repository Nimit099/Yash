public with sharing class CaptchaController {
    @AuraEnabled
    public static CaptchaImage getRandomImage() {
        // Generate a random number to select an image from a list
        Decimal myDecimal = Math.floor(Math.random() * 3);
        Integer randomIndex=myDecimal.intValue();
        // Integer randomIndex = Math.floor(Math.random() * 3);
        List<CaptchaImage> images = new List<CaptchaImage> {
            new CaptchaImage('1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38W3LohGEL6Mbs-wsROQixbo2Fk_YpJChuvtZ6FSF&s', 'option1'),
            new CaptchaImage('2', 'https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Ruth.png', 'option2'),
            new CaptchaImage('3', 'https://www.salesforce.com/news/wp-content/uploads/sites/3/2022/06/EINSTEIN_Coat_Point2HeadRight_SFS20_sRGB.png?w=264&h=264&crop=1', 'option3')
        };
        return images[randomIndex];
    }

    @AuraEnabled
    public static Boolean checkImageSelection(String imageId, String selection) {
        // Check if the selected option matches the correct option for the image
        CaptchaImage image = new List<CaptchaImage> {
             new CaptchaImage('1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38W3LohGEL6Mbs-wsROQixbo2Fk_YpJChuvtZ6FSF&s', 'option1'),
            new CaptchaImage('2', 'https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Ruth.png', 'option2'),
            new CaptchaImage('3', 'https://www.salesforce.com/news/wp-content/uploads/sites/3/2022/06/EINSTEIN_Coat_Point2HeadRight_SFS20_sRGB.png?w=264&h=264&crop=1', 'option3')

        }.get(Integer.valueOf(imageId) - 1);
        return image.correctOption == selection;
    }

    public class CaptchaImage {
        @AuraEnabled public String id;
        @AuraEnabled public String imageUrl;
        @AuraEnabled public String correctOption;

        public CaptchaImage(String id, String imageUrl, String correctOption) {
            this.id = id;
            this.imageUrl = imageUrl;
            this.correctOption = correctOption;
        }
    }
}