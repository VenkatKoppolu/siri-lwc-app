// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [{ from: 'src/client/resources/', to: 'dist/resources/' },
                { from: 'node_modules/@salesforce-ux/design-system/assets', to: 'src/client/SLDS'}, 
                { from: 'node_modules/@salesforce-ux/design-system/assets', to: 'dist/SLDS'}],

    sourceDir: './src/client',

    devServer: {
        proxy: { '/': 'http://localhost:3002' }
    }, 
    rules: { 
        '@typescript-eslint/no-var-requires': 0, 
        '@typescript-eslint/no-explicit-any': 0 
    }, 
};
