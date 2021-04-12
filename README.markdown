# Liferay API GUI

A GUI for exploring Liferay's API's in Liferay DXP `7.3`.

## Usage

Find the widget in the Control Panel under System > API GUI.

![API GUI](/images/APIGUI.png)

View results of API requests and see examples of how to make the request using JavaScript.

![API GUI Result](/images/APIGUIResult.png)

Explore available schemas.

![API GUI Result](/images/schemaExplorer.png)

## How to Build and Deploy to Liferay

Update `./gradle-local.properties` so that it contains:
```
liferay.workspace.home.dir=/path/to/liferay/home
```

### Build it
` $ blade gw build`

### Deploy to Liferay
` $ blade gw deploy`

## Issues & Questions Welcome