# How to Setup

:::note 
TPS requires the VRChat Avatars SDK3 (https://vrchat.com/home/download)
:::

In general the Wizard is organized in multiple steps that you should go through in numerical order.

## Wizard Steps

### Step 0: Auto Fixes
This sections only shows up if your unity has configuration issues that will prvent you from being able to correctly place tps objects or see the penetrator deformation.
- `Scene Lighting`: If your lighting is turned of in scene mode you will not see the penetrator move.
- `Pivot Mode`: If your pivot mode is not set to pivot point the placement of the unity tools will not represent where the origin of your penetrator is.

![Step 0](/img/tps/step0.png)

### Step 1: Add TPS objects
The 1st step of any tps setup is adding penetrators and orifices to your avatar. For this you can either 
- Drag prefabs from the wizard onto your avatar
- Enable TPS on the material of your penetrators
- Create an orifice by placing an empty gameobject where you want it. Make sure the blue arrow points outwards from the orifice

:::warning
Always run the wizard after making changes to orifice / penetrator placement, including scaling and re-parenting.
:::

![Step 1](/img/tps/step1.png)

### Step 2: Add Contacts
Select your avatar root & its fx layer animator, then click the `Scan Avatar for TPS` button.
This will find all penetrators & orifices on your avatar.
- Penetrators are identified by having the `[TPS][Penetrator]` prefix or by having TPS enabled on their materials.
- Orifices are identified by having the `[TPS][Orifice]` prefix or by having tps lights already setup 

![Step 2.1](/img/tps/step2.1.png)

This step has a lot of optional automation. 
- By default it will fill the field with an avatar from your scene, prioritizing the avatar with the most tps objects
- It will select the fx layer from your VRChat avatar descriptor
- If no fx layer is found you can create a new one & automatically assign it to your descriptor using the `Create Fx Layer` button
![Step 2](/img/tps/step2.png)

### Step 2.3

![Step 2.1](/img/tps/step2.3.png)

### Step 2.4

![Step 2.2](/img/tps/step2.4.png)

### Step 3: Setup TPS

![Step 3](/img/tps/step3.png)

### Remove

![Remove](/img/tps/remove.png)

## Configuring Custom Orifices

## Configuring Custom Penetrators

