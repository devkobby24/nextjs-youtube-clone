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
    <div className="w-[390px] md:w-full flex p-2 md:p-4 items-center justify-center rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="md:w-[850px] w-full flex items-center justify-center gap-3"
      >
        <textarea
          placeholder="Search..."
          value={searchTerm}
          required
          rows={1}
          onChange={handleChange}
          className="w-full p-2 h-10 text-start border-2 border-gray-400 rounded-xl"
        />
        <Button
          type="submit"
          variant="outline"
          className=" rounded-xl border-2 border-gray-500 bg-gray-400"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
