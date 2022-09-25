import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <section className="bg-gray px-4 py-2">
        <div className="flex bg-gray">
          <div className="w-2/12 mx-auto text-center bg-white rounded py-2">
            <FaUserCircle className="mx-auto text-2xl" />
            <p>Marcos Ochieng</p>
          </div>
          <div className="w-10/12 mx-auto bg-gray py-4 px-4">
            <button className="uppercase bg-blue text-white p-2 text-xs rounded font-semibold">Book appointment</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
