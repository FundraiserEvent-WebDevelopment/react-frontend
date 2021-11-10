import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import carouselImage from "../images/carousel.jpg";
import Carousel from "react-material-ui-carousel";

import SlideCard from "./SlideCard";
import CarouselCard from "./CarouselCard";

// DATABASE SCHEMA
// create table vendors(
// 	id SERIAL primary KEY,
// 	first_name VARCHAR(50) not null,
// 	last_name VARCHAR(50) not null,
// 	pronouns VARCHAR(50),
// 	email VARCHAR(50) NOT NULL,
// 	goods_type INTEGER,
// 	description TEXT,
// 	lower_price INTEGER,
// 	upper_price INTEGER
// );

// for each vendor, you call for the images provided?

// create table images(
// 	id SERIAL primary Key,
// 	vendor_id INTEGER NOT NULL,
// 	is_profile_pic BOOLEAN,
// 	link TEXT
// );

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "60%",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "8px",
  padding: 4,
  outline: "none",
};

export default function VendorCard(props) {
  const [open, setOpen] = React.useState(false);
  // const [autoPlay, setAutoPlay] = useState(false);
  const [images, setImages] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fakeImages = [
    { id: 1, vendor_id: 1, is_profile_pic: false, link: carouselImage },
    { id: 1, vendor_id: 1, is_profile_pic: false, link: carouselImage },
    { id: 1, vendor_id: 1, is_profile_pic: false, link: carouselImage },
    { id: 1, vendor_id: 1, is_profile_pic: false, link: carouselImage },
    { id: 1, vendor_id: 1, is_profile_pic: false, link: carouselImage },
  ];

  // ../vendor returns all vendors in the DB
  // ../images returns all images
  // ../vendorid/x returns the the vendor of id x
  // ../vendorimages/x returns all images for vendor x

  // const images = [props.image1, props.image2, props.image3, props.image4];

  useEffect(() => {
    async function getImages() {
      // console.log("calling getVendors()");
      try {
        const response = await fetch(
          `http://localhost:8080/vendorimages/${props.id}`
        );
        console.log(response, ">>> response");
        const json = await response.json();
        console.log(json, ">>> json");
        setImages([...json]);
        console.log(images, ">>> vendorImages");
      } catch (error) {
        console.log(error, "something went wrong");
      }
    }

    getImages();
  }, []);

  return (
    <div class="slides">
      <Card
        sx={{ width: 300, textTransform: "capitalize" }}
        onClick={handleOpen}
      >
        {/* <CardMedia
          component="img"
          height="140"
          image={carouselImage}
          alt={props.first_name}
        /> */}
        <Carousel autoPlay={false} indicators={false} class="carousel-card">
          {images.map((slide) => (
            <CarouselCard {...slide} />
          ))}
        </Carousel>
        <CardContent sx={{ height: 100 }}>
          <span className="vendor-name">
            {props.first_name} {props.last_name}
          </span>
          <p>{props.goods_type}</p>
          <p className="price">
            ${props.lower_price} - ${props.upper_price}
          </p>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="box">
            <Carousel autoPlay={false} class="carousel-modal">
              {images.map((slide) => (
                <SlideCard {...slide} />
              ))}
            </Carousel>
            <div class="box-content">
              <span class="vendor-name">
                {props.first_name} {props.last_name}
              </span>

              <p class="goods-type">{props.goods_type}</p>
              <p class="description">{props.description}</p>

              <p>
                Price range: ${props.lower_price} - ${props.upper_price}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
