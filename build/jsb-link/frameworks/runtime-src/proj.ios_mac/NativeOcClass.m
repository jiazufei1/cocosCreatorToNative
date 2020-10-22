//
//  NativeOcClass.m
//  hello_world-mobile
//
//  Created by cf on 2020/10/10.
//

#import "NativeOcClass.h"

@implementation NativeOcClass
+(BOOL)callNativeUIWithTitle:(NSString *) title andContent:(NSString *)content{
  UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:title message:content delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"OK", nil];
  [alertView show];
  return true;
}
@end
