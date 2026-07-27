"""
render_test_page.py

BSCE Rendering Test Harness

Purpose:

Downloads a single coloring page from Google Drive,
renders it, and uploads the finished page back to Drive.

This is NOT the production renderer.
It is simply used to validate the end-to-end pipeline.
"""

from pathlib import Path

from GoogleDriveStorage import GoogleDriveStorage
from render_coloring_page import render_coloring_page


###########################################################################
# CONFIGURATION
###########################################################################

#
# TODO:
# Replace this with the Google Drive folder that contains:
#
#   page-manifest-004.json
#   artwork-004.png
#
LESSON_FOLDER_ID = "YOUR_LESSON_FOLDER_ID"

#
# Folder containing the rendering standard.
#
# If the standards file lives in the same folder,
# use LESSON_FOLDER_ID instead.
#
STANDARDS_FOLDER_ID = LESSON_FOLDER_ID

#
# Temporary local workspace
#
TEMP_FOLDER = Path("temp")


###########################################################################
# Helper
###########################################################################

def download_required_file(
    drive,
    filename,
    folder_id
):
    """
    Downloads a file from Google Drive into temp/.
    """

    file = drive.find_file_by_name(
        filename,
        folder_id
    )

    if not file:
        raise FileNotFoundError(
            f"Could not find '{filename}' in Google Drive."
        )

    destination = TEMP_FOLDER / filename

    drive.download_file(
        file["id"],
        destination
    )

    print(f"Downloaded {filename}")

    return destination


###########################################################################
# Main
###########################################################################

def main():

    TEMP_FOLDER.mkdir(
        exist_ok=True
    )

    drive = GoogleDriveStorage()

    #
    # Download inputs
    #

    manifest_path = download_required_file(
        drive,
        "page-manifest-004.json",
        LESSON_FOLDER_ID
    )

    artwork_path = download_required_file(
        drive,
        "artwork-004.png",
        LESSON_FOLDER_ID
    )

    standards_path = download_required_file(
        drive,
        "coloring-book-standards.json",
        STANDARDS_FOLDER_ID
    )

    #
    # Render page
    #

    output_path = TEMP_FOLDER / "page-004.png"

    print()
    print("Rendering page...")
    print()

    render_coloring_page(

        manifest_path=str(manifest_path),

        artwork_path=str(artwork_path),

        standard_path=str(standards_path),

        output_path=str(output_path)

    )

    print()
    print("Rendering complete.")
    print()

    #
    # Upload result
    #

    print("Uploading rendered page...")

    drive.upload_file(
        output_path,
        LESSON_FOLDER_ID
    )

    print()
    print("Finished!")
    print(f"Rendered page uploaded to Google Drive:")
    print(output_path)


###########################################################################

if __name__ == "__main__":
    main()
