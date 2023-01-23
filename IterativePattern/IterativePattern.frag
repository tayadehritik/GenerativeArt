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

    return x1_coord * y1_coord * x2_coord * y2_coord ;

}

float plotRectangleWithOutline(float outlineSize, float x1, float y1, float x2, float y2, vec2 st) {

    
    float x1_coord = step(x1, st.x);
    float y1_coord = step(y1, st.y);
    float x2_coord = 1.0 - step(x2,st.x);
    float y2_coord = 1.0 - step(y2,st.y);

    float outersquare = x1_coord * y1_coord * x2_coord * y2_coord;

    float s_x1_coord = step(x1+outlineSize, st.x);
    float s_y1_coord = step(y1+outlineSize, st.y);
    float s_x2_coord = 1.0 - step(x2-outlineSize,st.x);
    float s_y2_coord = 1.0 - step(y2-outlineSize,st.y);

    float innersquare = s_x1_coord * s_y1_coord * s_x2_coord * s_y2_coord;

    return  outersquare - innersquare;

}


float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {

	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 mousest = u_mouse/u_resolution;
    vec3 color = vec3(0.0);
    
    float leftbottom = floor((1.0-0.2)+st.x) * floor((1.0-0.2)+st.y);
    float righttop = floor((1.0-0.2)+(1.0-st.x)) * floor((1.0-0.2)+(1.0-st.y));

    

    vec3 color1 = vec3(plotRectangle(0.0,0.0,0.2,0.4,st));
    vec3 color2 = vec3(plotRectangle(0.225,0.0,0.5,0.4,st));

	gl_FragColor = vec4(color2+color1,1.0);
}

