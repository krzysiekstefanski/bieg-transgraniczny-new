import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Starfish1: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.Secondary }: IconResProps = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill={color}
			height='100%'
			width='100%'
			viewBox='0 0 476.28 476.28'
		>
			<path d='M474.451,181.597c-4.89-15.051-18.275-24.776-34.101-24.776H311.926L272.24,34.682  c-4.89-15.051-18.275-24.775-34.101-24.775c-15.825,0-29.21,9.725-34.1,24.775l-39.686,122.139H35.929  c-15.825,0-29.21,9.725-34.1,24.775c-4.891,15.051,0.222,30.786,13.025,40.087l103.898,75.486L79.066,419.31  c-3.602,11.084-1.823,22.731,4.88,31.956c6.875,9.461,17.835,15.108,29.319,15.107c7.442-0.001,14.696-2.413,20.976-6.977  l103.898-75.486l103.898,75.486c6.282,4.564,13.536,6.977,20.978,6.977c11.484,0,22.445-5.65,29.319-15.112  c6.701-9.224,8.479-20.869,4.878-31.952l-39.686-122.14l103.898-75.486C474.228,212.382,479.342,196.647,474.451,181.597z   M452.609,209.548l-108.307,78.689c-2.629,1.91-3.729,5.295-2.725,8.385l41.369,127.322c2.131,6.558,1.155,13.128-2.748,18.5  c-4.001,5.507-10.586,8.928-17.185,8.929c-4.313,0-8.404-1.383-12.16-4.112l-108.307-78.689c-1.314-0.955-2.861-1.432-4.408-1.432  s-3.094,0.478-4.408,1.432l-108.307,78.689c-3.754,2.728-7.846,4.111-12.161,4.112c-6.598,0-13.182-3.419-17.183-8.925  c-3.904-5.373-4.88-11.944-2.749-18.503l41.37-127.322c1.004-3.09-0.096-6.476-2.725-8.385L23.67,209.548  c-9.038-6.566-9.839-16.35-7.576-23.317c2.264-6.966,8.663-14.411,19.834-14.411h133.874c3.249,0,6.129-2.092,7.133-5.183  l41.37-127.321c3.453-10.625,12.51-14.411,19.834-14.411c7.325,0,16.383,3.786,19.835,14.411l41.369,127.321  c1.004,3.09,3.884,5.183,7.133,5.183h133.874c11.172,0,17.571,7.444,19.835,14.411C462.449,193.198,461.647,202.982,452.609,209.548  z M250.474,95.052L250.474,95.052c0,6.784-5.551,12.335-12.335,12.335s-12.335-5.551-12.335-12.334v0  c0-6.784,5.551-12.334,12.335-12.334S250.474,88.268,250.474,95.052z M250.474,149.494c0,6.784-5.551,12.335-12.335,12.335  s-12.335-5.551-12.335-12.335c0-6.784,5.551-12.334,12.335-12.334S250.474,142.71,250.474,149.494z M250.474,203.936  L250.474,203.936c0,6.784-5.551,12.334-12.335,12.334s-12.335-5.551-12.335-12.334l0,0c0-6.784,5.551-12.335,12.335-12.335  S250.474,197.152,250.474,203.936z M404.803,202.882c2.143,6.437-1.369,13.456-7.806,15.6s-13.456-1.369-15.6-7.806l0,0  c-2.143-6.437,1.369-13.456,7.806-15.6S402.66,196.445,404.803,202.882z M353.15,220.082c2.143,6.437-1.369,13.456-7.806,15.6  s-13.456-1.369-15.6-7.806h0c-2.143-6.437,1.369-13.456,7.806-15.6h0C343.987,210.132,351.007,213.645,353.15,220.082z   M293.69,252.881c-6.437,2.143-13.456-1.369-15.6-7.806l0,0c-2.143-6.437,1.369-13.456,7.806-15.6h0  c6.437-2.143,13.456,1.369,15.6,7.806l0,0C303.639,243.718,300.127,250.738,293.69,252.881L293.69,252.881z M345.926,381.706  L345.926,381.706c4.067,5.43,2.952,13.2-2.478,17.267l0,0c-5.43,4.067-13.2,2.952-17.267-2.478l0,0  c-4.067-5.43-2.952-13.2,2.478-17.267C334.089,375.161,341.859,376.276,345.926,381.706z M313.288,338.132  c4.067,5.43,2.952,13.2-2.478,17.267c-5.43,4.067-13.2,2.952-17.267-2.478l0,0c-4.067-5.43-2.952-13.2,2.478-17.267  C301.451,331.587,309.221,332.702,313.288,338.132z M280.65,294.558c4.067,5.43,2.952,13.2-2.478,17.267h0  c-5.43,4.067-13.2,2.952-17.267-2.478h0c-4.067-5.43-2.952-13.2,2.478-17.267h0C268.813,288.013,276.583,289.128,280.65,294.558  L280.65,294.558z M155.182,399.607L155.182,399.607c-3.867,5.574-11.591,6.971-17.165,3.104l0,0  c-5.574-3.867-6.971-11.591-3.104-17.165s11.591-6.971,17.165-3.104h0C157.651,386.309,159.048,394.033,155.182,399.607z   M186.213,354.874L186.213,354.874c-3.867,5.574-11.591,6.971-17.165,3.104l0,0c-5.574-3.867-6.971-11.591-3.104-17.165  c3.867-5.574,11.591-6.971,17.165-3.104C188.682,341.576,190.079,349.3,186.213,354.874z M217.244,310.142  c-3.867,5.574-11.591,6.971-17.165,3.104c-5.574-3.867-6.971-11.591-3.104-17.165s11.591-6.971,17.165-3.104  C219.713,296.843,221.11,304.568,217.244,310.142z M93.241,215.919L93.241,215.919c-1.908,6.51-8.795,10.276-15.305,8.368h0  c-6.51-1.908-10.276-8.795-8.368-15.305v0c1.908-6.51,8.795-10.276,15.305-8.368S95.148,209.409,93.241,215.919z M130.181,239.597  L130.181,239.597c-6.51-1.908-10.276-8.795-8.368-15.305s8.795-10.276,15.305-8.368c6.51,1.908,10.276,8.795,8.368,15.305  C143.578,237.739,136.691,241.505,130.181,239.597z M197.731,246.538c-1.908,6.51-8.795,10.276-15.305,8.368  s-10.276-8.795-8.368-15.305v0c1.908-6.51,8.795-10.276,15.305-8.368C195.873,233.14,199.639,240.027,197.731,246.538  L197.731,246.538z' />
		</svg>
	);
};