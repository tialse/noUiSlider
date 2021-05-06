module.exports = {
    files: 'dist/nouislider.js',
    from: [
        '%%REPLACE_THIS_WITH_VERSION%%',
        /VERSION/g
    ],
    to: [
        process.env.npm_package_version,
        '_VERSION'
    ]
}
