/**
 * Social Media Pack Generator
 * Version 1.0
 */

function buildSocialMediaPack() {

  const reusable =
    buildReusableContent();

  return {

    facebookPosts:
      reusable.quotes,

    instagramCaptions:
      reusable.quotes,

    xPosts:
      reusable.quotes

  };

}