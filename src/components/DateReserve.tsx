"use client";

import React, { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";

const DateReserve: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select date"
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
        // renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
};

export default DateReserve;
