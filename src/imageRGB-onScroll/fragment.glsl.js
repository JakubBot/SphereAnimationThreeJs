const fragment = `
uniform sampler2D uTexture;
uniform vec2 uOffset;
varying vec2 vUv;

vec3 rgbEffect(sampler2D uTexture,vec2 uv,vec2 offset  ) {
float r = texture(uTexture, offset + uv).r;
vec2 gb = texture(uTexture, uv).gb;
return vec3(r,gb);
}



  void main() {
 vec3 color = rgbEffect(uTexture,vUv,uOffset);
   
    gl_FragColor = vec4(color,1.0);
  }
`;

export default fragment;

// vec3 color = rgbShift(uTexture,uOffset,scrollTarget,vUv);
