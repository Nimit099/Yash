import { LightningElement,api, track } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import { loadStyle } from "lightning/platformResourceLoader";
import slidercaptcha_min from '@salesforce/resourceUrl/slidercaptcha_min';
import longbow_slidercaptcha_min from '@salesforce/resourceUrl/longbow_slidercaptcha_min';
import longbow_slidercaptcha_min_js_map from '@salesforce/resourceUrl/longbow_slidercaptcha_min_js_map';
export default class Test_captcha extends LightningElement{
  // @tsliderCaptcha;
    
    renderedCallback() {
        // initDOM();
      Promise.all([
                 loadScript(this, longbow_slidercaptcha_min),
                 loadStyle(this, slidercaptcha_min),
             ]).then(() => {
                 console.log('Files loaded 111');
                //  console.log(loadScript(this, bootstrap));
                 console.log(loadScript(this, longbow_slidercaptcha_min));
                //  this.method1();
             })
                 .catch(error => {
                    console.log('in error');
                    console.log({error});
                     console.log(error.body.message);
                 });

                 setTimeout(() => {
                    console.log('in set time');
                    this.method_2();
                  }, 1000);

            
    
     }

    //  connectedCallback(){
        
    //     // loadScript(this.jQuery,this.bootstrap)
    //     //     .then(() => {
    //     //       console.log('hiii',jQuery);
    //     //     })
    //     //     .catch((error) => {
    //     //         // Handle error
    //     //     });
    // }

  method_2(){
    var captcha = sliderCaptcha({
    id: 'var captcha',
    onSuccess: function () {
      // do something
    }
});
 var captcha = sliderCaptcha({
    id: 'var captcha',
    onSuccess: function () {
      // do something
    },
    setSrc: function () {
      return 'http://imgs.blazor.zone/images/Pic' + Math.round(Math.random() * 136) + '.jpg';
    },
    // or use local images instead
    localImages: function () {
      return 'images/Pic' + Math.round(Math.random() * 4) + '.jpg';
    }
});
 var captcha = sliderCaptcha({
    id: 'var captcha',
    onSuccess: function () {
      // do something
    },
    setSrc: function () {
      return 'http://imgs.blazor.zone/images/Pic' + Math.round(Math.random() * 136) + '.jpg';
    },
    // or use local images instead
    localImages: function () {
      return 'images/Pic' + Math.round(Math.random() * 4) + '.jpg';
    }
});
 var captcha = sliderCaptcha({
    width: 280,
    height: 155,
    PI: Math.PI,
    sliderL: 42,
    sliderR: 9,
    offset: 5, 
    loadingText: 'Loading...',
    failedText: 'Try It Again',
    barText: 'Slide the Puzzle',
    repeatIcon: 'fa fa-repeat',
    maxLoadCount: 3
});
 var captcha = sliderCaptcha({
    onSuccess: function () {
      // ...
    },
    onFail: function () {
      // ...
    },
    onRefresh: function () {
      // ...      
    }
});
// var captcha.reset();
 var captcha = sliderCaptcha({
    verify: function (arr, url) {
       ret = false;
      fetch(url, {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(arr)
      }).then(function (result) {
          ret = result;
      });
      return ret;
    },
    remoteUrl: "api/var Captcha"
});

}
}