import Controls from "../controls";
import { Raycaster as ThreeRaycaster, WebXRController } from "three";
export declare enum EVENTS {
    DRAG_START = "DRAG_START",
    DRAG = "DRAG",
    DRAG_STOP = "DRAG_STOP"
}
/**
 * @hidden
 * The Raycaster listens on the mouse and touch events globally and
 * dispatches DRAG_START, DRAG, and DRAG_STOP events.
 */
export default class XRRaycaster extends ThreeRaycaster {
    private xrControllers;
    private controls;
    private activeHandle;
    private activePlane;
    private point;
    private normal;
    private visibleHandles;
    private visibleControls;
    private helperPlane;
    private controlsWorldQuaternion;
    private clientDiagonalLength;
    private readonly highlightAxisLine;
    constructor(xrControllers: WebXRController[], controls: {
        [id: string]: Controls;
    });
    private createAxisLine;
    private selectStartListener;
    private selectMoveListener;
    private selectEndListener;
    private setPickPlaneOpacity;
    private resolveHandleGroup;
    update: () => void;
    destroy: () => void;
}
