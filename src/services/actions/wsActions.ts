import { IWsOrders } from "../types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_FAILED: 'WS_CONNECTION_FAILED' = 'WS_CONNECTION_FAILED';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_ORDERS: 'WS_SEND_ORDERS' = 'WS_SEND_ORDERS';


export type TWsActions = 
| IWsConnectedStart 
| IWsConnectedSuccess 
| IWsConnectedClosed 
| IWsConnectedFailed 
| IWsGetMessage 
// | IWsSendMessage


export interface IWsConnectedStart {
	readonly type: typeof WS_CONNECTION_START
}

export interface IWsConnectedSuccess {
	readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface IWsConnectedClosed {
	readonly type: typeof WS_CONNECTION_CLOSED
}

export interface IWsConnectedFailed {
	readonly type: typeof WS_CONNECTION_FAILED
}

export interface IWsGetMessage {
	readonly type: typeof WS_GET_ORDERS
	readonly data: any
}

// export interface IWsSendMessage {
// 	readonly type: typeof WS_GET_ORDERS
// 	readonly payload: {}
// }


export function wsConnectedStart(): IWsConnectedStart {
	return {
		type: WS_CONNECTION_START
	};
};

export function wsConnectedSuccess(): IWsConnectedSuccess {
	return {
		type: WS_CONNECTION_SUCCESS
	};
};

export function wsConnectedClosed(): IWsConnectedClosed {
	return {
		type: WS_CONNECTION_CLOSED
	};
};

export function wsConnectedFailed(): IWsConnectedFailed {
	return {
		type: WS_CONNECTION_FAILED
	};
};

export function wsGetMessage(payload: any): IWsGetMessage {
	return {
		type: WS_GET_ORDERS,
		data: payload
	};
};

// export function wsSendMessage(order: number) {
// 	return {
// 		type: WS_SEND_ORDERS,
// 		payload: order
// 	};
// };