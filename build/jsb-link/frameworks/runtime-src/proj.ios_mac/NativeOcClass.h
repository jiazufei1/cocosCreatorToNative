//
//  NativeOcClass.h
//  hello_world-mobile
//
//  Created by cf on 2020/10/10.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NativeOcClass : NSObject
+(BOOL)callNativeUIWithTitle:(NSString *) title andContent:(NSString *)content;
@end

NS_ASSUME_NONNULL_END
