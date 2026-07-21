"""
BSCE Coloring Page Renderer
Version 1.0

Generates a finished coloring-book page from:

- Coloring Book Standard
- Page Manifest
- Artwork Image

Output:
    page-XXX.png
"""

from pathlib import Path
import json

from PIL import (
    Image,
    ImageDraw,
    ImageFont
)


# --------------------------------------------------
# Configuration Loading
# --------------------------------------------------

def load_json(path: Path):

    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


# --------------------------------------------------
# Fonts
# --------------------------------------------------

def load_font(size):

    try:
        return ImageFont.truetype(
            "arial.ttf",
            size
        )

    except Exception:

        return ImageFont.load_default()


# --------------------------------------------------
# Border Rendering
# --------------------------------------------------

def draw_storybook_border(
    draw,
    width,
    height,
    margin,
    line_count
):

    for i in range(line_count):

        offset = margin + (i * 10)

        draw.rectangle(
            [
                offset,
                offset,
                width - offset,
                height - offset
            ],
            outline="black",
            width=3
        )


# --------------------------------------------------
# Artwork Placement
# --------------------------------------------------

def place_artwork(
    page,
    artwork,
    artwork_box
):

    artwork.thumbnail(
        (
            artwork_box[2] - artwork_box[0],
            artwork_box[3] - artwork_box[1]
        )
    )

    x = artwork_box[0] + (
        (
            artwork_box[2] -
            artwork_box[0]
        ) - artwork.width
    ) // 2

    y = artwork_box[1] + (
        (
            artwork_box[3] -
            artwork_box[1]
        ) - artwork.height
    ) // 2

    page.paste(
        artwork,
        (
            x,
            y
        )
    )


# --------------------------------------------------
# Main Renderer
# --------------------------------------------------

def render_coloring_page(

    manifest_path,
    artwork_path,
    standard_path,
    output_path

):

    manifest = load_json(
        Path(manifest_path)
    )

    standard = load_json(
        Path(standard_path)
    )

    width = standard[
        "rendering"
    ][
        "widthPixels"
    ]

    height = standard[
        "rendering"
    ][
        "heightPixels"
    ]

    page = Image.new(

        "RGB",

        (
            width,
            height
        ),

        "white"

    )

    draw = ImageDraw.Draw(
        page
    )

    # ------------------------------------------
    # Border
    # ------------------------------------------

    border = standard[
        "border"
    ]

    draw_storybook_border(

        draw,

        width,

        height,

        border[
            "marginPixels"
        ],

        border[
            "lineCount"
        ]

    )

    # ------------------------------------------
    # Layout Areas
    # ------------------------------------------

    title_height = int(

        height *

        standard[
            "layout"
        ][
            "titleAreaPercent"
        ] / 100

    )

    footer_height = int(

        height *

        standard[
            "layout"
        ][
            "footerAreaPercent"
        ] / 100

    )

    artwork_top = title_height

    artwork_bottom = (
        height -
        footer_height
    )

    # ------------------------------------------
    # Title
    # ------------------------------------------

    title = manifest.get(
        "title",
        ""
    )

    if standard[
        "title"
    ][
        "uppercase"
    ]:

        title = title.upper()

    title_font = load_font(

        standard[
            "title"
        ][
            "fontSize"
        ]

    )

    title_box = draw.textbbox(

        (0, 0),

        title,

        font=title_font

    )

    title_width = (
        title_box[2] -
        title_box[0]
    )

    draw.text(

        (
            (
                width -
                title_width
            ) / 2,
            40
        ),

        title,

        fill="black",

        font=title_font

    )

    # ------------------------------------------
    # Artwork
    # ------------------------------------------

    artwork = Image.open(
        artwork_path
    ).convert(
        "RGB"
    )

    place_artwork(

        page,

        artwork,

        (
            100,
            artwork_top,
            width - 100,
            artwork_bottom
        )

    )

    # ------------------------------------------
    # Scripture
    # ------------------------------------------

    scripture_font = load_font(

        standard[
            "scripture"
        ][
            "fontSize"
        ]

    )

    scripture = manifest.get(
        "scripture",
        ""
    )

    scripture_box = draw.textbbox(

        (0, 0),

        scripture,

        font=scripture_font

    )

    scripture_width = (
        scripture_box[2] -
        scripture_box[0]
    )

    draw.text(

        (
            (
                width -
                scripture_width
            ) / 2,

            height -
            footer_height +
            40
        ),

        scripture,

        fill="black",

        font=scripture_font

    )

    # ------------------------------------------
    # Save
    # ------------------------------------------

    page.save(
        output_path
    )

    print(
        f"Saved: {output_path}"
    )


if __name__ == "__main__":

    render_coloring_page(

        manifest_path=
            "page-manifest-004.json",

        artwork_path=
            "artwork-004.png",

        standard_path=
            "coloring-book-standard.json",

        output_path=
            "page-004.png"

    )
