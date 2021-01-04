# How to update the FL-Icons font

This process is rather laborious and manual at the moment. It works, but it takes much more time than it should. That being said, here are the steps to follow.

1. Prepare the [SuperSuit](https://github.com/FrontlineEducation/Util-UISuperSuit) project for the font update (assumes you have it checked out locally in ~/Projects).

```
cd ~/Projects/Util-UISuperSuit
git co -b PLAT-XXXX-icons-font
```

2. Prepare the [FluidStyles](https://github.com/FrontlineEducation/SuperSuit-Plugin-FluidStyles) project for the font update (assumes you have it checked out locally in ~/Projects).

```
cd ~/Projects/SuperSuit-Plugin-FluidStyles
git co -b PLAT-XXXX-icons-font-styles
```

3. Download FL-Icons.zip provided by UX (assumes your default download folder is ~/Downloads).

4. Extract the icons folder

```
cd ~/Downloads
unzip FL-Icons.zip
```

5. Copy the selections JSON file and the font files into SuperSuit codebase

```
cp ~/Downloads/FL-Icons/selections.json ~/Projects/Util-UISuperSuit/src/font
cp ~/Downloads/FL-Icons/fonts/* ~/Projects/Util-UISuperSuit/src/font
```

6. Generate the new stylesheet for the updated font

```
cd ~/Projects/Util-UISuperSuit
yarn update-icons
```

7. Move the generated stylesheet into FluidStyles

```
cd ~/Projects/SuperSuit-Plugin-FluidStyles
mv ~/Projects/Util-UISuperSuit/src/styles/common-var-icons.styl lib/fl-fluid/icons.styl
```

8. Commit and push the FluidStyles change

```
git add -A
git commit -m "PLAT-XXXX update FL-Icons font styles"
git push -u origin PLAT-XXXX-icons-font
```

9. Open a PR for the new branch in the SuperSuit-Plugin-FluidStyles project

10. After PR acceptance, ensure the FluidStyles plugin successfully deploys to Artifactory

11. Commit and push the SuperSuit change

```
cd ~/Projects/Util-UISuperSuit
git add -A
git commit -m "PLAT-XXXX update FL-Icons font"
git push -u origin PLAT-XXXX-icons-font

```
12. Open a PR for the new branch in the Util-UISuperSuit project

13. After PR acceptance, ensure the SuperSuit successfully deploys to Dev and QA envs
