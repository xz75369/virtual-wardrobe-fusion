
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ResultCardProps = {
  image: string;
  confidenceScore: number;
  timestamp: string;
};

const ResultCard = ({ image, confidenceScore, timestamp }: ResultCardProps) => {
  // Calculate confidence level based on SSIM value
  const getConfidenceLabel = (score: number) => {
    if (score > 0.85) return { label: "高度匹配", color: "bg-green-500" };
    if (score > 0.7) return { label: "良好匹配", color: "bg-coral" };
    return { label: "基础匹配", color: "bg-yellow-500" };
  };

  const confidence = getConfidenceLabel(confidenceScore);

  return (
    <div className="grid-masonry-item">
      <Card className="overflow-hidden card-shadow transition-all duration-300 hover:shadow-lg">
        <div className="relative">
          <img 
            src={image} 
            alt="试衣结果" 
            className="w-full h-auto object-cover"
          />
          <Badge 
            className={`absolute top-2 right-2 ${confidence.color} text-white`}
          >
            {confidence.label} {confidenceScore.toFixed(2)}
          </Badge>
        </div>
        <CardContent className="p-3">
          <p className="text-xs text-gray-500">{timestamp}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;
