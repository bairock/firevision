const { checkRole } = require('./auth')

const { permissions } = require('./permissions/permissions')

const {
    processUpload,
    deleteFile
} = require('./upload')

module.exports = {
    checkRole,
    processUpload,
    deleteFile,
    permissions
}