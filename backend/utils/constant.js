const DATABASE_KEYS = Object.freeze({
    SERVICES: "services"
})

const OPERATION_MESSAGES = Object.freeze({
    ADDED: "Data Successfully Added",
    UPDATE: "Data Successfully Updated",
    DELETE: "Data Successfully Deleted",
})

const CONTENT_TYPES = Object.freeze({
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.txt': 'text/plain'
});

module.exports = {
    DATABASE_KEYS,
    OPERATION_MESSAGES,
    CONTENT_TYPES
}