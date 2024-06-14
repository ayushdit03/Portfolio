import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Javak Microcircuit Private Limited
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Data Analytics for PCB designing
          </h6>
          <p>• Demonstrated strong dedication, enthusiasm, and a proactive approach to learning and task execution.</p>
          <p>• Developed data analytics visualizations in Power BI, focusing on import-export charts, cost analysis, and profit tracking for individual clients.</p>
          <p>• Created comprehensive Power BI slides, effectively summarizing key insights and data trends. Transformed the Power BI project into a PowerPoint presentation for use by higher officials in decision-making processes.</p>
          <p>• Exhibited remarkable adaptability and a keen willingness to grasp new concepts and apply them effectively. Made valuable contributions to the team, showcasing commitment and initiative in all assigned tasks.</p>
          <p>• Gained practical experience in data analytics, visualization, and presentation within the PCB manufacturing industry.</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
