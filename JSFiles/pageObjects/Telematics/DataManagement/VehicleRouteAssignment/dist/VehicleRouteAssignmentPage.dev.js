"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VehicleRouteAssignmentPage = void 0;

var protractor_1 = require("protractor");

var DatePicker_1 = require("../../../../common/DatePicker");

var VehicleRouteAssignmentPage =
/*#__PURE__*/
function () {
  function VehicleRouteAssignmentPage() {
    _classCallCheck(this, VehicleRouteAssignmentPage);

    this.chbFrequency = protractor_1.element(protractor_1.by.xpath('//a[text() = " Vehicle-Route Assignment"]'));
    this.txtFromDate = protractor_1.element(protractor_1.by.xpath("//input[@name = 'fromDate']"));
    this.btnCalendarFromDate = protractor_1.element(protractor_1.by.xpath("//input[@placeholder = 'fromDate']//following-sibling::button"));
  }

  _createClass(VehicleRouteAssignmentPage, [{
    key: "setfromdate",
    value: function setfromdate() {
      this.btnCalendarFromDate.click();
      var datepk = new DatePicker_1.DatePicker();
      datepk.selectdate("08/22/2015");
    }
  }]);

  return VehicleRouteAssignmentPage;
}();

exports.VehicleRouteAssignmentPage = VehicleRouteAssignmentPage;