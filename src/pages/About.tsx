
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AppFooter from '@/components/AppFooter';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-deepblue">关于项目</h1>
          <p className="text-gray-500">虚拟试衣技术说明</p>
        </header>

        <Card className="mb-6 overflow-hidden card-shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-deepblue mb-4">技术原理</h2>
            <p className="text-gray-600 mb-4">
              本应用基于IDM-VTON深度学习模型，通过分析用户照片和服装图片，生成逼真的虚拟试衣效果。
            </p>
            
            <h3 className="text-lg font-medium text-deepblue mt-6 mb-2">核心功能</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>用户照片与服装图片上传</li>
              <li>AI分析图像特征并生成试衣效果</li>
              <li>智能评估匹配度并显示可信度</li>
              <li>失败重试与降级方案</li>
            </ul>
            
            <h3 className="text-lg font-medium text-deepblue mt-6 mb-2">技术栈</h3>
            <p className="text-gray-600">
              前端：微信小程序 + React<br />
              后端：腾讯云开发 + 云函数<br />
              AI模型：IDM-VTON (2GB GPU)
            </p>
            
            <div className="mt-8 text-center">
              <Button 
                className="bg-coral hover:bg-coral-dark text-white"
                onClick={() => window.history.back()}
              >
                返回主页
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden card-shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-deepblue mb-4">使用须知</h2>
            <p className="text-gray-600 mb-4">
              虚拟试衣技术仍在不断发展中，试衣效果供参考，可能与实际穿着效果有所差异。
            </p>
            
            <h3 className="text-lg font-medium text-deepblue mt-4 mb-2">最佳实践</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>上传正面清晰照片，光线充足</li>
              <li>确保肩部以上完整可见</li>
              <li>避免复杂背景和姿势</li>
            </ul>
          </CardContent>
        </Card>
        
        <AppFooter />
      </div>
    </div>
  );
};

export default About;
