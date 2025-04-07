
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Image as ImageIcon, CloudUpload, X, Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type ImageUploaderProps = {
  title: string;
  subtitle: string;
  isUserPhoto?: boolean;
  onImageSelected: (imageData: string) => void;
};

const ImageUploader = ({ title, subtitle, isUserPhoto = false, onImageSelected }: ImageUploaderProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsLoading(true);
      const file = e.target.files[0];
      
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "图片过大",
          description: "请选择小于2MB的图片",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        setImage(imageData);
        onImageSelected(imageData);
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = () => {
    if (!imageUrl) {
      toast({
        title: "请输入URL",
        description: "请输入有效的服装图片链接",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Fix: Use the DOM Image constructor properly
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      setImage(dataURL);
      onImageSelected(dataURL);
      setIsLoading(false);
    };
    img.onerror = () => {
      toast({
        title: "加载失败",
        description: "无法加载图片，请检查URL是否正确",
        variant: "destructive",
      });
      setIsLoading(false);
    };
    img.src = imageUrl;
  };
  
  const clearImage = () => {
    setImage(null);
    setImageUrl('');
    onImageSelected('');
  };

  // Show angle indicators for user photos
  const renderAngleGuide = () => {
    if (!isUserPhoto) return null;
    
    return (
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-3/4 h-3/4 border-2 border-dashed border-coral-light rounded-lg flex items-center justify-center">
          <div className="text-coral-light text-sm font-bold">
            请面向正前方，保持肩膀露出
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full mb-4 overflow-hidden card-shadow">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-deepblue">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
        
        {!image ? (
          <div className="space-y-4">
            <div className="relative w-full h-60 bg-gray-100 rounded-md flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              {renderAngleGuide()}
              {isLoading ? (
                <Loader className="h-10 w-10 text-coral animate-spin" />
              ) : (
                <>
                  <div className="text-4xl text-gray-400 mb-2">
                    {isUserPhoto ? <Camera className="h-10 w-10" /> : <ImageIcon className="h-10 w-10" />}
                  </div>
                  <p className="text-sm text-gray-500">点击上传{isUserPhoto ? "照片" : "服装图片"}</p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageChange}
                disabled={isLoading}
              />
            </div>
            
            {!isUserPhoto && (
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="输入服装图片链接"
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  disabled={isLoading}
                />
                <Button 
                  variant="outline" 
                  onClick={handleUrlSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : <CloudUpload className="h-4 w-4" />}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative w-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-60 object-contain rounded-md" 
            />
            <Button 
              variant="destructive" 
              size="icon" 
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              onClick={clearImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageUploader;
