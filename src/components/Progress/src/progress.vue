<template>
	<div :class='classObj'>
		<div :class='outClass'>
			<div :class='innerClass' :style='innerStyle'>
				<div ref='bar' :class="barClass" :style='barStyle'></div>
			</div>
		</div>
		<span v-if='!hideInfo' :class='textClass'>{{ percent }}%</span>
	</div>
</template>
<script>
	import {oneOf} from '@/utils/assist.js';

	export default {
		name: 'drProgress',
		props: {
			percent: {
				type: Number,
				default: 0
			},
			status: {
				type: String,
				default: 'info',
				validator(val) {
					return oneOf(val, ['info', 'success', 'warning', 'danger']);
				}
			},
			strokeWidth: {
				type: Number,
				default: 10
			},
			hideInfo: {
				type: Boolean,
				default: false
			},
			perfixCls: {
				type: String,
				default: 'dr-'
			}
		},
		computed: {
			classObj() {
				return [
					`${this.perfixCls}progress`,
					{
						[`${this.perfixCls}progress--show-info`]: !this.hideInfo
					}
				];
			},
			outClass() {
				return [
					`${this.perfixCls}progress__outer`
				];
			},
			innerClass() {
				return [
					`${this.perfixCls}progress__inner`
				];
			},
			barClass() {
				return [
					`${this.perfixCls}progress__bar`,
					`${this.perfixCls}progress__bar--${this.status}`
				];
			},
			textClass() {
				return [
					`${this.perfixCls}progress__text`
				];
			},
			innerStyle() {
				return {
					height: `${this.strokeWidth}px`
				}
			},
			barStyle() {
				return {
					width: `${this.percent}%`
				}
			}
		}
	}
</script>