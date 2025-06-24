import { useState } from 'react';
import { Star } from 'lucide-react';

export default function RatingPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // Optionally send rating to backend
  };

  return (
    <div className=" my-8 md:my-[100px] lg:my-[150px] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-3xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#1E3A8A] mb-4">Rate Your Experience</h1>
        <p className="text-gray-600 mb-6">We value your feedback! Please rate our service below.</p>

        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 cursor-pointer transition-all ${
                (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
              fill={(hover || rating) >= star ? 'currentColor' : 'none'}
            />
          ))}
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#22C55E] hover:bg-green-600 text-white rounded-full text-sm font-medium transition"
          >
            Submit Rating
          </button>
        ) : (
          <p className="text-green-600 font-medium">Thank you for your feedback!</p>
        )}
      </div>
    </div>
  );
}
