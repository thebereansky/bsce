"""
GoogleDriveStorage
Version 1.0

BSCE Storage Layer

Provides:

- Authentication
- Folder lookup
- File lookup
- Download
- Upload
- List files
"""

from pathlib import Path
import io

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

from google.auth.transport.requests import Request

from googleapiclient.discovery import build
from googleapiclient.http import (
    MediaFileUpload,
    MediaIoBaseDownload
)

import pickle


SCOPES = [
    "https://www.googleapis.com/auth/drive"
]


class GoogleDriveStorage:

    def __init__(self):

        self.service = self._authenticate()

    # --------------------------------------------------
    # Authentication
    # --------------------------------------------------

    def _authenticate(self):

        creds = None

        token_file = Path(
            "token.pickle"
        )

        if token_file.exists():

            with open(
                token_file,
                "rb"
            ) as token:

                creds = pickle.load(
                    token
                )

        if not creds or not creds.valid:

            if (
                creds
                and creds.expired
                and creds.refresh_token
            ):

                creds.refresh(
                    Request()
                )

            else:

                flow = (
                    InstalledAppFlow
                    .from_client_secrets_file(
                        "credentials.json",
                        SCOPES
                    )
                )

                creds = (
                    flow.run_local_server(
                        port=0
                    )
                )

            with open(
                token_file,
                "wb"
            ) as token:

                pickle.dump(
                    creds,
                    token
                )

        return build(
            "drive",
            "v3",
            credentials=creds
        )

    # --------------------------------------------------
    # Find Folder
    # --------------------------------------------------

    def find_folder_by_name(
        self,
        folder_name
    ):

        query = (

            f"name='{folder_name}' "
            "and mimeType='application/vnd.google-apps.folder' "
            "and trashed=false"

        )

        response = (
            self.service.files()
            .list(
                q=query,
                fields="files(id,name)"
            )
            .execute()
        )

        files = response.get(
            "files",
            []
        )

        if not files:

            return None

        return files[0]["id"]

    # --------------------------------------------------
    # Find File
    # --------------------------------------------------

    def find_file_by_name(
        self,
        filename,
        parent_id=None
    ):

        query = (
            f"name='{filename}' "
            "and trashed=false"
        )

        if parent_id:

            query += (
                f" and '{parent_id}' "
                "in parents"
            )

        response = (
            self.service.files()
            .list(
                q=query,
                fields="files(id,name)"
            )
            .execute()
        )

        files = response.get(
            "files",
            []
        )

        if not files:

            return None

        return files[0]

    # --------------------------------------------------
    # Download File
    # --------------------------------------------------

    def download_file(
        self,
        file_id,
        destination_path
    ):

        request = (
            self.service.files()
            .get_media(
                fileId=file_id
            )
        )

        destination_path = Path(
            destination_path
        )

        with open(
            destination_path,
            "wb"
        ) as f:

            downloader = (
                MediaIoBaseDownload(
                    f,
                    request
                )
            )

            done = False

            while not done:

                status, done = (
                    downloader.next_chunk()
                )

        return destination_path

    # --------------------------------------------------
    # Upload File
    # --------------------------------------------------

    def upload_file(
        self,
        local_file,
        parent_folder_id
    ):

        metadata = {

            "name":
                Path(
                    local_file
                ).name,

            "parents":
                [
                    parent_folder_id
                ]
        }

        media = MediaFileUpload(
            local_file,
            resumable=True
        )

        file = (

            self.service.files()
            .create(
                body=metadata,
                media_body=media,
                fields="id"
            )
            .execute()

        )

        return file["id"]

    # --------------------------------------------------
    # List Files
    # --------------------------------------------------

    def list_files(
        self,
        folder_id
    ):

        query = (
            f"'{folder_id}' "
            "in parents "
            "and trashed=false"
        )

        response = (

            self.service.files()
            .list(
                q=query,
                fields="files(id,name)"
            )
            .execute()

        )

        return response.get(
            "files",
            []
        )
