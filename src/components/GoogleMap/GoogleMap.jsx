import { Grid } from "@mui/material";
import React from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
      <div className="google-map">
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124959.8543258826!2d5.607196587199276!3d51.93408403249094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7aca44596b529%3A0x6d969daa6063b730!2sTarthorst%201%2C%206708%20HG%20Wageningen%2C%20Netherlands!5e0!3m2!1sen!2slk!4v1690012211811!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: "none", borderRadius: "10px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Grid>
  );
};

export default GoogleMap;
