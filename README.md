# debug-typescript
How to debug typescript code alone without converting into JavaScript


1. Create the folder. Go inside the folder. Go to the terminal or command prompt.
2. Run `npm init --yes` that will create default setting for your typescript app.
3. Run `npm i -D typescript` this will install the typescript in your project without installing globally in your computer.
4. Run `npx tsc --version` to check the typescript.
5. Run `npx tsc --init` to create the **'tsconfig.json'** file with default option.
6. Add the `"lib": ["ES6", "DOM"],` in **'tsconfig.json'**. if you won't add "ES6" then you might get an error "*Cannot find global type 'Array'.*"
7. Run `npm i -D ts-node`.
8. Now add the "*singly-linked-list.ts*" and "*linked-list.ts*" file inside the **'src/'** folder.
9. Run the command `npx ts-node ./src/linked-list.ts` you will see the result in console.
10. Now if we want to debug same code just add the `launch.json` in **.vscode/** folder.

```sh
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Current TS Tests File",
            "type": "node",
            "request": "launch",
            "args": ["-r", "ts-node/register", "${relativeFile}"],
            "cwd": "${workspaceRoot}",
            "runtimeExecutable": "/Users/anuragsharma/.nvm/versions/node/v14.21.3/bin/node",
        },
       
    ]
}
```
