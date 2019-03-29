import React from 'react';

import {
  default as wip
} from "./projects/wip.js"

import {
  default as puzzleBox
} from "./projects/puzzle-box.js"

import {
  default as escapeFromTheTower
} from "./projects/escape-from-the-tower.js"

import {
  default as xsummitGenerator
} from "./projects/xsummit-generator.js"

import {
  default as heForShe
} from "./projects/he-for-she.js"

export const email = "me.scottwilson@gmail.com";
export const emailLink = <a href={"mailto:"+email}>{email}</a>;
export const navTags = [ "coding", "physical","ux",];
export const projects = [wip, puzzleBox, xsummitGenerator,escapeFromTheTower,heForShe];
export const aboutText = `Hello! I'm Scott.

 I'm an interaction designer, maker, and 3D printer enthusiast in Ontario, Canada. I look forward to creating more awesome stuff.

I have a passion for design covering UX/UI, 3D modelling and printing, procedural generation, game design, and a good number of other things.

I think that design starts with finding out what works, what doesn't, and why. Then it's about creating something that makes life easier.

I'm available for all work, let me know if you're interested!`;
