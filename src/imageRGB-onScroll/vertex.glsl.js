const vertex = `
varying vec2 vUv;
uniform vec2 uOffset;
uniform vec2 uDistorition;

vec3 changePos(vec3 position,vec2 offset, vec2 uv) {
  position.y = position.y + (sin(uv.x*3.14) * uDistorition.y);
  return position;
}

void main() {
vUv = uv;
vec3 pos=changePos(position,uOffset,vUv);
gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

export default vertex