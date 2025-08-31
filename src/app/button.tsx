import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Button = () => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setShowPasswordInput(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'walkonwater') { // Change this to your desired password
      router.push('/index');
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (showPasswordInput) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <form onSubmit={handlePasswordSubmit} className="flex flex-col items-center space-y-3">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className="px-4 py-2 text-lg font-light text-white bg-transparent border-2 border-white rounded-full placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            style={{
              fontFamily: 'Apple Garamond, serif'
            }}
            autoFocus
          />
          <button
            type="submit"
            className="px-6 py-2 text-lg font-light text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            style={{
              fontFamily: 'Apple Garamond, serif'
            }}
          >
            Submit
          </button>
        </form>
        <button
          onClick={() => setShowPasswordInput(false)}
          className="px-4 py-1 text-sm font-light text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none"
          style={{
            fontFamily: 'Apple Garamond, serif'
          }}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={handleButtonClick}
      className="group relative px-6 py-2 text-lg font-light text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
      style={{
        fontFamily: 'Apple Garamond, serif'
      }}
    >
      <span className="flex items-center space-x-2">
        <span>Enter</span>
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
};

export default Button;