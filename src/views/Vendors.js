import { Description } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard";

export default function Vendors() {
  const [vendorList, setVendorList] = useState([]);
  let vendorCards = [];

  // const fake = {
  //   imgSrc: carouselImage,
  //   prodName: "Something",
  //   description: "This is one of the vendorcards",
  // };

  useEffect(() => {
    async function getVendors() {
      // console.log("calling getVendors()");
      try {
        const response = await fetch("http://localhost:8080/vendor");
        console.log(response, ">>> response");
        const json = await response.json();
        console.log(json, ">>> json");
        setVendorList([...json]);
        console.log(vendorList, ">>> vendorlist");
      } catch (error) {
        console.log(error, "something went wrong");
      }
    }

    getVendors();
  }, []);

  vendorCards = vendorList.map((vendor) => {
    console.log(vendor);
    return <VendorCard {...vendor} />;
  });

  return (
    <div>
      <div id="vendors" class="main">
        <h1>Showcase your work; Make a change.</h1>
        <span>
          November 16th 2021 @ 6-9pm • Western Michigan University • In-person
        </span>
      </div>
      <div id="vendor-list">
        <div class="vendors">
          {/* <VendorCard {...fake} />
          <VendorCard {...fake} />
          <VendorCard {...fake} />
          <VendorCard {...fake} />
          <VendorCard {...fake} /> */}
          {vendorCards}
        </div>
      </div>
      <div id="contact" class="contacts">
        <span>Contact us at cab-culturalevents@wmich.edu!</span>
      </div>
    </div>
  );
}
