in backend folder

```bash
    npm init -y
    npm i express
    touch index.js
```

in fronend let's copy the entire folder (expect node modules) from the previos execrise

mkdir frontend
cp -r `s -A '../../react-dev' | grep -v "node_modules"` ./frontend
