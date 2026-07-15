/**
 * Product Factory
 * Version 1.0
 */

function buildAllProducts() {

  return {

    kdpBook:
      buildKDPBook(),

    workbook:
      buildWorkbook(),

    amazonDescription:
      buildAmazonDescription(),

    seo:
      buildSEOContent(),

    landingPage:
      buildLandingPage(),

    social:
      buildSocialMediaCampaign(),

    email:
      buildEmailSequence()

  };

}