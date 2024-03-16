import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience for your baby child, offering
          a comprehensive range of on-demand medical services tailored to your
          needs. Our platform allows you to connect with experienced online
          doctors who provide expert medical advice, issue online prescriptions,
          and offer quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care for your baby."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Child Vaccination"
          description="Ensure your child's healt and protection with our comprehensive Child 
          Vaccination services. Our experienced professionals offer a complete range of vaccinations,
          tailored to your child's age and specific need. From routine immunizations to 
          safeguard against common childhood illnesses to specialized vaccines for health conditons, we prioritize your child's well-being"
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
