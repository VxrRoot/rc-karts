"use client";
import { FC, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
// Default theme
import "@splidejs/react-splide/css";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


const Race = () => {

    useEffect(()=>{
      gsap.registerPlugin(MotionPathPlugin);
        const duration = 5;
        
        const red = { 
          line: document.querySelector('#red-line'),
          car: document.querySelector('#red-car-container'),
        }
        
        
        const blue = { 
          line: document.querySelector('#blue-line'),
          car: document.querySelector('#blue-car-container'),
        }
        
        
        const timeline = gsap.timeline({repeat: -1});
        
        
        timeline.set(['#red-car', '#blue-car'], {transformOrigin: '90% 50%', x: '-80', y: '-25'});
        
        
        timeline.to(red.car, {
          duration: duration,
          transformOrigin: '50% 50%',
          motionPath: {
            path: '#red-path',
            autoRotate: true
          },
          ease: 'linear'
        })
        
        
        timeline.to(blue.car, {
          duration: duration,
          transformOrigin: '50% 50%',
          motionPath: {
            path: '#blue-path',
            autoRotate: true,
            start: 0.05,
            end: 1.05
          },
          ease: 'linear'
        }, 0)
    })
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="svg"
    x="0px"
    y="0px"
    viewBox="0 0 1122.1 634.4"
    xmlSpace="preserve"
  >
    <style type="text/css">
      {
        "\n\t.st0{fill:none;stroke:#4D4D4D;stroke-width:62;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:#FF0000;stroke-miterlimit:10;}\n\t.st2{fill:none;stroke:#0021D0;stroke-miterlimit:10;}\n\t.st3{fill:#FF492E;fill-opacity:0.9961;}\n\t.st4{opacity:0.9;fill:#262626;fill-opacity:0.9961;enable-background:new    ;}\n\t.st5{fill:#006AFF;fill-opacity:0.9961;}\n\t.st6{fill:#3278FF;fill-opacity:0.9961;}\n\t.st7{fill:#FFFFFF;}\n"
      }
    </style>
    <title>{"race"}</title>
    <g id="Layer_2">
      <g id="container">
        <g id="race">
          <path
            id="track"
            className="st0"
            d="M149.1,273.5c41.4-89.5,94.4-195.6,184.4-172.3c37.7,6.9,68.8,37.5,85.1,118     C411.6,300.3,461.9,326,519,333.8c215.7-7.8,483.3-17.7,448.1,86C937.5,541.6,678.5,524.7,521,491.8     c-54.3-11.3-69.6-1.5-138.3,1.9c-75.9,3.6-105.2,8.3-153.7-0.9C167,481.2,105.9,366.6,149.1,273.5z"
          />
          <path
            id="red-path"
            className="st1 hidden"
            d="M134,262.8C175.4,173.3,236.7,71,326.6,94.3c114.7,29.6,4.3,119.4,167.6,226.7     c56.9,37.4,309.7,25.3,413.1,23c66.7,16.8,110.4,75.8,18.2,142c-168.2,64.8-220.2,17.4-390.2,12.4c-55.4-1.6-101.9-3.3-170.6,0     C288.8,502,271.5,488,223,478.8C161,467.2,90.8,356,134,262.8z"
          />
          <path
            id="blue-path"
            className="st2 hidden"
            d="M180,234.8c45.1-92.1,80.9-170.9,168-129.6c114.7,29.6-27.5,126.5,159.2,228.6     c64,35,293.6-8.5,400,10.1c137.2,39.4,1.9,201.9-78.1,175.8c-109.6,2.8-73.6-11-207.6,0c-54.1,4.4-154.6-24.4-232.6-25.4     c-76-1-140.4,3-188.7-7C79.3,462.3,139,270.8,180,234.8z"
          />
          <g id="red-car-container">
            <g id="red-car">
              <g id="red-car-smoke">
                <circle cx={66.4} cy={33.3} r={2} />
              </g>
              <path
                id="path2853"
                className="st3"
                d="M89.1,20.3c-0.1,0-0.2,0-0.4,0l-0.2,0.1l0.5,2.1h-7.2c-4.5,0-9.6-0.7-13.4-0.5       c-3,0.2-5.9,0.8-8.7,1.6l-0.8,0.2c-1.1,0.3-1.5,5.6-1.5,9.6v0.4c0,4,0.4,9.3,1.5,9.6l0.8,0.2c2.8,0.8,5.8,1.4,8.7,1.6       c3.8,0.1,8.9-0.6,13.4-0.5H89l-0.5,2.1l0.2,0.1c0.1,0,0.2,0.1,0.4,0.1h0.2h0.1l0,0h0.1c0.1,0,0.2-0.1,0.3-0.2l0,0       c0,0,0.1-0.1,0.1-0.1l0.7-1.8h6.3c1.3,0.6,2.8,0.8,4.2,0.6c7.7,0,10.8-5,10.7-11.6v-0.3c0-6.6-3.1-11.6-10.7-11.6       c-1.4-0.2-2.9,0.1-4.2,0.6h-6.2l-0.7-1.8c0,0,0-0.1-0.1-0.1l0,0c-0.1-0.1-0.2-0.1-0.3-0.2h-0.1l0,0h-0.2L89.1,20.3z"
              />
              <path
                id="path3643"
                className="st4"
                d="M77,41.1c-1.8,0-3.6,0.1-5.4,0.3c1.5,2.8,5.6,1.7,11.8,1.8c2.8,0,5.1,0.1,7,0.1       C87.6,42,82.7,41.1,77,41.1z"
              />
              <path
                id="path3658"
                className="st3"
                d="M77,41.1h-0.6c0,0.8,0.3,1.6,0.8,2.2h0.8c-0.6-0.6-0.9-1.4-0.9-2.2L77,41.1z"
              />
              <path
                id="rect2864"
                className="st4"
                d="M69,26.9l-4.5,0.7c-1.6,0.3-2.8,2.8-2.9,6c0.1,3.2,1.4,5.8,2.9,6l4.5,0.7       c0.7,0,1.3-0.6,1.3-1.3V28.3C70.4,27.5,69.8,26.9,69,26.9z"
              />
              <path
                id="path3703"
                className="st4"
                d="M93.8,24.9c-0.2,0-0.3,0-0.5,0.1l0,0l-3.7,0.7c-1,0.4-1.8,0.8-1.8,1.8v12.2       c0,1,0.8,1.5,1.8,1.8l3.7,0.7l0,0c0.2,0,0.3,0,0.5,0c2.6,0,4.7-3.3,4.7-8.7S96.4,24.9,93.8,24.9z"
              />
              <path
                id="path4157"
                className="st4"
                d="M77,26.1c-1.8,0-3.6-0.1-5.4-0.3C73,23,77.2,24.1,83.4,24c2.8,0,5.1-0.1,7-0.1       C87.7,25.2,82.7,26.1,77,26.1L77,26.1z"
              />
              <path
                id="path4159"
                className="st3"
                d="M77,26.1h-0.6c0-0.8,0.3-1.6,0.8-2.2h0.8c-0.6,0.6-0.9,1.4-0.9,2.2L77,26.1z"
              />
            </g>
          </g>
          <g id="blue-car-container">
            <g id="blue-car">
              <g id="blue-car-smoke">
                <circle cx={66.4} cy={33.3} r={2} />
              </g>
              <path
                id="path2853-2"
                className="st5"
                d="M89.1,20.3c-0.1,0-0.2,0-0.4,0l-0.2,0.1l0.5,2.1h-7.2c-4.5,0-9.6-0.7-13.4-0.5       c-3,0.2-5.9,0.8-8.7,1.6l-0.8,0.2c-1.1,0.3-1.5,5.6-1.5,9.6v0.4c0,4,0.4,9.3,1.5,9.6l0.8,0.2c2.8,0.8,5.8,1.4,8.7,1.6       c3.8,0.1,8.9-0.6,13.4-0.5H89l-0.5,2.1l0.2,0.1c0.1,0,0.2,0.1,0.4,0.1h0.2h0.1l0,0h0.1c0.1,0,0.2-0.1,0.3-0.2l0,0       c0,0,0.1-0.1,0.1-0.1l0.7-1.8h6.3c1.3,0.6,2.8,0.8,4.2,0.6c7.7,0,10.8-5,10.7-11.6v-0.3c0-6.6-3.1-11.6-10.7-11.6       c-1.4-0.2-2.9,0.1-4.2,0.6h-6.2l-0.7-1.8c0,0,0-0.1-0.1-0.1l0,0c-0.1-0.1-0.2-0.1-0.3-0.2h-0.1l0,0h-0.2L89.1,20.3z"
              />
              <path
                id="path3643-2"
                className="st4"
                d="M77,41.1c-1.8,0-3.6,0.1-5.4,0.3c1.5,2.8,5.6,1.7,11.8,1.8c2.8,0,5.1,0.1,7,0.1       C87.6,42,82.7,41.1,77,41.1z"
              />
              <path
                id="path3658-2"
                className="st6"
                d="M77,41.1h-0.6c0,0.8,0.3,1.6,0.8,2.2h0.8c-0.6-0.6-0.9-1.4-0.9-2.2L77,41.1z"
              />
              <path
                id="rect2864-2"
                className="st4"
                d="M69,26.9l-4.5,0.7c-1.6,0.3-2.8,2.8-2.9,6c0.1,3.2,1.4,5.8,2.9,6l4.5,0.7       c0.7,0,1.3-0.6,1.3-1.3V28.3C70.4,27.5,69.8,26.9,69,26.9z"
              />
              <path
                id="path3703-2"
                className="st4"
                d="M93.8,24.9c-0.2,0-0.3,0-0.5,0.1l0,0l-3.7,0.7c-1,0.4-1.8,0.8-1.8,1.8v12.2       c0,1,0.8,1.5,1.8,1.8l3.7,0.7l0,0c0.2,0,0.3,0,0.5,0c2.6,0,4.7-3.3,4.7-8.7S96.4,24.9,93.8,24.9z"
              />
              <path
                id="path4157-2"
                className="st4"
                d="M77,26.1c-1.8,0-3.6-0.1-5.4-0.3C73,23,77.2,24.1,83.4,24c2.8,0,5.1-0.1,7-0.1       C87.7,25.2,82.7,26.1,77,26.1L77,26.1z"
              />
              <path
                id="path4159-2"
                className="st6"
                d="M77,26.1h-0.6c0-0.8,0.3-1.6,0.8-2.2h0.8c-0.6,0.6-0.9,1.4-0.9,2.2L77,26.1z"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
  );
};

export default Race;
