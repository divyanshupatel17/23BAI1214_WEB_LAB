const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-white">About E-Shop</h1>
          
          <p className="text-gray-600 mb-6">
            E-Shop is a modern e-commerce platform designed to provide users with a seamless 
            shopping experience. Our platform offers a wide range of products across various 
            categories including electronics, clothing, footwear, and accessories.
          </p>
          
          <div className="border-t border-b border-gray-700 py-6 my-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Developer Details</h2>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-48 h-48 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-6xl text-gray-300">DP</span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Divyanshu Patel</h3>
                
                <p className="text-gray-600 mb-4">
                  A passionate Web Developer and Digital Concept Artist, currently pursuing 
                  B.Tech in Computer Science at VIT Chennai. Skilled in frontend development, 
                  database management, and networking.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Contact Details:</h4>
                  
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href="mailto:divyanshu.patel2023@vitstudent.ac.in" 
                        className="text-blue-600 hover:underline"
                      >
                        divyanshu.patel2023@vitstudent.ac.in
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <a 
                        href="https://github.com/divyanshupatel17" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        github.com/divyanshupatel17
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href="https://www.linkedin.com/in/patel-divyanshu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        linkedin.com/in/patel-divyanshu
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <a 
                        href="https://instagram.com/patel_divyanshu_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        @patel_divyanshu_
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">
            This project was built using React and Vite, featuring a responsive design for all devices.
            Feel free to explore the website and enjoy the shopping experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 