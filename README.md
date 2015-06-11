# crop-loader
Webpack loader for separating a spritesheet into multiple different assets

```javascript
const sprites = {
  background: require('file!crop!../assets/sprite.png?x=0&y=0&w=144&h=256'),
  ground: require('file!crop!../assets/sprite.png?x=146&y=0&w=154&h=56'),
  score: require('file!crop!../assets/sprite.png?x=146&y=58&w=113&h=58'),
  bird: require('file!crop!../assets/sprite.png?x=223&y=124&w=17&h=12'),
  pipe: require('file!crop!../assets/sprite.png?x=330&y=0&w=26&h=121'),
}
```
