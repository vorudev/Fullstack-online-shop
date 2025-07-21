import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  onRatingChange, 
  maxRating = 5 
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= (hoverRating || rating);
        
        return (
          <button
            key={index}
            type="button"
            className={`transition-colors duration-200 ${
              isActive 
                ? 'text-yellow-400 hover:text-yellow-500' 
                : 'text-gray-300 hover:text-yellow-200'
            }`}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => onRatingChange(starValue)}
          >
            <Star 
              className="w-6 h-6" 
              fill={isActive ? 'currentColor' : 'none'}
            />
          </button>
        );
      })}
      <span className="ml-2 text-sm text-gray-600">
        {rating > 0 ? `${rating}/5` : 'Выберите рейтинг'}
      </span>
    </div>
  );
};

export default StarRating;