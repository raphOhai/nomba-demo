import React, { useEffect } from "react";
import "./style.scss";
import { Button } from "components";
import { Script } from "gatsby";

const CareerWidget = () => {
  const handleApply = () => {
    console.log("Apply button clicked");
    window.location.href = "https://nomba.zohorecruit.com";
  };
  useEffect(() => {
    <Script
      src="https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.js"
      onLoad={() => {
        window.rec_embed_js.load({
          widget_id: "rec_job_listing_div",
          page_name: "Careers",
          source: "CareerSite",
          site: "https://nomba.zohorecruit.com",
          empty_job_msg: "No current Openings",
        });
      }}
    />;
  }, []);

  return (
    <div>
      <Script
        src="https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.js"
        onLoad={() => {
          window.rec_embed_js.load({
            widget_id: "rec_job_listing_div",
            page_name: "Careers",
            source: "CareerSite",
            site: "https://nomba.zohorecruit.com",
            empty_job_msg: "No current Openings",
          });
        }}
      />
      <div className="embed_jobs_head embed_jobs_with_style_3 embed_jobs_with_style">
        <div className="embed_jobs_head2">
          <div className="embed_jobs_head3">
            <div id="rec_job_listing_div" className="career-box roles-grid"></div>
          </div>
        </div>
      </div>
      <div className="center">
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
