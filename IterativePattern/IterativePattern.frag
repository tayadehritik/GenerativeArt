#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
vec2 surfaceResolution = u_resolution / 4.0;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st) {    
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}


float plotRectangle(float x1, float y1, float x2, float y2, vec2 st) {

    
    float x1_coord = step(x1, st.x);
    float y1_coord = step(y1, st.y);

    float x2_coord = 1.0 - step(x2,st.x);
    float y2_coord = 1.0 - step(y2,st.y);

    return x1_coord * y1_coord * x2_coord * y2_coord;

}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    
    float leftbottom = floor((1.0-0.2)+st.x) * floor((1.0-0.2)+st.y);
    float righttop = floor((1.0-0.2)+(1.0-st.x)) * floor((1.0-0.2)+(1.0-st.y));

    

    color = vec3(plotRectangle(0.05,0.05,0.5,0.5,st));
    vec3 color2 = vec3(plotRectangle(0.5,0.5,0.9,0.9,st));

	gl_FragColor = vec4(color + color2,1.0);
}

