import React, { useState, useEffect } from 'react';

const Notfound = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Yeh timeout simulation ke liye hai, aap isay remove kar sakte hain apne actual logic mein
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds ke liye preloader dikhaye ga

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-white">Welcome to the Website!</h1>
    </div>
  );
};

export default Notfound;
