import React from "react";

export default function SlideCard(props) {
  console.log(props);
  return (
    <div class="slide-card">
      <img src={props.link} alt="" />
    </div>
  );
}
