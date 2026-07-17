function testBSCEPromptBuilder(){


  const prompt =
    buildMasterStudyPrompt();


  savePromptToDrive(
    prompt,
    "Study001_MasterStudy_Prompt.md"
  );


  Logger.log(
    "Prompt created successfully"
  );

}

function testRootFolder() {

  const root =
    DriveApp.getFolderById(
      BSCE_CONFIG.ROOT_FOLDER_ID
    );

  Logger.log(
    root.getName()
  );

}

function testStudyFolderLookup() {

  const folder =
    getStudyFolder(
      BSCE_CONFIG.DEFAULT_SERIES,
      BSCE_CONFIG.DEFAULT_TRACK,
      BSCE_CONFIG.DEFAULT_STUDY
    );

  Logger.log(
    folder.getName()
  );

}
function testMasterStudyFolderLookup() {

  const folder =
    getStudySubfolder(
      BSCE_CONFIG.DEFAULT_SERIES,
      BSCE_CONFIG.DEFAULT_TRACK,
      BSCE_CONFIG.DEFAULT_STUDY,
      "02 - Master Study"
    );

  Logger.log(
    folder.getName()
  );

}

function testYouTubeFolderLookup() {

  const folder =
    getStudySubfolder(
      BSCE_CONFIG.DEFAULT_SERIES,
      BSCE_CONFIG.DEFAULT_TRACK,
      BSCE_CONFIG.DEFAULT_STUDY,
      "03 - YouTube"
    );

  Logger.log(
    folder.getName()
  );

}

function testSaveFileToStudySubfolder() {

  const content =
    JSON.stringify(
      {
        test: true,
        timestamp:
          new Date()
      },
      null,
      2
    );

  saveFileToStudySubfolder(
    BSCE_CONFIG.DEFAULT_SERIES,
    BSCE_CONFIG.DEFAULT_TRACK,
    BSCE_CONFIG.DEFAULT_STUDY,
    content,
    "test-file-v2.json",
    "03 - YouTube"
  );

  Logger.log(
    "File saved successfully"
  );

}

function testMasterStudyLoader() {

  const masterStudy =
    getMasterStudy();

  Logger.log(
    JSON.stringify(
      masterStudy,
      null,
      2
    )
  );

}

function testFamilyGuidePromptBuilder() {

  const study =
    getCurrentStudy();

  const prompt =
    buildFamilyGuidePrompt();

  savePromptToDrive(
    prompt,
    buildFamilyGuidePromptFilename(
      study
    )
  );

  Logger.log(
    "Family Guide Prompt created successfully"
  );

}

function testSaveFamilyGuide() {

  const familyGuide = {

    title:
      "Test Family Guide",

    generated:
      new Date()

  };

  saveFamilyGuide(
    familyGuide
  );

  Logger.log(
    "Family Guide saved successfully"
  );

}

function testNamingUtils() {

  const study =
    getStudyFromGitHub();

  Logger.log(
    buildSeriesFolderName(
      study
    )
  );

  Logger.log(
    buildTrackFolderName(
      study
    )
  );

  Logger.log(
    buildStudyFolderName(
      study
    )
  );

}

function testCurrentStudyContext() {

  Logger.log(
    getCurrentSeriesFolderName()
  );

  Logger.log(
    getCurrentTrackFolderName()
  );

  Logger.log(
    getCurrentStudyFolderName()
  );

}

function testPipelineMasterStudy() {

  generateAssetPrompt(
    "master-study"
  );

}


function testPipelineFamilyGuide() {

  generateAssetPrompt(
    "family-guide"
  );

}

function testAssetRegistry() {

  const asset =
    getAssetDefinition(
      "family-guide"
    );

  Logger.log(
    JSON.stringify(
      asset,
      null,
      2
    )
  );

}

function testAssetFilename() {

  const study =
    getCurrentStudy();

  const asset =
    getAssetDefinition(
      "family-guide"
    );

  Logger.log(
    resolveAssetFilename(
      asset.promptFilename,
      study
    )
  );

}

function testAssetBuilderRegistry() {

  const builder =
    getAssetBuilder(
      "family-guide"
    );

  Logger.log(
    builder.name
  );

}

function testGospelVerse() {

  const study =
    getCurrentStudy();

  const theme =
    getGospelThemeForStudy(
      study
    );

  const verse =
    getGospelVerseForTheme(
      theme
    );

  Logger.log(
    JSON.stringify(
      verse,
      null,
      2
    )
  );

}

function testGospelConnection() {

  const study =
    getCurrentStudy();

  const theme =
    getGospelThemeForStudy(
      study
    );

  const connection =
    getGospelConnectionForTheme(
      theme
    );

  Logger.log(
    JSON.stringify(
      connection,
      null,
      2
    )
  );

}

