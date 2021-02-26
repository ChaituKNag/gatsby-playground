exports.onCreatePage = async ({ page, actions: { createPage } }) => {
    if (page.match(/^\/app/)) {
        page.matchPath = "/app/*";
        createPage(page);
    }
}