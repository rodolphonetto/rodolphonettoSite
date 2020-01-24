const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  const createSlug = name => {
    if (name) {
      const slug = name.replace(" ", "-").toLowerCase()
      return slug
    }
    return ""
  }

  // Creates new query'able field with name of 'slug'
  createNodeField({
    node,
    name: "slug",
    value: `/${createSlug(node.name)}`,
  })
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      query Projetos {
        allStrapiProjeto {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each node.
  const ProjectPage = path.resolve(`./src/pages/project.js`)
  result.data.allStrapiProjeto.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: ProjectPage,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
