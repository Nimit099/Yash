import { LightningElement,api, track } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import { loadStyle } from "lightning/platformResourceLoader";
import jQuery from '@salesforce/resourceUrl/jQuery';
import bootstrap from '@salesforce/resourceUrl/bootstrap';
export default class Old_img_ch extends LightningElement {
    
    renderedCallback() {
        // initDOM();
      Promise.all([
                 loadScript(this, bootstrap),
                 loadScript(this, jQuery),
             ]).then(() => {
                 console.log('Files loaded 111');
                //  console.log(loadScript(this, bootstrap));
                 console.log(loadScript(this, jQuery));
                //  this.method1();
             })
                 .catch(error => {
                    console.log('in error');
                    console.log({error});
                     console.log(error.body.message);
                 });

                 setTimeout(() => {
                    console.log('in set time');
                    this.method1();
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

     method1(){
        console.log('in method');
     //---slider-captcha-js--
     !(function() {
        console.log('in captcha');
        "use strict";
        var t = function() {
                var t = arguments.length,
                    e = arguments[0] || {};
                "object" != typeof e && "function" != typeof e && (e = {}),
                    1 == t && ((e = this), i--);
                for (var i = 1; i < t; i++) {
                    var n = arguments[i];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                console.log({e});
                return e;
            },
            
            e = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType;
            },
            
            i = function(e, n) {
                (this.$element = e),
                (this.options = t({}, i.DEFAULTS, n)),
                (this.$element.style.position = "relative"),
                (this.$element.style.width = this.options.width + "px"),
                (this.$element.style.margin = "0 auto"),
                this.init();
            };
            console.log('in method 1');
            
        (i.DEFAULTS = {
            width: 280,
            height: 155,
            PI: Math.PI,
            sliderL: 42,
            sliderR: 9,
            offset: 5,
            loadingText: "Loading...",
            failedText: "Try Again",
            barText: "Slide To Verify",
            repeatIcon: "fa fa-repeat",
            maxLoadCount: 3,
            localImages: function() {
                return "images/Pic" + Math.round(4 * Math.random()) + ".jpg";
            },
            
            verify: function(t, e) {
                var i = !1;
                return (
                    $.ajax({
                        url: e,
                        data: { datas: JSON.stringify(t) },
                        dataType: "json",
                        type: "post",
                        async: !1,
                        success: function(t) {
                            (i = JSON.stringify(t));
                        }
                    }),
                    i
                );
            },
            remoteUrl: null
        }),
        console.log('in method 2');
        (window.sliderCaptcha = function(t) {
            var e = document.getElementById(t.id);
            return new i(e, "object" == typeof t && t);
        }),
        (window.sliderCaptcha.Constructor = i);
        var n = i.prototype;
        (n.init = function() {
            this.initDOM(), this.initImg(), this.bindEvents();
        }),
        (n.initDOM = function() {
            var i = function(t, e) {
                    var i = document.createElement(t);
                    return (i.className = e), i;
                },
                n = (function(t, e) {
                    var i = document.createElement("canvas");
                    return (i.width = t), (i.height = e), i;
                })(this.options.width - 2, this.options.height),
                o = n.cloneNode(!0),
                s = i("div", "sliderContainer"),
                r = i("i", "refreshIcon " + this.options.repeatIcon),
                a = i("div", "sliderMask"),
                l = i("div", "sliderbg"),
                d = i("div", "slider"),
                c = i("i", "fa fa-arrow-right sliderIcon"),
                h = i("span", "sliderText");
            (o.className = "block"), (h.innerHTML = this.options.barText);
            var p = this.$element;
            p.appendChild(n),
                p.appendChild(r),
                p.appendChild(o),
                d.appendChild(c),
                a.appendChild(d),
                s.appendChild(l),
                s.appendChild(a),
                s.appendChild(h),
                p.appendChild(s);
            var u = {
                canvas: n,
                block: o,
                sliderContainer: s,
                refreshIcon: r,
                slider: d,
                sliderMask: a,
                sliderIcon: c,
                text: h,
                canvasCtx: n.getContext("2d"),
                blockCtx: o.getContext("2d")
            };
            e(Object.assign) ? Object.assign(this, u) : t(this, u);
        }),
        (n.initImg = function() {
            var t = this,
                i = window.navigator.userAgent.indexOf("Trident") > -1,
                n = this.options.sliderL + 2 * this.options.sliderR + 3,
                o = function(e, n) {
                    var o = t.options.sliderL,
                        s = t.options.sliderR,
                        r = t.options.PI,
                        a = t.x,
                        l = t.y;
                    e.beginPath(),
                        e.moveTo(a, l),
                        e.arc(a + o / 2, l - s + 2, s, 0.72 * r, 2.26 * r),
                        e.lineTo(a + o, l),
                        e.arc(a + o + s - 2, l + o / 2, s, 1.21 * r, 2.78 * r),
                        e.lineTo(a + o, l + o),
                        e.lineTo(a, l + o),
                        e.arc(a + s - 2, l + o / 2, s + 0.4, 2.76 * r, 1.24 * r, !0),
                        e.lineTo(a, l),
                        (e.lineWidth = 2),
                        (e.fillStyle = "rgba(255, 255, 255, 0.7)"),
                        (e.strokeStyle = "rgba(255, 255, 255, 0.7)"),
                        e.stroke(),
                        e[n](),
                        (e.globalCompositeOperation = i ? "xor" : "destination-over");
                },
                s = function(t, e) {
                    return Math.round(Math.random() * (e - t) + t);
                },
                r = new Image();
            r.crossOrigin = "Anonymous";
            var a = 0;
            (r.onload = function() {
                (t.x = s(n + 10, t.options.width - (n + 10))),
                (t.y = s(10 + 2 * t.options.sliderR, t.options.height - (n + 10))),
                o(t.canvasCtx, "fill"),
                    o(t.blockCtx, "clip"),
                    t.canvasCtx.drawImage(r, 0, 0, t.options.width - 2, t.options.height),
                    t.blockCtx.drawImage(r, 0, 0, t.options.width - 2, t.options.height);
                var e = t.y - 2 * t.options.sliderR - 1,
                    i = t.blockCtx.getImageData(t.x - 3, e, n, n);
                (t.block.width = n),
                t.blockCtx.putImageData(i, 0, e + 1),
                    (t.text.textContent = t.text.getAttribute("data-text"));
            }),
            (r.onerror = function() {
                if (
                    (a++,
                        "file:" === window.location.protocol &&
                        ((a = t.options.maxLoadCount),
                            console.error(
                                "can't load pic resource file from File protocal. Please try http or https"
                            )),
                        a >= t.options.maxLoadCount)
                )
                    return (
                        (t.text.textContent = "Failed to load"),
                        void t.classList.add("text-danger")
                    );
                r.src = t.options.localImages();
            }),
            (r.setSrc = function() {
                var n = "";
                if (
                    ((a = 0),
                        t.text.classList.remove("text-danger"),
                        e(t.options.setSrc) && (n = t.options.setSrc()),
                        (n && "" !== n) ||
                        (n =
                            "https://picsum.photos/" +
                            t.options.width +
                            "/" +
                            t.options.height +
                            "/?image=" +
                            Math.round(20 * Math.random())),
                        i)
                       
                )
                 {
                    console.log({n});
                    var o = new XMLHttpRequest();
                    (o.onloadend = function(t) {
                        var e = new FileReader();
                        e.readAsDataURL(t.target.response),
                            (e.onloadend = function(t) {
                                r.src = t.target.result;
                            });
                    }),
                    o.open("GET", n),
                        (o.responseType = "blob"),
                        o.send();
                } else r.src = n;
            }),
            r.setSrc(),
                this.text.setAttribute("data-text", this.options.barText),
                (this.text.textContent = this.options.loadingText),
                (this.img = r);
        }),
        (n.clean = function() {
            this.canvasCtx.clearRect(0, 0, this.options.width, this.options.height),
                this.blockCtx.clearRect(0, 0, this.options.width, this.options.height),
                (this.block.width = this.options.width);
        }),
        (n.bindEvents = function() {
            var t = this;
            this.$element.addEventListener("selectstart", function() {
                    return !1;
                }),
                this.refreshIcon.addEventListener("click", function() {
                    component.set("v.RightCaptcha", false);
                    component.set("v.CaptchaButton", true);
                    (t.text.textContent = t.options.barText),
                    t.reset(),
                        e(t.options.onRefresh) && t.options.onRefresh.call(t.$element);
                });
            var i,
                n,
                o = [],
                s = !1,
                r = function(e) {
                    t.text.classList.contains("text-danger") ||
                        ((i = e.clientX || e.touches[0].clientX),
                            (n = e.clientY || e.touches[0].clientY),
                            (s = !0));
                },
                a = function(e) {
                    if (!s) return !1;
                    var r = e.clientX || e.touches[0].clientX,
                        a = e.clientY || e.touches[0].clientY,
                        l = r - i,
                        d = a - n;
                    if (l < 0 || l + 40 > t.options.width) return !1;
                    t.slider.style.left = l - 1 + "px";
                    var c = ((t.options.width - 40 - 20) / (t.options.width - 40)) * l;
                    (t.block.style.left = c + "px"),
                    t.sliderContainer.classList.add("sliderContainer_active"),
                        (t.sliderMask.style.width = l + 4 + "px"),
                        o.push(Math.round(d));
                },
                l = function(n) {
                    if (!s) return !1;
                    if (((s = !1), (n.clientX || n.changedTouches[0].clientX) === i))
                        return !1;
                    t.sliderContainer.classList.remove("sliderContainer_active"),
                        (t.trail = o);
                    var r = t.verify();
                    r.spliced && r.verified ?
                        (t.sliderContainer.classList.add("sliderContainer_success"),
                            e(t.options.onSuccess) && t.options.onSuccess.call(t.$element)) :
                        (t.sliderContainer.classList.add("sliderContainer_fail"),
                            e(t.options.onFail) && t.options.onFail.call(t.$element),
                            setTimeout(function() {
                                (t.text.innerHTML = t.options.failedText), t.reset();
                            }, 1e3));
                };
                console.log('in method 3');
            this.slider.addEventListener("mousedown", r),
                this.slider.addEventListener("touchstart", r),
                document.addEventListener("mousemove", a),
                document.addEventListener("touchmove", a),
                document.addEventListener("mouseup", l),
                document.addEventListener("touchend", l),
                document.addEventListener("mousedown", function() {
                    return !1;
                }),
                document.addEventListener("touchstart", function() {
                    return !1;
                }),
                document.addEventListener("swipe", function() {
                    return !1;
                });
        }),
        (n.verify = function() {
            var t = this.trail,
                e = parseInt(this.block.style.left),
                i = !1;
            if (null !== this.options.remoteUrl)
                i = this.options.verify(t, this.options.remoteUrl);
            else {
                var n = function(t, e) {
                        return t + e;
                    },
                    o = t.reduce(n) / t.length,
                    s = t.map(function(t) {
                        return t - o;
                    });
                i =
                    0 !==
                    Math.sqrt(
                        s
                        .map(function(t) {
                            return t * t;
                        })
                        .reduce(n) / t.length
                    );
            }
            return {
                spliced: Math.abs(e - this.x) < this.options.offset,
                verified: i
            };
        }),
        (n.reset = function() {
            component.set("v.RightCaptcha", false);
            component.set("v.CaptchaButton", true);
            this.sliderContainer.classList.remove("sliderContainer_fail"),
                this.sliderContainer.classList.remove("sliderContainer_success"),
                (this.slider.style.left = 0),
                (this.block.style.left = 0),
                (this.sliderMask.style.width = 0),
                this.clean(),
                this.text.setAttribute("data-text", this.text.textContent),
                (this.text.textContent = this.options.loadingText),
                this.img.setSrc();
        });
        console.log('in method 4');
    })();


    var captcha = sliderCaptcha({
        id: 'captcha',
        loadingText: 'Loading...',
        failedText: 'Try again',
        barText: 'Slide right to fill',
        repeatIcon: 'fa fa-redo',
        onSuccess: function() {
            setTimeout(function() {
                console.log('sliderCaptcha');
                component.set("v.RightCaptcha", true);
                component.set("v.CaptchaButton", false);
            }, 500);
        },
        setSrc: function() {
            var checkCaptcha = component.get("v.CaptchaButton");
            if (checkCaptcha == true) {
                var img = "https://picsum.photos/200/155/?image=" + Math.round(20 * Math.random());
                console.log(img);
                return img;
            }

        },
    });

    //  connectedCallback() {
    //     this.initDOM();
    //     this.initImg();
    //     this.bindEvents();
    // }
    // @track options = {
    //     width: 280,
    //     height: 155,
    //     PI: Math.PI,
    //     sliderL: 42,
    //     sliderR: 9,
    //     offset: 5,
    //     loadingText: "Loading...",
    //     failedText: "Try again",
    //     barText: "Slide to verify",
    //     // repeatIcon: "fa fa-repeat",
    //     maxLoadCount: 3,
    //     localImages: function() {
    //         return 'images/Pic' + Math.round(Math.random() * 4) + '.jpg';
    //     },
    //     verify: function(input, url) {
    //         let isValid = false;
    //         fetch(url, {
    //             method: 'POST',
    //             body: JSON.stringify(input),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             isValid = JSON.stringify(data);
    //             console.log('Result: ' + isValid);
    //         })
    //         .catch(error => console.log(error));
    //         return isValid;
    //     },
    //     remoteUrl: null
    // };

    // // other methods and properties
    // initDOM() {
    //     // Create the necessary elements
    //     const sliderContainer = document.createElement('div');
    //     sliderContainer.classList.add('sliderContainer');
    //     const refreshIcon = document.createElement('i');
    //     refreshIcon.classList.add('refreshIcon', this.options.repeatIcon);
    //     const sliderMask = document.createElement('div');
    //     sliderMask.classList.add('sliderMask');
    //     const sliderbg = document.createElement('div');
    //     sliderbg.classList.add('sliderbg');
    //     const slider = document.createElement('div');
    //     slider.classList.add('slider');
    //     const sliderIcon = document.createElement('i');
    //     sliderIcon.classList.add('fa', 'fa-arrow-right', 'sliderIcon');
    //     const sliderText = document.createElement('span');
    //     sliderText.classList.add('sliderText');
    
    //     // Append elements to the slider container
    //     sliderContainer.appendChild(refreshIcon);
    //     sliderContainer.appendChild(sliderMask);
    //     sliderContainer.appendChild(sliderbg);
    //     sliderContainer.appendChild(slider);
    //     slider.appendChild(sliderIcon);
    //     slider.appendChild(sliderText);
    
    //     // Append the slider container to the DOM
    //     // this.template.querySelector('#captcha').appendChild(sliderContainer);
    // }
   }
}