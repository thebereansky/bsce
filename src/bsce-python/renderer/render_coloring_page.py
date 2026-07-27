"""
BSCE Coloring Page Renderer
Version 1.1

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
# Layout Calculation
# --------------------------------------------------

def calculate_layout(
    width,
    height,
    layout_config
):

    title_height = int(
        height *
        layout_config["titleAreaPercent"] / 100
    )

    footer_height = int(
        height *
        layout_config["footerAreaPercent"] / 100
    )

    return {

        "title_y": 40,

        "artwork_box": (
            100,
            title_height,
            width - 100,
            height - footer_height
        ),

        "scripture_y":
            height - footer_height + 40

    }


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
        (x, y)
    )


# --------------------------------------------------
# Title Rendering
# --------------------------------------------------

def draw_title(
    draw,
    width,
    title_text,
    title_config,
    y_position
):

    if title_config["uppercase"]:
        title_text = title_text.upper()

    font = load_font(
        title_config["fontSize"]
    )

    box = draw.textbbox(
        (0, 0),
        title_text,
        font=font
    )

    text_width = box[2] - box[0]

    draw.text(

        (
            (width - text_width) / 2,
            y_position
        ),

        title_text,

        fill="black",

        font=font

    )


# --------------------------------------------------
# Scripture Rendering
# --------------------------------------------------

def draw_scripture(
    draw,
    width,
    height,
    scripture_text,
    scripture_config,
    y_position
):

    font = load_font(
        scripture_config["fontSize"]
    )

    box = draw.textbbox(
        (0, 0),
        scripture_text,
        font=font
    )

    text_width = box[2] - box[0]

    draw.text(

        (
            (width - text_width) / 2,
            y_position
        ),

        scripture_text,

        fill="black",

        font=font

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

    #
    # Cache configuration sections
    #

    rendering = standard["rendering"]
    layout_config = standard["layout"]
    border_config = standard["border"]
    title_config = standard["title"]
    scripture_config = standard["scripture"]

    width = rendering["widthPixels"]
    height = rendering["heightPixels"]

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

    #
    # Layout
    #

    layout = calculate_layout(
        width,
        height,
        layout_config
    )

    #
    # Border
    #

    draw_storybook_border(

        draw,

        width,

        height,

        border_config["marginPixels"],

        border_config["lineCount"]

    )

    #
    # Title
    #

    draw_title(

        draw,

        width,

        manifest.get(
            "title",
            ""
        ),

        title_config,

        layout["title_y"]

    )

    #
    # Artwork
    #

    artwork = Image.open(
        artwork_path
    ).convert(
        "RGB"
    )

    place_artwork(

        page,

        artwork,

        layout["artwork_box"]

    )

    #
    # Scripture
    #

    draw_scripture(

        draw,

        width,

        height,

        manifest.get(
            "scripture",
            ""
        ),

        scripture_config,

        layout["scripture_y"]

    )

    #
    # Save
    #

    page.save(
        output_path
    )

    print(
        f"Saved: {output_path}"
    )


# --------------------------------------------------
# Main
# --------------------------------------------------

def main():

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


if __name__ == "__main__":
    main()
