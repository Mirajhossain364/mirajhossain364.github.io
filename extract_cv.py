import sys

try:
    from pypdf import PdfReader
    reader = PdfReader("Miraz_Hossain_CV (1).pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    with open("cv_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Extraction complete via python.")
except Exception as e:
    print(f"Error: {e}")
