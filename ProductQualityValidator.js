/**
 * Product Quality Validator
 * Version 1.0
 */

function validateProductPackage(
  packageData
) {

  const warnings = [];

  if (
    !packageData.book
  ) {

    warnings.push(
      "Missing KDP Book"
    );

  }

  if (
    !packageData.workbook
  ) {

    warnings.push(
      "Missing Workbook"
    );

  }

  if (
    !packageData.amazonDescription
  ) {

    warnings.push(
      "Missing Amazon Description"
    );

  }

  if (
    !packageData.emailSequence
  ) {

    warnings.push(
      "Missing Email Sequence"
    );

  }

  if (
    !packageData.socialCampaign
  ) {

    warnings.push(
      "Missing Social Campaign"
    );

  }

  return {

    valid:
      warnings.length === 0,

    warnings:
      warnings

  };

}