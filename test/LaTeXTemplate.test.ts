import { LaTeXTemplate } from "../LaTeXTemplate"

describe("LaTeXTemplate", () => {
  let template

  const defaultHeader = "\\documentclass{article}\n"
  const defaultSetPackages =
    "\\usepackage{amsfonts, amsmath, amssymb}\n\\usepackage{xparse}\n"

  it("sets packages", () => {
    // Default packages
    template = new LaTeXTemplate("output.tex")

    template.setPackages()
    expect(template.fileText).toEqual(`${defaultHeader}${defaultSetPackages}\n`)

    // Packages from Array(String)
    template = new LaTeXTemplate("output.tex")
    const newPackages = ["booktabs", "cleveref", "microtype"]
    const newPackagesString = ["booktabs", "cleveref", "microtype"]
      .map((aPackage) => `\\usepackage{${aPackage}}\n`)
      .join("")

    template.setPackages(newPackages)
    expect(template.fileText).toEqual(
      `${defaultHeader}${defaultSetPackages}${newPackagesString}\n`
    )
  })

  const defaultTitle = (author: String, date: String, title: String): String =>
    `\\author{ ${author} }\n` + `\\date{ ${date} }\n` + `\\title{ ${title} }\n`

  it("sets title data", () => {
    // Empty strings
    template = new LaTeXTemplate("output.tex")
    template.setPackages()
    template.setTitleData("", "", "")

    expect(template.fileText).toEqual(
      `${defaultHeader}${defaultSetPackages}\n${defaultTitle("", "", "")}`
    )

    // Non empty strings
    template = new LaTeXTemplate("output.tex")
    template.setPackages()
    template.setTitleData("Jan", "Today", "Tests for LaTeX_template")

    expect(template.fileText).toEqual(
      `${defaultHeader}${defaultSetPackages}\n${defaultTitle(
        "Jan",
        "Today",
        "Tests for LaTeX_template"
      )}`
    )
  })

  const defaultBeginDocument = `\n\\begin{document}\n` + `\\maketitle\n`
  it("sets begin document tag", () => {
    // Sets beding document and maketitle tags
    template = new LaTeXTemplate("output.tex")
    template.setPackages()
    template.setTitleData("", "", "")
    template.setBeginDocument()

    expect(template.fileText).toEqual(
      `${defaultHeader}${defaultSetPackages}\n${defaultTitle(
        "",
        "",
        ""
      )}${defaultBeginDocument}`
    )
  })

  const defaultSections = (max: number) => {
    return Array(max).fill(`    \\section*{  }\n\n`).join("")
  }

  it("sets sections", () => {
    // None sections added
    template = new LaTeXTemplate("output.tex")
    template.setPackages()
    template.setTitleData("", "", "")
    template.setBeginDocument()
    template.setSections(0)

    expect(template.fileText).toEqual(
      `${defaultHeader}${defaultSetPackages}\n${defaultTitle(
        "",
        "",
        ""
      )}${defaultBeginDocument}${defaultSections(0)}`
    )
    // Default ammount of sections == 30
    template = new LaTeXTemplate("output.tex")
    template.setPackages()
    template.setTitleData("", "", "")
    template.setBeginDocument()
    template.setSections()

    expect(template.fileText).toEqual(
      `${defaultHeader}${defaultSetPackages}\n${defaultTitle(
        "",
        "",
        ""
      )}${defaultBeginDocument}${defaultSections(30)}`
    )
    // Custom ammount of sections
    template = new LaTeXTemplate("output.tex")
    template.setPackages()
    template.setTitleData("", "", "")
    template.setBeginDocument()
    template.setSections(50)

    expect(template.fileText).toEqual(
      `${defaultHeader}${defaultSetPackages}\n${defaultTitle(
        "",
        "",
        ""
      )}${defaultBeginDocument}${defaultSections(50)}`
    )
  })

  const defaultEndDocument = `\\end{document}`
  it("sets end document", () => {
    // Adding end document tag to the end of file
    template = new LaTeXTemplate("output.tex")
    template.setPackages()
    template.setTitleData("", "", "")
    template.setBeginDocument()
    template.setSections()
    template.setEndDocument()

    expect(template.fileText).toEqual(
      `${defaultHeader}${defaultSetPackages}\n${defaultTitle(
        "",
        "",
        ""
      )}${defaultBeginDocument}${defaultSections(30)}${defaultEndDocument}`
    )
  })

  // Optionally to be made
  // since it requires outside files
  it.todo("writeToFile")
  it.todo("openCreatedDocument")
})
