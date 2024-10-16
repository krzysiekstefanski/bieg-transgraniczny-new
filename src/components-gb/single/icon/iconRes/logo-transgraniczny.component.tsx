import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const LogoTransgraniczny: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.Primary }: IconResProps = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height='100%'
			viewBox='0 0 1050.000000 400.000000'
		>
			<g
				transform='translate(0.000000,400.000000) scale(0.100000,-0.100000)'
				fill={color}
				stroke='none'
			>
				<path d='M735 3985 c-135 -29 -239 -88 -324 -181 -63 -69 -103 -139 -133 -234 l-23 -75 0 -1500 0 -1500 27 -80 c65 -191 205 -326 398 -387 l75 -23 4500 0 4500 0 85 31 c194 69 321 201 382 394 l23 75 0 1495 0 1495 -23 75 c-61 193 -188 325 -382 394 l-85 31 -4480 2 c-3680 1 -4491 -1 -4540 -12z m8145 -159 c0 -2 -19 -16 -41 -31 -68 -45 -207 -184 -253 -254 -40 -60 -96 -163 -96 -175 0 -3 39 14 88 38 157 79 264 106 427 106 123 0 196 -15 293 -60 64 -30 152 -88 152 -100 0 -4 -53 4 -117 16 -230 45 -379 42 -553 -13 l-85 -27 60 -7 c95 -12 169 -44 228 -101 28 -27 44 -47 34 -44 -124 40 -189 50 -317 50 -74 1 -144 -3 -155 -7 -18 -8 -17 -10 15 -27 153 -79 314 -351 336 -568 l5 -57 -55 103 c-76 143 -154 248 -271 368 -103 105 -155 144 -191 144 -29 0 -63 -40 -215 -249 -126 -173 -134 -183 -137 -153 -13 129 108 348 257 464 l54 42 -54 18 c-104 36 -225 51 -359 45 -69 -3 -134 -8 -145 -12 -19 -6 -19 -6 -2 5 35 23 201 50 302 50 92 0 180 -16 247 -44 13 -6 22 3 42 41 78 155 216 317 321 379 70 40 185 78 185 60z m286 -692 c147 -69 318 -251 370 -391 10 -27 19 -49 20 -51 1 -2 23 13 49 33 57 43 95 60 158 69 49 8 144 -7 184 -28 18 -9 9 -11 -56 -13 -91 -2 -184 -24 -255 -60 l-50 -25 46 -24 c52 -26 89 -66 123 -134 26 -51 51 -137 42 -146 -2 -3 -17 16 -32 42 -55 94 -139 164 -196 164 -20 0 -21 -3 -15 -42 60 -365 -17 -731 -262 -1251 l-61 -127 59 -30 c32 -16 61 -34 65 -40 4 -7 -158 -10 -500 -10 -342 0 -504 3 -500 10 21 33 213 105 330 124 l73 11 -54 90 c-367 605 -475 1130 -358 1740 21 111 23 115 46 115 20 0 20 -4 14 -62 -34 -321 -33 -598 3 -803 63 -360 193 -655 430 -976 l56 -77 60 -7 c33 -3 86 -15 119 -26 32 -11 59 -19 61 -17 1 2 28 49 59 104 199 355 326 809 326 1168 l0 89 -22 -19 c-37 -33 -135 -171 -231 -325 -50 -82 -94 -144 -96 -138 -8 24 23 139 55 205 30 60 73 120 193 265 l24 29 -25 0 c-32 0 -168 -35 -236 -60 -80 -30 -141 -63 -210 -115 -64 -46 -64 -46 -45 -14 34 59 122 145 180 176 32 17 96 39 143 49 47 9 89 21 93 25 19 15 -133 31 -263 27 l-134 -4 50 22 c123 56 303 69 413 30 24 -9 46 -14 49 -11 10 10 -34 91 -89 165 -72 98 -147 179 -233 253 -72 62 -66 67 30 21z m-7578 -76 c7 -7 12 -24 12 -38 0 -37 -136 -514 -277 -970 l-13 -45 102 101 c177 174 366 331 606 503 279 199 551 313 752 313 126 1 194 -35 243 -127 29 -56 36 -218 12 -301 -55 -195 -223 -358 -577 -564 l-98 -57 26 -24 c14 -13 38 -44 52 -69 24 -40 27 -55 27 -140 0 -88 -3 -101 -34 -164 -23 -47 -58 -92 -112 -147 l-78 -79 37 -23 c127 -79 163 -98 217 -112 138 -36 215 -5 700 283 459 273 691 366 947 379 139 7 238 -7 355 -49 109 -39 202 -97 411 -252 95 -70 209 -150 253 -177 167 -100 344 -149 542 -149 271 0 509 67 889 252 204 99 207 101 232 84 18 -11 26 -25 26 -46 0 -37 -25 -55 -193 -134 -386 -184 -653 -256 -943 -257 -193 -1 -319 23 -474 88 -122 52 -212 109 -400 252 -297 226 -392 270 -610 278 -146 6 -261 -14 -431 -73 -164 -56 -296 -128 -555 -300 -356 -237 -494 -298 -674 -298 -113 0 -157 14 -285 89 -49 29 -108 60 -130 69 -39 16 -40 16 -101 -14 -166 -81 -333 -115 -579 -115 -168 0 -183 2 -222 23 -107 57 -93 165 30 225 106 53 224 71 467 71 191 1 224 -2 294 -21 l80 -22 46 39 c62 52 123 132 156 204 46 102 24 202 -56 250 -29 16 -31 16 -97 -13 -134 -58 -193 -73 -308 -78 -102 -5 -112 -4 -137 17 -49 38 -31 100 48 160 78 60 255 92 384 71 l65 -11 131 64 c179 88 302 172 410 280 102 103 148 182 166 287 25 146 -59 259 -192 259 -181 -1 -549 -214 -926 -536 -123 -105 -508 -470 -550 -521 -20 -24 -49 -81 -68 -135 -49 -135 -184 -482 -211 -544 -55 -123 -128 -204 -186 -204 -43 0 -87 35 -100 80 -37 123 99 406 346 721 l83 105 80 255 c94 297 182 588 248 819 25 91 51 173 56 183 10 20 67 24 86 5z m1911 -825 l171 -343 -104 0 -103 0 -44 100 -43 100 -131 0 -130 0 -44 -100 c-24 -55 -48 -100 -53 -100 -6 0 -8 6 -5 13 3 6 62 138 132 292 70 154 138 304 151 334 13 30 26 52 28 50 2 -2 81 -158 175 -346z m2806 314 c120 -61 169 -181 98 -237 -31 -24 -73 -26 -113 -5 -51 26 -66 80 -30 103 15 9 20 23 20 57 0 74 -54 109 -130 86 -89 -26 -125 -119 -125 -321 0 -166 18 -235 75 -292 35 -36 41 -38 99 -38 79 0 125 20 178 77 24 25 46 44 49 40 12 -11 -73 -91 -121 -113 -67 -32 -180 -33 -260 -3 -69 26 -157 105 -193 173 -24 45 -27 62 -27 151 0 86 3 107 25 150 43 88 146 171 244 196 58 15 157 4 211 -24z m-2345 -116 l0 -140 38 5 c28 3 32 2 17 -5 -11 -5 -28 -12 -37 -15 -16 -5 -18 -23 -18 -192 l0 -187 73 7 c39 4 93 14 119 22 66 22 134 84 155 145 19 53 38 67 29 22 -2 -16 -8 -67 -11 -115 l-7 -88 -274 0 -274 0 0 164 0 165 -32 -10 c-40 -11 -38 -11 -38 0 0 4 15 12 33 17 l32 10 3 167 2 167 95 0 95 0 0 -139z m1120 24 c0 -114 -12 -153 -23 -74 -8 61 -47 112 -108 143 -29 14 -68 26 -86 26 l-33 0 0 -330 0 -330 -95 0 -95 0 0 330 0 330 -29 0 c-97 0 -200 -91 -201 -177 0 -12 -4 -25 -10 -28 -6 -4 -10 35 -10 109 l0 116 345 0 345 0 0 -115z m338 -75 c86 -136 122 -186 129 -177 5 6 51 84 101 172 94 166 121 208 122 189 0 -6 -49 -97 -110 -201 l-110 -191 0 -141 0 -141 -95 0 -95 0 0 140 0 140 -77 123 c-42 67 -98 157 -125 200 l-48 77 94 0 94 0 120 -190z m1294 29 l3 -161 125 137 c69 76 135 149 147 164 11 14 24 23 28 19 4 -3 -56 -75 -133 -160 -77 -84 -138 -154 -137 -156 2 -2 12 1 23 7 29 15 126 14 166 -3 51 -21 85 -63 132 -166 57 -122 72 -150 97 -177 18 -21 19 -23 3 -29 -30 -11 -131 3 -173 24 -64 33 -99 82 -130 179 -32 105 -56 133 -113 133 l-40 0 0 -165 0 -165 -95 0 -95 0 0 340 0 340 95 0 95 0 2 -161z m718 -179 l0 -340 -85 0 -85 0 0 340 0 340 85 0 85 0 0 -340z m640 225 c0 -113 -12 -151 -23 -77 -10 59 -55 119 -111 147 -40 20 -65 25 -128 25 l-78 0 0 -156 c0 -143 1 -155 18 -151 9 3 34 8 54 12 47 7 95 54 104 100 14 77 24 27 24 -120 0 -85 -4 -155 -8 -155 -4 0 -13 20 -20 45 -14 52 -61 89 -129 100 l-43 7 0 -166 0 -166 28 0 c60 1 155 20 196 39 61 30 115 88 129 138 6 24 15 43 20 43 9 0 6 -60 -9 -182 l-6 -48 -274 0 -274 0 0 340 0 340 265 0 265 0 0 -115z m-3310 -1676 l0 -81 76 81 c64 68 81 81 107 81 l31 0 -67 -68 c-37 -37 -67 -72 -67 -77 1 -6 34 -48 75 -95 72 -83 73 -85 47 -88 -28 -4 -32 0 -118 102 -36 44 -42 48 -62 37 -19 -10 -22 -20 -22 -76 0 -63 -1 -65 -25 -65 l-25 0 0 165 0 165 25 0 c25 0 25 -1 25 -81z m560 -64 l0 -145 85 0 c78 0 85 -2 85 -20 0 -19 -7 -20 -110 -20 l-110 0 0 165 0 165 25 0 25 0 0 -145z m510 -20 l0 -165 -25 0 -25 0 0 165 0 165 25 0 25 0 0 -165z m420 78 c18 -49 40 -109 49 -134 l17 -46 49 133 49 134 33 0 33 0 0 -165 0 -165 -25 0 -24 0 -3 121 -3 121 -45 -121 c-59 -161 -67 -160 -132 4 l-47 120 0 -122 -1 -123 -25 0 -25 0 0 165 0 165 33 0 c33 0 34 -2 67 -87z m761 -78 l67 -165 -27 0 c-22 0 -29 7 -42 43 l-16 42 -78 0 -78 0 -16 -42 c-12 -34 -20 -43 -38 -43 -13 0 -23 4 -23 9 0 8 116 297 126 313 3 4 17 8 32 8 25 0 31 -10 93 -165z m589 145 c0 -18 -7 -20 -55 -20 l-55 0 0 -145 0 -145 -25 0 -25 0 0 145 0 145 -55 0 c-48 0 -55 2 -55 20 0 19 7 20 135 20 128 0 135 -1 135 -20z m363 -57 l48 -76 47 76 c40 65 51 76 75 77 20 0 26 -4 21 -12 -5 -7 -34 -53 -66 -102 -55 -84 -58 -91 -58 -152 0 -62 -1 -64 -25 -64 -24 0 -25 2 -25 73 0 69 -2 75 -43 137 -24 36 -52 77 -61 93 l-18 27 28 0 c25 0 36 -11 77 -77z' />
				<path d='M946 1397 c-62 -100 -113 -214 -137 -304 -10 -42 -17 -78 -15 -81 5 -4 46 81 121 248 46 105 87 210 81 210 -3 0 -25 -33 -50 -73z' />
				<path d='M1525 1234 c-38 -8 -101 -30 -140 -48 l-70 -33 80 -8 c145 -14 367 10 496 54 61 20 57 23 -51 41 -90 14 -232 11 -315 -6z' />
				<path d='M3190 2249 c-30 -67 -56 -126 -58 -130 -2 -5 48 -9 112 -9 64 0 116 2 116 5 0 6 -95 218 -108 241 -5 10 -25 -24 -62 -107z' />
				<path d='M6890 748 c-12 -35 -25 -69 -27 -75 -4 -10 10 -13 51 -13 31 0 56 4 56 8 0 8 -49 134 -55 140 -1 1 -12 -26 -25 -60z' />
			</g>
		</svg>
	);
};