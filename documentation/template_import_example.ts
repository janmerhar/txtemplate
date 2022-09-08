import { LaTeXTemplate } from "txtemplate"

const latex = new LaTeXTemplate("name_of_output_file.tex")

latex
  // Set packages to be present in LaTeX document
  .setPackages(["booktabs", "cleveref", "microtype"])
  // Set authhor's name, date, and title of document
  .setTitleData("Author's name", "Date of creation", "Title of document")
  // Write \begin LaTeX tag
  .setBeginDocument()
  // Write n \section tags
  .setSections("Number of sections: int")
  // Write the template to .tex file
  .writeToFile()
  // Run written .tex file in a passed program
  .openCreatedDocument("code")
