
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import ImageUploader from '@/components/ImageUploader';
import ResultsGallery from '@/components/ResultsGallery';
import LoadingProgress from '@/components/LoadingProgress';
import AppFooter from '@/components/AppFooter';
import { generateTryOn } from '@/utils/api';
import { TryOnResult } from '@/components/ResultsGallery';

const Index = () => {
  const [userImage, setUserImage] = useState<string>('');
  const [clothImage, setClothImage] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');
  const [results, setResults] = useState<TryOnResult[]>([]);
  const { toast } = useToast();

  const handleGenerateTryOn = async () => {
    if (!userImage || !clothImage) {
      toast({
        title: "缺少图片",
        description: "请上传用户照片和服装图片",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setProgressStatus('准备中...');

    try {
      const result = await generateTryOn(
        userImage,
        clothImage,
        (progressValue, status) => {
          setProgress(progressValue);
          setProgressStatus(status);
        }
      );

      // Add new result to results array
      const newResult: TryOnResult = {
        id: Date.now().toString(),
        imageUrl: result.imageUrl,
        confidenceScore: result.confidenceScore,
        timestamp: new Date().toLocaleString('zh-CN', { 
          hour: '2-digit', 
          minute: '2-digit',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
      };

      setResults([newResult, ...results]);
      toast({
        title: "生成成功",
        description: "虚拟试衣图片已生成",
      });
    } catch (error) {
      console.error("Generate failed:", error);
      toast({
        title: "生成失败",
        description: "请稍后重试",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-deepblue">虚拟试衣间</h1>
          <p className="text-gray-500">基于IDM-VTON的智能服装试穿</p>
        </header>

        <Card className="mb-6 overflow-hidden card-shadow">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-deepblue mb-4">上传图片</h2>
            
            <ImageUploader
              title="用户照片"
              subtitle="请上传正面照片，确保肩部以上完整可见"
              isUserPhoto={true}
              onImageSelected={setUserImage}
            />
            
            <ImageUploader
              title="服装图片"
              subtitle="上传服装图片或输入网络链接"
              onImageSelected={setClothImage}
            />
            
            <Button 
              className="w-full bg-coral hover:bg-coral-dark text-white"
              disabled={!userImage || !clothImage || isProcessing}
              onClick={handleGenerateTryOn}
            >
              生成虚拟试衣效果
            </Button>
          </CardContent>
        </Card>

        {isProcessing && (
          <div className="mb-6">
            <LoadingProgress progress={progress} status={progressStatus} />
          </div>
        )}
        
        <ResultsGallery results={results} isLoading={isProcessing} />
        
        <AppFooter />
      </div>
    </div>
  );
};

export default Index;
