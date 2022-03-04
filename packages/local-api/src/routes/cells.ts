import express from "express";

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  router.get("/cells", async (req, res) => {
    // make sure the cell storage file exists
    // if it does not exist, add a default list of cells
    // Read the file
    // Parse a list of cells out of it
    // Send list of cells back to browser
  });

  router.post("/cells", async (req, res) => {
    // make sure the file exists
    // if it does not, create it
    // take list of cells from req obj
    // serialize them
    // write the cells into the file
  });

  return router;
};
