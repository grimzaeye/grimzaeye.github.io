import glob

for f in glob.glob("_projects/*.md") + glob.glob("_pages/*.md") + glob.glob("_drafts/*.md"):
    with open(f, "r") as file:
        content = file.read()
    if 'class="half"' in content:
        content = content.replace('class="half"', 'layout="half"')
        with open(f, "w") as file:
            file.write(content)
