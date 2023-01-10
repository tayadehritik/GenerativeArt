#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
vec2 surfaceResolution = u_resolution / 2.0;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st) {    
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 surfaceCoords = surfaceResolution.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    

    vec2 leftbottom = step(surfaceCoords,st);
    float pct = leftbottom.x*leftbottom.y;

    vec2 righttop = step(surfaceCoords,1.0-st);
    pct += righttop.x * righttop.y;

    color = vec3(pct);

	gl_FragColor = vec4(color,1.0);
}