
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helloworld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Helloworld');
// Script/Helloworld.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeCallBack = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Helloworld.prototype.start = function () {
        // init logic
        this.ex();
    };
    Helloworld.prototype.ex = function () {
        this.text = 'exexexexex';
        this.label.string = this.text;
        var ret = jsb.reflection.callStaticMethod("NativeOcClass", "callNativeUIWithTitle:andContent:", "cocos2d-js", "Yes! you call a Native UI from Reflection");
        if (ret) {
            this.label.string = '成功';
        }
        else {
            this.label.string = '失败';
        }
    };
    Helloworld.prototype.aaa = function (aa) {
        this.label.string = aa;
    };
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "label", void 0);
    __decorate([
        property
    ], Helloworld.prototype, "text", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;
var NativeCallBack = /** @class */ (function () {
    function NativeCallBack() {
    }
    NativeCallBack.InfoToJs = function (method, value) {
        switch (method) {
            case 'aaa':
                console.log(method + value);
                break;
            default: {
                cc.warn("未处理的method" + method);
                return;
            }
        }
    };
    return NativeCallBack;
}());
exports.NativeCallBack = NativeCallBack;
cc["NativeCallBack"] = NativeCallBack;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtQ0M7UUFoQ0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQTZCM0IsQ0FBQztJQTFCRywwQkFBSyxHQUFMO1FBQ0ksYUFBYTtRQUNiLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFHRCx1QkFBRSxHQUFGO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFDeEIsbUNBQW1DLEVBQ25DLFlBQVksRUFDWiwyQ0FBMkMsQ0FBQyxDQUFDO1FBRTlFLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzVCO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFFTCxDQUFDO0lBRUUsd0JBQUcsR0FBVixVQUFXLEVBQVM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUE5Qkc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSTtJQUd2QjtRQURDLFFBQVE7NENBQ2M7SUFOTixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBbUM5QjtJQUFELGlCQUFDO0NBbkNELEFBbUNDLENBbkN1QyxFQUFFLENBQUMsU0FBUyxHQW1DbkQ7a0JBbkNvQixVQUFVO0FBb0MvQjtJQUFBO0lBZ0JBLENBQUM7SUFmaUIsdUJBQVEsR0FBdEIsVUFBdUIsTUFBYyxFQUFFLEtBQWE7UUFHaEQsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLEtBQUs7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLE1BQU07WUFFVixPQUFPLENBQUMsQ0FBQztnQkFDTCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsT0FBTzthQUNWO1NBQ0o7SUFDTCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLHdDQUFjO0FBaUIzQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxjQUFjLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gaW5pdCBsb2dpY1xuICAgICAgICB0aGlzLmV4KCk7XG4gICAgfVxuXG5cbiAgICBleCgpe1xuICAgICAgICB0aGlzLnRleHQgPSAnZXhleGV4ZXhleCc7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xuICAgICAgICB2YXIgcmV0ID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk5hdGl2ZU9jQ2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsTmF0aXZlVUlXaXRoVGl0bGU6YW5kQ29udGVudDpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2NvczJkLWpzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWWVzISB5b3UgY2FsbCBhIE5hdGl2ZSBVSSBmcm9tIFJlZmxlY3Rpb25cIik7XG4gICAgICAgXG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ+aIkOWKnyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICflpLHotKUnO1xuICAgICAgICB9XG5cbiAgICB9IFxuICAgIFxucHVibGljIGFhYShhYTpzdHJpbmcpIHtcbiAgICB0aGlzLmxhYmVsLnN0cmluZyA9IGFhO1xufVxuXG59XG5leHBvcnQgY2xhc3MgTmF0aXZlQ2FsbEJhY2sge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5mb1RvSnMobWV0aG9kOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgICAgICBjYXNlICdhYWEnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1ldGhvZCArIHZhbHVlKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5pyq5aSE55CG55qEbWV0aG9kXCIgKyBtZXRob2QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiBcbn1cbmNjW1wiTmF0aXZlQ2FsbEJhY2tcIl0gPSBOYXRpdmVDYWxsQmFjaztcbiJdfQ==