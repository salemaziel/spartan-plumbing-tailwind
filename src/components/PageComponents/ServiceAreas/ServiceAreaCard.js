import React from "react";
import { Link } from "gatsby";

/**
 * ServiceAreaCard - A reusable component for displaying a service area with image and name
 * 
 * @param {Object} props - Component props
 * @param {string} props.to - The link destination
 * @param {string} props.image - The image source
 * @param {string} props.name - The name of the service area
 * @param {string} props.altText - The alt text for the image
 * @param {string} props.className - Additional class names for styling
 * @returns {JSX.Element} - The rendered component
 */
function ServiceAreaCard({ to, image, name, altText, className = "" }) {
  return (
    <Link to={to} className={`px-2 group sm:flex sm:items-center sm:justify-center ${className}`}>
      <div className="relative flex items-center justify-center h-full px-5 pb-32 bg-logo-blue-500 xl:w-full">
        <img 
          className="object-cover object-center w-full -mt-32 transition duration-200 group-hover:scale-110" 
          src={image} 
          alt={altText || name} 
        />
        <div className="absolute bottom-0 left-0 flex items-center mb-12 ml-7">
          <hr className="w-16 bg-white border-2 border-white" />
          <p className="ml-2 text-2xl font-light leading-normal text-white">{name}</p>
        </div>
      </div>
    </Link>
  );
}

export default ServiceAreaCard;
