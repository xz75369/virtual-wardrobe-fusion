
import React from 'react';
import ResultCard from './ResultCard';

export type TryOnResult = {
  id: string;
  imageUrl: string;
  confidenceScore: number;
  timestamp: string;
};

type ResultsGalleryProps = {
  results: TryOnResult[];
  isLoading: boolean;
};

const ResultsGallery = ({ results, isLoading }: ResultsGalleryProps) => {
  if (isLoading) {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-deepblue mb-4">生成结果</h3>
        <div className="grid-masonry">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="grid-masonry-item">
              <div className="rounded-md skeleton h-[300px] w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-deepblue mb-4">生成结果</h3>
        <div className="text-center py-10 bg-gray-50 rounded-md">
          <p className="text-gray-500">上传照片和服装开始虚拟试衣</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-deepblue mb-4">生成结果</h3>
      <div className="grid-masonry">
        {results.map((result) => (
          <ResultCard
            key={result.id}
            image={result.imageUrl}
            confidenceScore={result.confidenceScore}
            timestamp={result.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsGallery;
