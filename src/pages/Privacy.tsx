
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppFooter from '@/components/AppFooter';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-deepblue">隐私政策</h1>
          <p className="text-gray-500">我们如何处理您的个人信息</p>
        </header>

        <Card className="mb-6 overflow-hidden card-shadow">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl text-deepblue">虚拟试衣间隐私政策</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <p>
                本隐私政策描述了虚拟试衣间应用（"我们"）如何收集、使用和披露您的个人信息。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">1. 信息收集</h3>
              <p>
                我们可能收集以下类型的信息：
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>您提供的个人信息，如手机号和微信账户信息；</li>
                <li>您上传的照片和服装图片；</li>
                <li>设备信息和使用数据。</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-4">2. 信息使用</h3>
              <p>
                我们使用收集的信息来：
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>提供、维护和改进我们的服务；</li>
                <li>处理您的试衣请求并生成虚拟试衣效果；</li>
                <li>研究和开发新功能。</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-4">3. 信息共享</h3>
              <p>
                我们不会出售您的个人信息。在某些情况下，我们可能会共享您的信息，例如：
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>经您同意；</li>
                <li>与服务提供商合作伙伴共享；</li>
                <li>应法律要求。</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-4">4. 数据安全</h3>
              <p>
                我们采取合理措施保护您的个人信息免受未经授权的访问、使用或披露。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">5. 您的权利</h3>
              <p>
                您有权访问、更正或删除您的个人信息，以及在某些情况下限制或反对我们处理您的信息。
              </p>
              
              <h3 className="text-lg font-semibold mt-4">6. 政策变更</h3>
              <p>
                我们可能会更新本隐私政策，更新后的版本将在我们的应用中发布。
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

export default Privacy;
