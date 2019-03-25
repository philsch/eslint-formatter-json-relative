/**
 * JSON ESlint formatter, but replaces all absolute paths in filePath with relative paths based on current
 * working directory.
 *
 * @param {array} results ESlint results object
 * @return {string} Formatter output
 */
module.exports = function (results) {
    const currentDir = process.cwd();
    const resultWithRelativePaths = results.map((result) => {
        result.filePath = result.filePath.replace(currentDir, '.');
        return result;
    });

    return JSON.stringify(resultWithRelativePaths, null, 2);
};