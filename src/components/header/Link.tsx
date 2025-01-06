import React from 'react'
import { NavLink } from "react-router-dom";
import { LinkData } from '@/shared/types';

const linkDate: Array <LinkData>  =  [
    {
        to: "/",
        name: "Home"
    },
    {
        to: "/news",
        name: "News"
    },
    {
        to: "/podcasts",
        name: "Podcasts"
    },
    {
        to: "/resources",
        name: "Resources"
    },

]

export const Link = () => {
  return (
    <div>Link</div> 
  )
}