function testOpenAI() {

  const result =
    generateContent(
      'Return ONLY valid JSON: {"message":"hello"}'
    );

  Logger.log(
    result
  );

}

function testJsonParser() {

  const json =
    parseJsonContent(
      '{"message":"hello"}'
    );

  Logger.log(
    json.message
  );

}

function testGenerateShorts() {

  const result =
    generateAsset(
      "shorts"
    );

  Logger.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

}

function testGenerateLessonSeries() {

  const result =
    generateAsset(
      "lesson-series"
    );

  Logger.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

}

function testGenerateFamilyGuide() {

  const result =
    generateAsset(
      "family-guide"
    );

  Logger.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

}

function testPromptDataBuilder() {

  const data =
    buildPromptData(
      "shorts"
    );

  Logger.log(
    JSON.stringify(
      data,
      null,
      2
    )
  );

}

function testFolderNameBuilders() {

  const study =
    getCurrentStudy();

  Logger.log(
    buildSeriesFolderName(
      study
    )
  );

  Logger.log(
    buildTrackFolderName(
      study
    )
  );

  Logger.log(
    buildStudyFolderName(
      study
    )
  );

}

function testGenerateLessonScript() {

  generateAsset(
    "lesson-script"
  );

}

function testGenerateLessonSeries() {

  generateAsset(
    "lesson-series"
  );

}

function testGenerateVideoSeries() {

  generateAsset(
    "video-series"
  );

}

function testContentValidator() {

  const content = {

    title:
      "Test",

    text:
      "The endless universe reveals many wonders."

  };

  const result =
    validateGeneratedContent(
      content
    );

  Logger.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

}

function testContentValidator() {

  const sample = {

    text:
      "The endless universe contains planets orbiting the sun."

  };

  const result =
    validateGeneratedContent(
      sample
    );

  Logger.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

}

function testYouTubeAssetPack() {

  const shorts =
    generateAsset(
      "shorts"
    );

  const firstShort =
    shorts.shorts[0];

  const assetPack =
    buildYouTubeAssetPack(
      firstShort
    );

  Logger.log(
    JSON.stringify(
      assetPack,
      null,
      2
    )
  );

}

function testThumbnailPrompt() {

  const shorts =
    generateAsset(
      "shorts"
    );

  const firstShort =
    shorts.shorts[0];

  const prompt =
    buildEnhancedThumbnailPrompt(
      firstShort
    );

  Logger.log(
    prompt
  );

}

function testImageAssetGenerator() {

  const study =
    getCurrentStudy();

  const masterStudy =
    getMasterStudy();

  const assets =
    buildImageAssets(
      study,
      masterStudy
    );

  Logger.log(
    JSON.stringify(
      assets,
      null,
      2
    )
  );

}

function testVideoAssetGenerator() {

  const lessonScript =
    generateAsset(
      "lesson-script"
    );

  const assets =
    buildVideoAssets(
      lessonScript
    );

  Logger.log(
    JSON.stringify(
      assets,
      null,
      2
    )
  );

}

function testVideoStoryboardGenerator() {

  const lessonScript =
    generateAsset(
      "lesson-script"
    );

  const storyboard =
    buildVideoStoryboard(
      lessonScript
    );

  Logger.log(
    JSON.stringify(
      storyboard,
      null,
      2
    )
  );

}

function testPublishingAssetGenerator() {

  const shorts =
    generateAsset(
      "shorts"
    );

  const firstShort =
    shorts.shorts[0];

  const assets =
    buildPublishingAssets(
      firstShort
    );

  Logger.log(
    JSON.stringify(
      assets,
      null,
      2
    )
  );

}

function testPublishingAssetsAI() {

  const shorts =
    generateAsset(
      "shorts"
    );

  const firstShort =
    shorts.shorts[0];

  const assets =
    generatePublishingAssets(
      firstShort
    );

  Logger.log(
    JSON.stringify(
      assets,
      null,
      2
    )
  );

}

function testPublishingAssetsForAllShorts() {

  const shorts =
    generateAsset(
      "shorts"
    );

  const assets =
    generatePublishingAssetsForShorts(
      shorts
    );

  Logger.log(
    JSON.stringify(
      assets,
      null,
      2
    )
  );

}

function testVideoProject() {

  const lessonScript =
    generateAsset(
      "lesson-script"
    );

  const storyboard =
    buildVideoStoryboard(
      lessonScript
    );

  const videoAssets =
    buildVideoAssets(
      lessonScript
    );

  const shorts =
    generateAsset(
      "shorts"
    );

  const publishingAssets =
    generatePublishingAssets(
      shorts.shorts[0]
    );

  const project =
    buildVideoProject(
      lessonScript,
      storyboard,
      videoAssets,
      publishingAssets
    );

  Logger.log(
    JSON.stringify(
      project,
      null,
      2
    )
  );

}

