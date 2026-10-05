import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get("https://qtify-backend.labs.crio.do/faq");
        // response array ho ya {data: [...]} dono chalega
        setFaqs(Array.isArray(res.data) ? res.data : res.data.data || []);
      } catch (err) {
        console.error("FAQ fetch failed", err);
      }
    };
    fetchFaqs();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ padding: "40px 32px", maxWidth: "900px", margin: "0 auto" }}>
      <Typography
        variant="h5"
        sx={{ color: "#fff", textAlign: "center", mb: 3, fontFamily: "Poppins, sans-serif" }}
      >
        FAQs
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          disableGutters
          sx={{
            background: "#121212",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "10px !important",
            mb: 2,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<span style={{ color: "#34c94b", fontSize: "20px" }}>▾</span>}
          >
            <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: "#fff", color: "#121212", borderRadius: "0 0 10px 10px" }}
          >
            <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FAQ;