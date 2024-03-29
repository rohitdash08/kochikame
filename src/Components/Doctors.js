import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile1.jpg";
import profile2 from "../Assets/profile2.jpg";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctor Vikas Kargal Patil</span>
        </h3>

        <p className="dt-description">
          Vikas Kargal Patil is renowned for his compassionate approach,
          ensuring that each child feels comfortable and supported during their
          medical journey. He takes the time to listen to both parents and
          children, addressing any concerns and providing personalized treatment
          plans tailored to each child's unique needs.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Vikas Bhai"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Princess Bhai"
          title="princesslogist"
          stars="4.8"
          reviews="3700"
        />
      </div>
    </div>
  );
}

export default Doctors;
