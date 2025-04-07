import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import AppFooter from '@/components/AppFooter';
import { PhoneIcon, Lock } from 'lucide-react';
import WechatIcon from '@/components/icons/WechatIcon';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const Login = () => {
  const [isWechatLogin, setIsWechatLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const startCountdown = () => {
    if (countdown > 0 || !phoneNumber.match(/^1[3-9]\d{9}$/)) return;
    
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    console.log('Sending verification code to:', phoneNumber);
    toast({
      title: "验证码已发送",
      description: `验证码已发送至 ${phoneNumber}`,
    });
  };

  const handleWechatLogin = () => {
    console.log('Initiating WeChat login...');
    toast({
      title: "微信授权",
      description: "正在尝试微信授权登录",
    });
    
    setTimeout(() => {
      toast({
        title: "授权成功",
        description: "微信授权登录成功",
      });
      navigate('/');
    }, 1000);
  };

  const handlePhoneLogin = () => {
    if (!phoneNumber || phoneNumber.length !== 11) {
      toast({
        title: "手机号错误",
        description: "请输入正确的手机号",
        variant: "destructive",
      });
      return;
    }
    
    if (!verificationCode || verificationCode.length !== 6) {
      toast({
        title: "验证码错误",
        description: "请输入6位验证码",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreeTerms) {
      toast({
        title: "请同意用户协议",
        description: "需要同意用户协议和隐私政策才能继续",
        variant: "destructive",
      });
      return;
    }
    
    console.log('Phone login with:', phoneNumber, verificationCode);
    toast({
      title: "登录中",
      description: "正在验证手机号登录信息",
    });
    
    setTimeout(() => {
      toast({
        title: "登录成功",
        description: "手机号登录成功",
      });
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-deepblue">虚拟试衣间</h1>
          <p className="text-gray-500">基于IDM-VTON的智能服装试穿</p>
        </header>

        <Card className="mb-6 overflow-hidden card-shadow">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-center text-xl text-deepblue">用户登录</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex mb-6">
              <button 
                className={`flex-1 py-2 text-center font-medium ${isWechatLogin ? 'text-coral border-b-2 border-coral' : 'text-gray-500'}`}
                onClick={() => setIsWechatLogin(true)}
              >
                微信登录
              </button>
              <button 
                className={`flex-1 py-2 text-center font-medium ${!isWechatLogin ? 'text-coral border-b-2 border-coral' : 'text-gray-500'}`}
                onClick={() => setIsWechatLogin(false)}
              >
                手机号登录
              </button>
            </div>

            {isWechatLogin ? (
              <div>
                <div className="flex justify-center my-8">
                  <Button 
                    onClick={handleWechatLogin}
                    className="bg-green-500 hover:bg-green-600 text-white py-6 px-8 rounded-md flex items-center gap-2 text-lg"
                  >
                    <WechatIcon size={24} />
                    微信一键授权登录
                  </Button>
                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                  点击授权即表示您已阅读并同意
                  <Link to="/terms" className="text-coral">《用户协议》</Link>
                  和
                  <Link to="/privacy" className="text-coral">《隐私政策》</Link>
                </p>
              </div>
            ) : (
              <div>
                <div className="space-y-4">
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="tel"
                      placeholder="输入手机号"
                      className="pl-10"
                      maxLength={11}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <InputOTP
                        maxLength={6}
                        value={verificationCode}
                        onChange={setVerificationCode}
                        render={({ slots }) => (
                          <InputOTPGroup>
                            {slots.map((slot, index) => (
                              <InputOTPSlot key={index} {...slot} index={index} />
                            ))}
                          </InputOTPGroup>
                        )}
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-28 text-xs ${countdown > 0 ? 'text-gray-400' : 'text-coral'}`}
                      onClick={startCountdown}
                      disabled={countdown > 0}
                    >
                      {countdown > 0 ? `${countdown}秒后重试` : '获取验证码'}
                    </Button>
                  </div>
                  
                  <div className="flex items-start space-x-2 mt-4">
                    <Checkbox 
                      id="terms" 
                      checked={agreeTerms}
                      onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-500">
                      我已阅读并同意
                      <Link to="/terms" className="text-coral">《用户协议》</Link>
                      和
                      <Link to="/privacy" className="text-coral">《隐私政策》</Link>
                    </label>
                  </div>
                  
                  <Button 
                    className="w-full bg-coral hover:bg-coral-dark text-white mt-4"
                    onClick={handlePhoneLogin}
                    disabled={!phoneNumber || verificationCode.length !== 6}
                  >
                    登录 / 注册
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <AppFooter />
      </div>
    </div>
  );
};

export default Login;
