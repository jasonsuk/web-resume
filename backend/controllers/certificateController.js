import asyncHandler from 'express-async-handler';
import Certificate from '../models/certificateModel.js';

// DESC: Get all certificates
// ROUTE: GET /api/certificates
// ACCESS: Public

export const getCertificates = asyncHandler(async (req, res) => {
  const certificates = await Certificate.find({}).sort({ createdAt: -1 });
  res.status(200).json(certificates);
});

// DESC: Get a certificate
// ROUTE: GET /api/certificates/:id
// ACCESS: Public

export const getCertificate = asyncHandler(async (req, res) => {
  const certificiateId = req.params.id;
  const certificate = await Certificate.findById(certificiateId);

  if (certificate) {
    res.status(200).json(certificate);
  } else {
    res.status(400);
    throw new Error(`Certificate ${certificateID} not found`);
  }
});

// DESC: Add a certificate
// ROUTE: POST /api/certificates/
// ACCESS: Private

export const addCertificate = asyncHandler(async (req, res) => {
  // const userId = req.user._id;

  const newCertificate = await new Certificate({
    // Dummy certificate
    name: 'Certificate name - new',
    summary: 'Certificate description - new',
    organization: 'Issuing organization- new',
    completedAt: Date.now(),
    isKeyCertificate: false,
  });

  const createdCertificate = await newCertificate.save();
  res.status(200).json(createdCertificate);
});

// DESC: Update a certificate
// ROUTE: PUT /api/certificates/:id
// ACCESS: Private

export const updateCertificate = asyncHandler(async (req, res) => {
  const certificateId = req.params.id;
  const certificate = await Certificate.findById(certificateId);

  if (certificate) {
    const { name, summary, organization, completedAt, isKeyCertificate } =
      req.body;

    certificate.name = name || certificate.name;
    certificate.summary = summary || certificate.summary;
    certificate.organization = organization || certificate.organization;
    certificate.completedAt = completedAt || certificate.completedAt;
    certificate.isKeyCertificate =
      isKeyCertificate || certificate.isKeyCertificate;

    const updatedCertificate = await certificate.save();
    res.status(200).json(updatedCertificate);
  }
});

// DESC: Delete a certificate
// ROUTE: DELETE /api/certificates/:id
// ACCESS: Private

export const deleteCertificate = asyncHandler(async (req, res) => {
  const certificateId = req.params.id;
  const certificate = await Certificate.findById(certificateId);

  if (certificate) {
    await certificate.remove();
    res.json({
      message: `Successfully deleted the certificate ${certificateId}`,
    });
  } else {
    res.status(400);
    throw new Error(`Certificate ${certificateId} not found.`);
  }
});
