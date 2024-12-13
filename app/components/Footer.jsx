import React from 'react'
import { Mail,Twitter,Linkedin } from 'lucide-react';

const Footer = () => {
    return (
      <div className="py-5 w-full flex justify-center space-x-4 items-center px-5 shadow-t-lg">
      <a
        href="mailto:nanakobby2002@gmail.com"
        target="_blank"
        className="hover:text-gray-400 transition"
        aria-label="Send an email"
      >
        <Mail size={30} />
      </a>
      <a
        href="https://twitter.com/kay_dev24"
        target="_blank"
        className="hover:text-gray-400 transition"
        aria-label="Visit my Twitter profile"
      >
        <Twitter size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/justice-duah-7ab6b4239/"
        target="_blank"
        className="hover:text-gray-400 transition"
        aria-label="Visit my LinkedIn profile"
      >
        <Linkedin size={30} />
      </a>
    </div>
    
      );
}

export default Footer