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

float plotRectangle(float width, float height, vec2 st) {

    float left = floor((1.0-width) + st.x);
    float right = floor((1.0-width)+(1.0-st.x));
    float top = floor((1.0-0.2)+(1.0-st.y));
    float bottom = floor((1.0-0.2)+st.y);
    return left * right * top * bottom;

}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    
    float leftbottom = floor((1.0-0.2)+st.x) * floor((1.0-0.2)+st.y);
    float righttop = floor((1.0-0.2)+(1.0-st.x)) * floor((1.0-0.2)+(1.0-st.y));

    

    color = vec3(plotRectangle(0.3,0.1,st));

	gl_FragColor = vec4(color,1.0);
}

