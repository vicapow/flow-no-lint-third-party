# Demostrates an apparent issue with files configured as declaration still emitting errors


to reproduce, install dependencies.

````
yarn install
````

Run flow

````
yarn flow
````


you should see errors coming from node_modules/baseui even though it's been added to the declarations section.
