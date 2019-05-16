# Demostrate how to add additional lint checks while dealing with dependencies.


to reproduce, install dependencies.

````
yarn install
````

Run flow

````
yarn flow
````


you should see errors coming from node_modules/baseui even though it's been added to the declarations section.
