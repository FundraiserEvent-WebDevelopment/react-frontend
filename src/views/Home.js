import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Member from "../components/Member";

import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import downArrow from "../images/down-arrow.png";

export default function Home() {
  return (
    <div>
      <div id="main">
        <h1>Student Fundraiser Name</h1>
        <span>November 18th 2021 | Western Michigan University</span>
        <div>
          <Button variant="contained">Sign up as a vendor</Button>
          <Button variant="contained">
            <Link to="/vendors">Check out vendors</Link>
          </Button>
          <HashLink smooth to="/#about">
            <img src={downArrow} alt="" />
          </HashLink>
        </div>
      </div>

      <div id="about">
        <h3>Showcase your work</h3>
        <p>
          The NAME is a fundraising event focused on providing students an
          opportunity to showcase their works, crafts, and services on campus
        </p>
        <h3>Make a change</h3>
        <p>
          From handmade jewelry, fresh pastries, and awe-spiring drawings, we
          aim to raise money for the <b>AAPI community</b> and the
          <b>BLM Movement.</b>
        </p>
      </div>

      <div id="details">
        <h2>Details</h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            When and where would the event be held?
          </AccordionSummary>
          <AccordionDetails>
            The event will be held on the 18th of November at 5-8pm located at
            WMU flagpoles!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Who can participate as a vendor?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            How much do I have to pay as a vendor?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              When is the deadline to register as a vendor?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Would the event be in-person or virtual?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            What kind of crafts/services are available?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Can non-students participate?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            How to register as a vendor?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
      <div id="vendors">
        <h2>Participating Vendors</h2>
      </div>
      <div id="team">
        <h2>Our Team</h2>
        <Member name="Elaine" image="" role="Leader and Organizer" />
        <Member name="Michaella" image="" role="Front-end Lead" />
        <Member name="Adam" image="" role="Back-end Lead" />
        <Member name="Jia Yu" image="" role="Front-end" />
        <Member name="Brittney" image="" role="Front-end" />
      </div>
      <div id="sponsors">
        <h2>Our Sponsor</h2>
        <h2>Who we're fundraising for:</h2>
      </div>
      <div id="contacts">
        <span>Contact Us at EMAIL</span>
      </div>
    </div>
  );
}
