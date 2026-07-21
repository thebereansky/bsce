"""
BSCE Environment Test
Version 1.0
"""

import sys

from PIL import Image


def main():

    print(
        "BSCE Python Environment Ready"
    )

    print(
        f"Python Version: {sys.version}"
    )

    print(
        f"Pillow Version: {Image.__version__}"
    )


if __name__ == "__main__":

    main()
