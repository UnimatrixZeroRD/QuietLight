from pathlib import Path

from pypdf import PdfReader, PdfWriter

PDF_DIR = Path("public/downloads/bible/geneva-1599")
OUTPUT_FILE = "old-testament-complete.pdf"

OLD_TESTAMENT_BOOKS = [
    ("Genesis", "enggnv_GEN.pdf"),
    ("Exodus", "enggnv_EXO.pdf"),
    ("Leviticus", "enggnv_LEV.pdf"),
    ("Numbers", "enggnv_NUM.pdf"),
    ("Deuteronomy", "enggnv_DEU.pdf"),
    ("Joshua", "enggnv_JOS.pdf"),
    ("Judges", "enggnv_JDG.pdf"),
    ("Ruth", "enggnv_RUT.pdf"),
    ("1 Samuel", "enggnv_1SA.pdf"),
    ("2 Samuel", "enggnv_2SA.pdf"),
    ("1 Kings", "enggnv_1KI.pdf"),
    ("2 Kings", "enggnv_2KI.pdf"),
    ("1 Chronicles", "enggnv_1CH.pdf"),
    ("2 Chronicles", "enggnv_2CH.pdf"),
    ("Ezra", "enggnv_EZR.pdf"),
    ("Nehemiah", "enggnv_NEH.pdf"),
    ("Esther", "enggnv_EST.pdf"),
    ("Job", "enggnv_JOB.pdf"),
    ("Psalms", "enggnv_PSA.pdf"),
    ("Proverbs", "enggnv_PRO.pdf"),
    ("Ecclesiastes", "enggnv_ECC.pdf"),
    ("Song of Solomon", "enggnv_SNG.pdf"),
    ("Isaiah", "enggnv_ISA.pdf"),
    ("Jeremiah", "enggnv_JER.pdf"),
    ("Lamentations", "enggnv_LAM.pdf"),
    ("Ezekiel", "enggnv_EZK.pdf"),
    ("Daniel", "enggnv_DAN.pdf"),
    ("Hosea", "enggnv_HOS.pdf"),
    ("Joel", "enggnv_JOL.pdf"),
    ("Amos", "enggnv_AMO.pdf"),
    ("Obadiah", "enggnv_OBA.pdf"),
    ("Jonah", "enggnv_JON.pdf"),
    ("Micah", "enggnv_MIC.pdf"),
    ("Nahum", "enggnv_NAM.pdf"),
    ("Habakkuk", "enggnv_HAB.pdf"),
    ("Zephaniah", "enggnv_ZEP.pdf"),
    ("Haggai", "enggnv_HAG.pdf"),
    ("Zechariah", "enggnv_ZEC.pdf"),
    ("Malachi", "enggnv_MAL.pdf"),
]


def merge_old_testament() -> None:
    writer = PdfWriter()

    for book_name, filename in OLD_TESTAMENT_BOOKS:
        source = PDF_DIR / filename
        if not source.exists():
            raise FileNotFoundError(f"Missing required PDF for {book_name}: {source}")

        reader = PdfReader(str(source))
        start_page = len(writer.pages)
        for page in reader.pages:
            writer.add_page(page)

        # Keep a bookmark for quick navigation inside the combined Old Testament file.
        writer.add_outline_item(book_name, start_page)
        print(f"Added {book_name}: {filename} ({len(reader.pages)} pages)")

    output_path = PDF_DIR / OUTPUT_FILE
    with output_path.open("wb") as output_file:
        writer.write(output_file)

    print(f"Wrote {output_path} with {len(writer.pages)} pages")


def main() -> None:
    merge_old_testament()


if __name__ == "__main__":
    main()
