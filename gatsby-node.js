exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Creates new query'able field with name of 'slug'
  createNodeField({
    node,
    name: "slug",
    value: `/${node.name + "teste"}`,
  })
}
