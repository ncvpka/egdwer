import { useLocation } from "react-router-dom";
import React from "react";
import { format } from "date-fns";
export default function BookingDetails(props) {
    const { state } = useLocation();
    const { bookingID, bookDate, content, patient } = state;
    const { patientID, patientInfo } = patient;
    const { name, age, gender, phone, email } = patientInfo;
    const formattedDate = format(new Date(bookDate), 'dd/MM/yyyy');
    return (
        <div className="flex flex-col">
      <div className="py-8">
        <h1 className="text-center text-3xl font-bold">Booking Details</h1>
      </div>
      <div className="flex-grow  p-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Booking ID
            </label>
            <div className="py-2 border-b border-gray-200">
              {bookingID}
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Booking Date
            </label>
            <div className="py-2 border-b border-gray-200">
              {formattedDate}
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Content
            </label>
            <div className="py-2 border-b border-gray-200">
              {content}
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Patient ID
            </label>
            <div className="py-2 border-b border-gray-200">
              {patient.patientID}
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Patient Name
            </label>
            <div className="py-2 border-b border-gray-200">
              {patient.patientInfo.name}
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Patient Age
            </label>
            <div className="py-2 border-b border-gray-200">
              {patient.patientInfo.age}
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Patient Email
            </label>
            <div className="py-2 border-b border-gray-200">
              {patient.patientInfo.email}
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Patient Phone
            </label>
            <div className="py-2 border-b border-gray-200">
              {patient.patientInfo.phone}
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold mb-1 block">
              Patient Gender
            </label>
            <div className="py-2 border-b border-gray-200">
              {patient.patientInfo.gender ? "Male" : "Female"}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
