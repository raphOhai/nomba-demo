import React, { useEffect } from "react";
import "./style.scss";
import { Button } from "components";

const CareerWidget = () => {
  useEffect(() => {
    // Create <script> element
    const script = document.createElement("script");
    script.src = "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.js";
    script.async = true;

    // Set up script attributes
    script.onload = () => {
      window.rec_embed_js.load({
        widget_id: "rec_job_listing_div",
        page_name: "Careers",
        source: "CareerSite",
        site: "https://nomba.zohorecruit.com",
        empty_job_msg: "No current Openings",
      });
    };

    // Append script to the document body
    document.body.appendChild(script);

    // Clean up function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleApply = () => {
    console.log("Apply button clicked");
    window.location.href = "https://nomba.zohorecruit.com";
  };

  return (
    <div>
      <div className="embed_jobs_head embed_jobs_with_style_3 embed_jobs_with_style">
        <div className="embed_jobs_head2">
          <div className="embed_jobs_head3">
            <div id="rec_job_listing_div" className="career-box">
              {" "}
            </div>
          </div>
        </div>
      </div>
      <div className="center ">
        <Button
          onClick={handleApply}
          className="!font-large !text-[16px] !min-w-[100px] !w-[200px] !text-left text-Btn"
          text="Apply Now"
          WithNomArrow={true}
        />
      </div>
    </div>
  );
};

export default CareerWidget;
