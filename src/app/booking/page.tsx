"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DateReserve from "@/components/DateReserve"; // Import the DatePicker component
import Box from "@mui/material/Box";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    "Name-Lastname": "",
    "Citizen ID": "",
    hospital: "Chula",
    date: null
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setFormData({ ...formData, hospital: event.target.value as string });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    // Submit the form data here
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", mt: 5 }}>
      <h1>Vaccine Booking</h1>
      <form onSubmit={handleSubmit}>
        {/* Name and Lastname */}
        <TextField
          label="Name-Lastname"
          name="Name-Lastname"
          variant="standard"
          value={formData["Name-Lastname"]}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Citizen ID */}
        <TextField
          label="Citizen ID"
          name="Citizen ID"
          variant="standard"
          value={formData["Citizen ID"]}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Hospital Select */}
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel id="hospital-label">Hospital</InputLabel>
          <Select
            labelId="hospital-label"
            id="hospital"
            value={formData.hospital}
            onChange={handleSelectChange}
          >
            <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
            <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
            <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
          </Select>
        </FormControl>

        {/* Date Picker */}
        <DateReserve />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          name="Book Vaccine"
          fullWidth
          sx={{ mt: 2 }}
        >
          Book Vaccine
        </Button>
      </form>
    </Box>
  );
};

export default BookingPage;
