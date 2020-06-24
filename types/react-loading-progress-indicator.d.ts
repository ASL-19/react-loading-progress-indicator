/**
 * React loading progress indicator component.
 *
 * @packageDocumentation
 */

import { CSSProperties } from 'react';
import { FC } from 'react';

/**
 * Loading progress indicator (props: {@link LoadingProgressIndicatorProps})
 *
 * @param props - Props
 *
 * @public
 */
declare const LoadingProgressIndicator: FC<LoadingProgressIndicatorProps>;
export default LoadingProgressIndicator;

/**
 * Function returning loading indicator styles.
 *
 * @remarks
 * Called with attrs argument containing config and state values:
 *
 * - {@link LoadingProgressIndicatorProps.color | color}
 *
 * - {@link LoadingProgressIndicatorProps.fadeAnimationDuration | fadeAnimationDuration}
 *
 * - {@link LoadingProgressIndicatorProps.growAnimationDuration | growAnimationDuration}
 *
 * - isVisible (boolean)
 *
 * - progress (number 0 and 1)
 *
 * Function definition should be outside of render function or wrapped in
 * useCallback to prevent unnecessary re-renders.
 *
 * @public
 */
export declare interface LoadingProgressIndicatorGetStyleFunction {
    (attrs: {
        color: string;
        fadeAnimationDuration: number;
        growAnimationDuration: number;
        isVisible: boolean;
        progress: number;
    }): CSSProperties;
}

/**
 * LoadingProgressIndicator props
 *
 * @public
 */
export declare interface LoadingProgressIndicatorProps {
    /**
     * CSS color of loading indicator (has no effect if getStyle prop set).
     */
    color: string;
    /**
     * Duration of fade in/out animation in ms (default: 300).
     */
    fadeAnimationDuration?: number;
    /**
     * Duration of indicator grow animation in ms (default: 300).
     */
    growAnimationDuration?: number;
    /**
     * Is the represented loading process in progress?
     */
    isLoading: boolean;
    /**
     * Unique key representing this loading event.
     *
     * @remarks
     * Each LoadingProgressIndicator instance must have a key prop, which should
     * be set to a unique value for the loading event.
     *
     * This component is designed with the assumption that each instance is mapped
     * to a single loading event. This allows it to be simpler and avoids a number
     * of potential bugs and edge cases.
     *
     * See https://reactjs.org/docs/reconciliation.html#keys
     */
    key: string | number;
    /**
     * Accessibility aria-label.
     *
     * @remarks
     * Will be announced on first tick if shouldFocusOnFirstTick.
     */
    label: string;
    /**
     * Should the loading indicator be visible before the first tick? (default: false)
     *
     * @remarks
     * It may be preferable to hide the loading indicator before the first tick if
     * there’s a reasonable chance loading will be complete in less than
     * tickDuration.
     */
    shouldBeVisibleBeforeFirstTick?: boolean;
    /**
     * Should the loading indicator be focussed on the first tick? (default:
     * false).
     *
     * @remarks This is likely not the ideal screen reader interaction, but will
     * give the user feedback about what’s happening. Otherwise they’ll click a
     * link and have no indication anything’s happening.
     *
     * This may be replaced with an ARIA live regions announcement in a future
     * release.
     */
    shouldFocusOnFirstTick?: boolean;
    /** {@inheritdoc LoadingProgressIndicatorGetStyleFunction} */
    getStyle?: LoadingProgressIndicatorGetStyleFunction;
    /**
     * Duration of tick in ms (default: 1000).
     *
     * @remarks
     * Note that the first tick duration comes from tickDurationFirst
     */
    tickDuration?: number;
    /**
     * Duration of first tick in ms (default: 300).
     *
     * @remarks
     * It may be preferable to make the first tick shorter to give the user
     * quicker feedback when they click a link.
     */
    tickDurationFirst?: number;
    /**
     * Increment of tick (default 0.05).
     *
     * @remarks
     * Note that the first tick increment comes from tickIncrementFirst.
     */
    tickIncrement?: number;
    /**
     * Increment of first tick (default 0.1).
     *
     * @remarks
     * It may be preferable to make the first tick increment progress more.
     */
    tickIncrementFirst?: number;
}

export { }