function testGenerateStudyAssets() {

  const results =
    generateStudyAssets();

  Logger.log(
    JSON.stringify(
      results,
      null,
      2
    )
  );

}

function testProductionManifest() {

  const results =
    generateStudyAssets();

  const manifest =
    buildProductionManifest(
      results
    );

  Logger.log(
    JSON.stringify(
      manifest,
      null,
      2
    )
  );

}

function testInitializeQueue() {

  initializeProductionQueue();

}

function testQueueCurrentStudy() {

  queueCurrentStudy();

}

function testViewQueue() {

  Logger.log(
    JSON.stringify(
      getProductionQueue(),
      null,
      2
    )
  );

}

function testProductionEngine() {

  ensureCurrentStudyQueued();

  processCurrentStudy();

}

function testPublisherManifest() {

  const results =
    generateStudyAssets();

  const manifest =
    buildPublisherManifest(
      getCurrentStudy(),
      results
    );

  savePublisherManifest(
    manifest
  );

  Logger.log(
    JSON.stringify(
      manifest,
      null,
      2
    )
  );

}

function testChannelStrategy() {

  Logger.log(
    JSON.stringify(
      buildPublishingTargets(),
      null,
      2
    )
  );

}

function testPublishingEngine() {

  publishStudy(
    getCurrentStudy()
      .study
      .id
  );

}

function testMetrics() {

  const studyId =
    getCurrentStudy()
      .study
      .id;

  const metrics =
    loadMetricsRecord(
      studyId
    );

  saveMetricsRecord(
    metrics
  );

  Logger.log(
    JSON.stringify(
      metrics,
      null,
      2
    )
  );

}

function testPublishingWorkflow() {

  const study =
    getCurrentStudy();

  promoteStudyToPublishing(
    study.study.id
  );

  publishReadyStudies();

}

function testBusinessDashboard() {

  const dashboard =
    buildBusinessDashboard();

  Logger.log(
    JSON.stringify(
      dashboard,
      null,
      2
    )
  );

}

function testLifecycleManager() {

  const study =
    getCurrentStudy();

  markReadyForPublishing(
    study.study.id
  );

}

function testBatchStudyProcessor() {

  processQueuedStudies();

}

function testSeriesProcessor() {

  processCurrentSeries();

}

function testStudyIndexBuilder() {

  const index =
    generateStudyIndex();

  Logger.log(
    JSON.stringify(
      index,
      null,
      2
    )
  );

}

function testStudyLoader() {

  const studies =
    getIndexedStudies();

  Logger.log(
    JSON.stringify(
      studies,
      null,
      2
    )
  );

}

function testBatchSeriesProcessor() {

  processSeriesFromIndex();

}

function testNightlyProduction() {

  runNightlyProduction();

}

function testDependencyBuildEngine() {

  buildStudyAssets();

}

function testBuildManifest() {

  markAssetBuilt(
    "master-study"
  );

  Logger.log(
    JSON.stringify(
      loadBuildManifest(),
      null,
      2
    )
  );

}

function testFingerprintManager() {

  const study =
    getActiveStudy();

  const fp =
    fingerprintStudy(
      study
    );

  Logger.log(
    fp
  );

}

function testContentChangeDetector() {

  Logger.log(
    "Changed: " +
    hasStudyChanged()
  );

}

function testCompleteProductPackage() {

  const pkg =
    generateCompleteProductPackage();

  Logger.log(
    JSON.stringify(
      pkg,
      null,
      2
    )
  );

}

function testRootFolderId() {

  Logger.log(
    BSCE_CONFIG.ROOT_FOLDER_ID
  );

}

function testContentQualityEngine() {

  const content =
    loadGeneratedAsset(
      "family-guide"
    );

  Logger.log(

    JSON.stringify(
      validateContentQuality(
        content
      ),
      null,
      2
    )

  );

}

function testPublishingReadiness() {

  Logger.log(

    JSON.stringify(
      savePublishingReadinessReport(),
      null,
      2
    )

  );

}

function testRevenuePackage() {

  Logger.log(

    JSON.stringify(
      saveRevenuePackage(),
      null,
      2
    )

  );

}

function testGovernanceContext() {

  const governance =
    buildGovernanceContext();

  Logger.log(

    JSON.stringify(
      governance,
      null,
      2
    )

  );

}


function testBrandIdentity() {

  Logger.log(

    JSON.stringify(
      getBrandIdentity(),
      null,
      2
    )

  );

}

/**
 * QA Test
 */
function testQAEngine() {

  const result =

    evaluateAssetQuality(

      "masterStudy",

      {

        title:
          "Test Study",

        content:
          "The Big Bang proved the universe began billions of years ago."

      }

    );

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}

