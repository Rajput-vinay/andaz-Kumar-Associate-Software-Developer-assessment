'use client';

import React from 'react';
import { FaThumbsUp, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineCalendarToday } from 'react-icons/md';

type DoctorCardProps = {
  name: string;
  specialization: string;
  experience: string;
  location: string;
  clinicName: string;
  consultationFee: number;
  rating: number;
  patientStories: number;
  imageUrl: string;
  availableToday: boolean;
};

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  experience,
  location,
  clinicName,
  consultationFee,
  rating,
  patientStories,
  imageUrl,
  availableToday,
}) => {
  return (
    <div className="border border-gray-300 rounded-md shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row justify-between gap-4 bg-white">
      {/* Left Column */}
      <div className="flex sm:flex-col items-center gap-3 sm:items-center sm:w-[120px]">
        <img
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          className="rounded-full object-cover w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
        />
        <button className="text-sm font-semibold text-[#199FD9] hover:underline mt-1 sm:mt-2">
          View Profile
        </button>
      </div>

      {/* Info Section */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-[#199FD9]">{name}</h2>
        <p className="text-sm text-gray-600">{specialization}</p>
        <p className="text-sm text-gray-600 mt-1">{experience}</p>

        <div className="text-sm mt-2 text-gray-800">
          <span className="font-medium">{location}, </span>
          <span className="capitalize">{clinicName}</span>
        </div>

        <div className="text-sm mt-1 text-gray-700">
          ₹{consultationFee} Consultation fee at clinic
        </div>

        <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-4 text-sm items-center">
          <div className="flex items-center text-green-600 font-semibold">
            <FaThumbsUp className="mr-1" /> {rating}%
          </div>
          <div className="text-blue-600 underline font-semibold">
            {patientStories} Patient Stories
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex flex-col justify-between items-center sm:items-end gap-2 sm:w-[150px]">
        {availableToday && (
          <div className="text-green-600 text-sm font-semibold flex items-center gap-1">
            <MdOutlineCalendarToday className="text-lg" />
            <span>Available Today</span>
          </div>
        )}

        <div className="flex flex-col gap-2 w-full">
          <button className="bg-[#199FD9] text-white py-2 px-4 rounded font-semibold text-sm transition text-center">
            Book Clinic Visit
            <div className="text-[10px] font-normal">No Booking Fee</div>
          </button>
          <button className="border border-gray-300 text-[#199FD9] py-2 px-4 rounded font-semibold text-sm flex items-center justify-center gap-2">
            <FaPhoneAlt /> Contact Clinic
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
