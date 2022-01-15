import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'process';

// Load database and models
import connectDB from '../config/database.js';
import Certificate from '../models/certificateModel.js';
import Portfolio from '../models/portfolioModel.js';
import Skill from '../models/skillModel.js';

// Load sample raw data
import certificates from '../data/certificates.js';
import portfolios from '../data/portfolios.js';
import skills from '../data/skills.js';

// Load environmental variables
dotenv.config();

// Connect database
connectDB();

// Destory the existig data collections
// and import raw data into the database
const importData = async () => {
  try {
    // Destroying the existing collections
    console.log(`Clearing the database.`);
    await Certificate.deleteMany();
    await Portfolio.deleteMany();
    await Skill.deleteMany();

    // Insert static data
    await Certificate.insertMany(certificates);
    await Portfolio.insertMany(portfolios);
    await Skill.insertMany(skills);

    console.log(`Successfully imported data into the database.`);
    process.exit(0);
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

importData(); // on the command line, node backend/utils/dataSeeder or data:import
