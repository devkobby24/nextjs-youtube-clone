"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="p-6 w-[600px] mx-auto my-10 rounded-lg shadow-md">
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className="w-full"
          />
          <Button type="submit" className="mt-4">Search</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
