/**
 * Marketing Campaign Generator
 * Version 1.0
 */

function buildMarketingCampaign() {

  return {

    email:
      buildEmailSequence(),

    social:
      buildSocialMediaCampaign(),

    landingPage:
      buildLandingPage()

  };

}