const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const pdfSample = require("./pdf-sample");
const puppeteer = require("puppeteer");

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/create-pdf", (req, res) => {
//   pdf.create(pdfSample(req.body), {}).toFile("Resume.pdf", (err) => {
//     if (err) {
//       res.send(Promise.reject());
//       console.log(err);
//     }
//     res.send(Promise.resolve());
//     console.log("Success");
//   });
// });


app.post("/create-pdf", async (req, res) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
  
      // Generate the HTML content using the provided data
      const htmlContent = pdfSample(req.body);
  
      // Set the HTML content for the page
      await page.setContent(htmlContent);
  
      // Create the PDF
      const pdfBuffer = await page.pdf();
  
      // Close the browser
      await browser.close();
  
      // Save PDF to file
      const fs = require("fs");
      fs.writeFileSync("Resume.pdf", pdfBuffer);
  
      // Send success response
      res.send({ message: "PDF created successfully", path: "Resume.pdf" });
    } catch (err) {
      console.error("Error generating PDF:", err);
      res.status(500).send("Error generating PDF");
    }
  });

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/Resume.pdf`);
});

app.use(express.static("../client/build"));

app.listen(port, () => {
  console.log(`Server is running on port=${port}`);
});
