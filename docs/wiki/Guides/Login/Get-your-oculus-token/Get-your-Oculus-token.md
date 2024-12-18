> ## ⚠️ Important ⚠️
>
> Your token is a confidential piece of information. Possession of this token allows individuals to download applications, send messages, among other actions, under your identity.
>
> However, you might wonder why it is necessary to provide this token to [BSManager](https://www.bsmanager.io). The reason is that [BSManager](https://www.bsmanager.io) requires the token to continue the download with Oculus. Once you've input the token, it is used exclusively to communicate with Oculus servers to verify that you are the rightful owner of the game.

## Table of content

- [Step 1 - Install and log into the Oculus Rift app](#step-1---install-and-log-into-the-oculus-rift-app)
- [Step 2 - Open developer tools](#step-2---open-developer-tools)
- [Step 3 - Copy your Token](#step-3---copy-your-token)

## Step 1 - Install and log into the Oculus Rift app

- Get the Oculus Rift app setup from the [Meta website](https://www.oculus.com/rift/setup/)
- Install the Oculus Rift app

> 📍 **If you bought Beat Saber from the Quest store, it won't appear in your Rift library by default. To download it with [BSManager](https://www.bsmanager.io), first claim it from its store page**

## Step 2 - Open developer tools

- Open Oculus app
- Open the developer tools by pressing `Ctrl` + `Shift` + `i`.

## Step 3 - Copy your Token

In the developer tools :

- Open the `Network` tab
- Filter for `graph`
- Click on the first request
- Open the `Payload` tab
- Scroll to the bottom to locate your token, it should start with `FRL`
- Select the token using your mouse and press `Ctrl` + `c` to copy it

<div align="center">
    <img src="../wiki/Guides/Login/Get-your-oculus-token/GetYourOculusToken.png" alt="GetYourOculusToken.png" />
</div>
