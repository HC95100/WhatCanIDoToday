"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          WhatCanIDoToday.com
        </h1>
        <p className="mt-3 text-lg sm:text-xl">
          Découvrez quoi faire aujourd'hui (ou un autre jour) !
        </p>
      </div>
    </header>
  );
};

export default Header;