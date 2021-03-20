# siri-lwc-app

Here will be some information about the app.

## How to install?
> ### Set the default registry to public registry for installing all publicly available npm modules.
>
> `siri-lwc-app %npm config set registry https://registry.npmjs.org/` 
>
> ### Install lwc oss app in typescript with a client, server and also an electron standalone application.
>
> `siri-lwc-app %npx create-lwc-app bh4sf-app`
>

## How to build?
> ### We might come across few build issues with this project which can be resolved with the below steps.
>
> `siri-lwc-app %npm install -D lightning-base-components`
>
> ### set npm module in `lwc.config.json`
```
{
    "modules": [
        {
            "dir": "src/client/modules"
        }, 
        { 
            "npm": "lightning-base-components" 
        }
    ]
}
```
>
> `siri-lwc-app %npm install -D @salesforce-ux/design-system`
> ### set resources and rules in `lwc-services.config.json`
```
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

```

>lint build errors can be fixed using the below commands
>
> `siri-lwc-app %npm install -D @types/estree`

>build the project
>
>`siri-lwc-app %npm run build`


## How to start?

Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.

The source files are located in the [`src`](./src) folder. All web components are within the [`src/client/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components. The entry file for the custom Express configuration can be found in the ['src/server'](./src/server) folder.

Find more information on the main repo on [GitHub](https://github.com/muenzpraeger/create-lwc-app).
