from pathlib import Path

from pypdf import PdfReader, PdfWriter

PDF_DIR = Path("public/downloads/bible/geneva-1599")
OUTPUT_FILE = "new-testament-complete.pdf"

# Canonical Protestant New Testament order: Matthew through Revelation.
# This creates one ordered New Testament download file for the Bible page.
NEW_TESTAMENT_BOOKS = [
    ("Matthew", "enggnv_MAT.pdf"),
    ("Mark", "enggnv_MRK.pdf"),
    ("Luke", "enggnv_LUK.pdf"),
    ("John", "enggnv_JHN.pdf"),
    ("Acts", "enggnv_ACT.pdf"),
    ("Romans", "enggnv_ROM.pdf"),
    ("1 Corinthians", "enggnv_1CO.pdf"),
    ("2 Corinthians", "enggnv_2CO.pdf"),
    ("Galatians", "enggnv_GAL.pdf"),
    ("Ephesians", "enggnv_EPH.pdf"),
    ("Philippians", "enggnv_PHP.pdf"),
    ("Colossians", "enggnv_COL.pdf"),
    ("1 Thessalonians", "enggnv_1TH.pdf"),
    ("2 Thessalonians", "enggnv_2TH.pdf"),
    ("1 Timothy", "enggnv_1TI.pdf"),
    ("2 Timothy", "enggnv_2TI.pdf"),
    ("Titus", "enggnv_TIT.pdf"),
    ("Philemon", "enggnv_PHM.pdf"),
    ("Hebrews", "enggnv_HEB.pdf"),
    ("James", "enggnv_JAS.pdf"),
    ("1 Peter", "enggnv_1PE.pdf"),
    ("2 Peter", "enggnv_2PE.pdf"),
    ("1 John", "enggnv_1JN.pdf"),
    ("2 John", "enggnv_2JN.pdf"),
    ("3 John", "enggnv_3JN.pdf"),
    ("Jude", "enggnv_JUD.pdf"),
    ("Revelation", "enggnv_REV.pdf"),
]


def merge_new_testament() -> None:
    writer = PdfWriter()

    for book_name, filename in NEW_TESTAMENT_BOOKS:
        source = PDF_DIR / filename
        if not source.exists():
            raise FileNotFoundError(f"Missing required PDF for {book_name}: {source}")

        reader = PdfReader(str(source))
        start_page = len(writer.pages)
        for page in reader.pages:
            writer.add_page(page)

        # Keep a bookmark for quick navigation inside the combined New Testament file.
        writer.add_outline_item(book_name, start_page)
        print(f"Added {book_name}: {filename} ({len(reader.pages)} pages)")

    output_path = PDF_DIR / OUTPUT_FILE
    with output_path.open("wb") as output_file:
        writer.write(output_file)

    print(f"Wrote {output_path} with {len(writer.pages)} pages")


def main() -> None:
    merge_new_testament()


if __name__ == "__main__":
    main()
