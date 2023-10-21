import React from "react";
import "./index.css"

export default function Footer() {
  const curYear = new Date().getFullYear();
  return <footer><p>copyright © {curYear}</p></footer>;
}
