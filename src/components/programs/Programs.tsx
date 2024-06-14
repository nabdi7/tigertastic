import React from 'react';

const Programs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-gray-800 text-4xl font-bold mb-10 text-center">Our Programs</h1>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg flex items-center">
        <svg
          className="text-blue-500 w-16 h-16 mr-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4zm0 14c3.866 0 7-3.134 7-7H5c0 3.866 3.134 7 7 7z"
          />
        </svg>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold mb-2">Infant Care</h2>
          <p className="text-gray-600">
            Our Infant Care program provides a safe and nurturing environment for your little ones. We focus on early development skills and provide personalized care to meet the needs of each baby.
          </p>
        </div>
      </section>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg flex items-center">
        <svg
          className="text-green-500 w-16 h-16 mr-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11a7 7 0 11-14 0 7 7 0 0114 0zM9 10h6m-3-3v6"
          />
        </svg>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold mb-2">Toddler Program</h2>
          <p className="text-gray-600">
            The Toddler Program is designed to support your childs growing independence and curiosity. Activities include sensory play, music, and early learning exercises to foster development.
          </p>
        </div>
      </section>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg flex items-center">
        <svg
          className="text-yellow-500 w-16 h-16 mr-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zM12 14v10m0-10l-9-5m9 5l9-5"
          />
        </svg>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold mb-2">Preschool Program</h2>
          <p className="text-gray-600">
            Our Preschool Program prepares children for their next educational steps with a curriculum that promotes literacy, math skills, and social development in a fun and engaging way.
          </p>
        </div>
      </section>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg flex items-center">
        <svg
          className="text-red-500 w-16 h-16 mr-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 16v4H8v-4m-2 0a6 6 0 1112 0v4H6v-4z"
          />
        </svg>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold mb-2">After-School Care</h2>
          <p className="text-gray-600">
            The After-School Care program provides a safe and enriching environment for school-aged children. We offer homework assistance, outdoor play, and a variety of activities to keep them engaged.
          </p>
        </div>
      </section>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg flex items-center">
        <svg
          className="text-purple-500 w-16 h-16 mr-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m8-14a4 4 0 110-8 4 4 0 010 8z"
          />
        </svg>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold mb-2">Summer Camp</h2>
          <p className="text-gray-600">
            Our Summer Camp program is filled with exciting adventures and learning opportunities. From field trips to creative projects, children enjoy a summer full of fun and exploration.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Programs;
