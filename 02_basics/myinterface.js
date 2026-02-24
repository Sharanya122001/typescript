"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sharanya = { dbId: 22, email: "sharanya@gmail.com", userId: 12345, startTrail: function () {
        return "trail started";
    }, getcoupon: function (couponname) {
        return 10;
    } };
sharanya.email = "sharanya2@gmail.com"; // this is fine because email is not readonly
