
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppFooter from '@/components/AppFooter';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-deepblue">用户协议</h1>
          <p className="text-gray-500">请仔细阅读以下条款</p>
        </header>

        <Card className="mb-6 overflow-hidden card-shadow">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl text-deepblue">虚拟试衣间用户协议</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <p>
                欢迎使用虚拟试衣间应用服务。本用户协议（"协议"）是您与虚拟试衣间应用（"我们"）之间就使用我们提供的服务达成的协议。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">1. 服务说明</h3>
              <p>
                虚拟试衣间是一款基于IDM-VTON技术的智能服装试穿应用，允许用户上传自己的照片和衣物图片，生成虚拟试穿效果。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">2. 用户账号</h3>
              <p>
                您可以通过微信授权或手机号登录我们的应用。您有责任保护您的账号信息安全，并对您账号下的所有活动负责。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">3. 服务规则</h3>
              <p>
                您同意不会使用我们的服务进行任何违法或不当活动，包括但不限于上传非法内容、侵犯他人知识产权或隐私权等行为。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">4. 隐私保护</h3>
              <p>
                我们重视用户隐私保护，具体隐私政策请参阅《隐私政策》。使用我们的服务，即表示您同意我们按照隐私政策收集和使用相关信息。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">5. 服务变更与终止</h3>
              <p>
                我们保留随时修改或终止服务的权利，修改后的协议条款一旦公布即代替原条款。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">6. 免责声明</h3>
              <p>
                我们不对因使用我们的服务而产生的任何直接、间接、偶然、特殊或后果性损害承担责任。
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                className="bg-coral hover:bg-coral-dark text-white"
                onClick={() => navigate(-1)}
              >
                返回
              </Button>
            </div>
          </CardContent>
        </Card>

        <AppFooter />
      </div>
    </div>
  );
};

export default Terms;
