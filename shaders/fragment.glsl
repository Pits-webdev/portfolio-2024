uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;


varying vec2 vUv;
varying vec3 vNormal;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    float pct = abs(sin(uTime));

   vec3 color = vec3(0.0);
   vec3 mouseColor = vec3(vec2(uMouse), pct);

   

  color = mix(colorA, colorB, pct);

   //gl_FragColor = vec4(0.1, 0.7, 1.0, 1.0); 
    //gl_FragColor = vec4(vNormal, 1.0);
    //gl_FragColor = vec4(color, 1.0);
    gl_FragColor = vec4(mouseColor, 1.0);

}