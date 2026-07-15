/**
 * Channel Strategy
 * Version 1.0
 */

function getChannelStrategy() {

  return {

    youtube: {

      enabled: true,

      lessonVideosPerStudy: 1,

      shortsPerStudy: 5,

      primaryGoal:
        "Subscriber Growth"

    },

    facebook: {

      enabled: true,

      postsPerStudy: 3,

      primaryGoal:
        "Community Engagement"

    },

    instagram: {

      enabled: true,

      reelsPerStudy: 5,

      primaryGoal:
        "Audience Reach"

    },

    x: {

      enabled: true,

      postsPerStudy: 3,

      primaryGoal:
        "Conversation"

    },

    email: {

      enabled: true,

      campaignsPerStudy: 1,

      primaryGoal:
        "Audience Retention"

    }

  };

}


/**
 * Returns publishing targets
 * for a study.
 */
function buildPublishingTargets() {

  const strategy =
    getChannelStrategy();

  return {

    lessonVideos:
      strategy.youtube
        .lessonVideosPerStudy,

    shorts:
      strategy.youtube
        .shortsPerStudy,

    facebookPosts:
      strategy.facebook
        .postsPerStudy,

    instagramPosts:
      strategy.instagram
        .reelsPerStudy,

    xPosts:
      strategy.x
        .postsPerStudy,

    emailCampaigns:
      strategy.email
        .campaignsPerStudy

  };

}