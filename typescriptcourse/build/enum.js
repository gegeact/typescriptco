"use strict";
// enum
// numeric enum
// enum month {
//     JAN = 1,
//     FEB,
//     MAR,
//     APR,
//     MAY
// }
// console.log(month.MAR);
// string enum
var month;
(function (month) {
    month["JAN"] = "januari";
    month["FEB"] = "Februari";
    month["MAR"] = "Maret";
    month["APR"] = "April";
    month["MAY"] = "May";
})(month || (month = {}));
console.log(month.FEB);
