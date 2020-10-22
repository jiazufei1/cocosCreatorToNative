
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';


    start () {
        // init logic
        this.ex();
    }


    ex(){
        this.text = 'exexexexex';
        this.label.string = this.text;
        var ret = jsb.reflection.callStaticMethod("NativeOcClass",
                                         "callNativeUIWithTitle:andContent:",
                                         "cocos2d-js",
                                         "Yes! you call a Native UI from Reflection");
       
        if (ret) {
            this.label.string = '成功';
        } else {
            this.label.string = '失败';
        }

    } 
    
public aaa(aa:string) {
    this.label.string = aa;
}

}
export class NativeCallBack {
    public static InfoToJs(method: string, value: string) {
        
       
        switch (method) {
            case 'aaa':
                console.log(method + value); 
                break;

            default: {
                cc.warn("未处理的method" + method);
                return;
            }
        }
    }
 
}
cc["NativeCallBack"] = NativeCallBack;
