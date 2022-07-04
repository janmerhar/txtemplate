import { LaTeXTemplate } from "../LaTeXTemplate"
import { templateCommander } from "../cli_args/cli_template"

templateCommander.parse(process.argv)
const templateOpts = templateCommander.opts()
const latex = new LaTeXTemplate(templateOpts.fileName)

latex
  .setPackages(templateOpts.packages)
  .setTitleData(templateOpts.author, templateOpts.date, templateOpts.title)
  .setBeginDocument()
  .setSections(templateOpts.sections)
  .writeToFile()
  .openCreatedDocument()
