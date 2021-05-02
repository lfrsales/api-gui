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

## Contributing Guidelines

Pull requests welcome.

### Releasing

Releases are handled using Github actions.

To release a new version do the following:

1. Create a git tag.

	1. `git tag v0.0.1`

1. Push the tag to Github.

	1. `git push origin v0.0.1`

The Github action will be triggered and will attach all assets to the release.