function testPromptDataBuilder() {

  const data =
    buildPromptData(
      "master-study"
    );

  Logger.log(

    JSON.stringify(
      data,
      null,
      2
    )

  );

}

function testGovernanceValidator() {

  const result =

    validateGovernance(

      "masterStudy",

      {

        title: "Test Study"

      }

    );

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}


function testQAStandards() {

  const standards =

    loadJsonFromGitHub(

      buildGitHubUrl(

        "config/governance/qa-standards.json"

      )

    );

  Logger.log(

    JSON.stringify(

      standards,

      null,

      2

    )

  );

}

function testPublishingReadiness() {

  const result =

    validatePublishingReadiness(

      "masterStudy",

      {

        title:
          "Test Study"

      }

    );

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}

function testProhibitedTermsValidation() {

  const asset = {

    title:
      "Test",

    content:
      "The Big Bang proved the universe began billions of years ago."

  };

  const result =

    validateGovernance(

      "masterStudy",

      asset

    );

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}

function testRequiredSectionsValidation() {

  const result =

    validateGovernance(

      "masterStudy",

      {

        assetType:
          "masterStudy",

        title:
          "Incomplete Study"

      }

    );

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}

/**
 * Test Family Guide Generation
 */
function testFamilyGuideGenerator() {

  const result =
    buildFamilyGuide();

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}


/**
 * Test Lesson Series Generation
 */
function testLessonSeriesGenerator() {

  const result =
    buildLessonSeries();

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}


/**
 * Test Product Factory
 */
function testProductFactory() {

  const products =
    buildAllProducts();

  Logger.log(

    JSON.stringify(

      Object.keys(
        products
      ),

      null,

      2

    )

  );

}

/**
 * Test Document Export Engine
 */
function testDocumentExportEngine() {

  Logger.log(
    "========================================"
  );

  Logger.log(
    "TEST DOCUMENT EXPORT ENGINE"
  );

  Logger.log(
    "========================================"
  );

  const exports =
    exportAllDocuments();

  Logger.log(
    "Exported Documents:"
  );

  Object.keys(
    exports
  ).forEach(function(key) {

    const file =
      exports[key];

    Logger.log(
      key +
      ": " +
      file.getName()
    );

    Logger.log(
      file.getUrl()
    );

  });

  Logger.log(
    "========================================"
  );

  Logger.log(
    "Document Export Test Complete"
  );

  Logger.log(
    "========================================"
  );

}

/**
 * Test Function
 */
function testWorkbook() {

  const workbook =
    buildWorkbook();

  Logger.log(

    JSON.stringify(

      workbook,

      null,

      2

    )

  );

}

/**
 * Test Function
 */
function testKDPBook() {

  const book =
    buildKDPBook();

  Logger.log(

    JSON.stringify(

      book,

      null,

      2

    )

  );

  Logger.log(

    "Estimated Pages: " +

    estimateKDPPageCount(
      book
    )

  );

}

function testKDPPrototype() {

  const result =
    exportKDPPrototype();

  Logger.log(
    result.url
  );

}

function testVideoSeriesPrototype() {

  Logger.log(

    JSON.stringify(

      buildVideoSeriesPrototype(),

      null,

      2

    )

  );

}

function testShortsPrototype() {

  Logger.log(

    JSON.stringify(

      buildShortsPrototype(),

      null,

      2

    )

  );

}

function testShortsProductionEngine() {

  const shorts =
    generateShortsPackage();

  Logger.log(

    JSON.stringify(

      shorts,

      null,

      2

    )

  );

}

function testShortsVideoFactory() {

  const result =
    generateShortsVideoPackage();

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}

function testShortVoiceover() {

  const shorts =
    buildShorts();

  const result =
    generateShortVoiceover(
      shorts[0]
    );

  Logger.log(
    result.narration
  );

}

function testShortAssets() {

  const shorts =
    buildShorts();

  generateShortAssets(
    shorts[0]
  );

}

function testVisualGovernance() {

  const scene = {

    sceneNumber: 1,

    videoPrompt:
      "A biblical landscape at sunrise"

  };

  const prompt =
    buildGovernedImagePrompt(
      scene
    );

  Logger.log(
    prompt
  );

  const validation =
    validateVisualPrompt(
      prompt
    );

  Logger.log(

    JSON.stringify(

      validation,

      null,

      2

    )

  );

}

function testVoiceProfiles() {

  const text =
    "The heavens declare the glory of God.";

  const voices = [

    "alloy",
    "echo",
    "fable",
    "nova",
    "shimmer",
    "onyx"

  ];

  voices.forEach(
    function(voice) {

      const blob =
        generateSpeech(

          text,

          voice + ".mp3",

          voice

        );

      DriveApp
        .getRootFolder()
        .createFile(
          blob
        );

    }
  );

}
