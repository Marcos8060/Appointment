import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiPlus } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md';

const Dashboard = () => {
  return (
    <>
      <section className="px-4 py-2">
        <div className="flex">
          <div className="w-2/12 mx-auto text-center bg-white shadow-2xl rounded py-4 mx-2">
            <FaUserCircle className="mx-auto text-2xl" />
            <p>Marcos Ochieng</p>
            <button className="bg-blue text-white px-3 py-2 mt-4 text-xs rounded-3xl font-semibold">
                <div className="flex items-center">
                <BiPlus className="text-white font-bold text-xl"/>
                Book New Appointment
                </div>
            </button>
            <button className="bg-blue text-white px-3 py-2 mt-4 text-xs rounded-3xl font-semibold">
                <div className="flex items-center">
                <MdDelete className="text-red font-bold"/>
                Cancel Appointment
                </div>
            </button>
          </div>
          <div className="w-10/12 mx-auto bg-gray rounded py-4 px-4 mx-4">
            <h1>All</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
