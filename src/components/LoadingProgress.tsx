
import React from 'react';
import { Progress } from "@/components/ui/progress";

type LoadingProgressProps = {
  progress: number;
  status: string;
};

const LoadingProgress = ({ progress, status }: LoadingProgressProps) => {
  return (
    <div className="w-full p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-deepblue">正在处理</span>
        <span className="text-sm text-coral">{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="mt-2 text-xs text-gray-500">{status}</p>
      <div className="mt-4 flex justify-center">
        <div className="relative">
          <div className="h-12 w-12 rounded-full bg-coral opacity-20"></div>
          <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-coral border-t-transparent animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProgress;
