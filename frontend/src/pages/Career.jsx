import React from "react";

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Career Resources
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Access resume tips, interview advice and career guidance 
          to boost your job search.
        </p>
      </div>

      {/* Resources Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Resume Tips */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Resume Tips
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Keep your resume to 1 page (max 2 pages).</li>
            <li>Use bullet points instead of long paragraphs.</li>
            <li>Add measurable achievements (e.g., Increased sales by 20%).</li>
            <li>Use a clean and professional format.</li>
            <li>Customize your resume for each job.</li>
          </ul>
        </div>

        {/* Interview Advice */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Interview Advice
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Research the company before the interview.</li>
            <li>Practice common interview questions.</li>
            <li>Dress professionally.</li>
            <li>Maintain eye contact and confident body language.</li>
            <li>Ask thoughtful questions at the end.</li>
          </ul>
        </div>

        {/* Career Guidance */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Career Guidance
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Set clear short-term and long-term goals.</li>
            <li>Keep learning new skills regularly.</li>
            <li>Build a strong LinkedIn profile.</li>
            <li>Network with professionals in your field.</li>
            <li>Stay consistent and patient in your job search.</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Career;