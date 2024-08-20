import {structureTool} from 'sanity/structure'

export const config = {
  projectId: "vexsitdq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
  title: "Portfolio",
  basePath: "/studio",
  schemas: {
    types: [],
  },
  plugins: [structureTool()],
}
