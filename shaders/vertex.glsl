uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vNormal;


void main() {
    vUv = uv;
    vNormal = normal;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);
}