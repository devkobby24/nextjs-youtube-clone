"use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <div className="w-full flex p-4 items-center justify-center border-2 border-gray-300 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="md:w-[850px] w-full flex items-center justify-center gap-5"
      >
        <Textarea
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full h-12 border-2 border-gray-400 rounded-lg"
        />
        <Button
          type="submit"
          variant="outline"
          className="h-14 rounded-lg border-2 border-gray-400"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
