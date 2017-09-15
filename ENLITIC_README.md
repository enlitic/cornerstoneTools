In order to deploy a new version of cornerstoneTools into superPacs, the following steps are required:

1. commit or merge your change to master.
2. run 'git tag' to see the most current tags for this repository (on master)
3. run 'git tag X.X' to add a new tag (increment the version number).
4. run 'git push --tags' to push the new tag to origin
5. edit this line in superpacs to reflect your new tag:

    "cornerstoneTools": "git://github.com/enlitic/cornerstoneTools#0.X.X"

6. commit and push that change.