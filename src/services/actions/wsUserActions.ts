import { IWsOrders } from "../types"

export const WS_USER_CONNECTION_START: 'WS_USER_CONNECTION_START' = 'WS_USER_CONNECTION_START'
export const WS_USER_CONNECTION_SUCCESS: 'WS_USER_CONNECTION_SUCCESS' = 'WS_USER_CONNECTION_SUCCESS'
export const WS_USER_CONNECTION_CLOSED: 'WS_USER_CONNECTION_CLOSED' = 'WS_USER_CONNECTION_CLOSED'
export const WS_USER_CONNECTION_FAILED: 'WS_USER_CONNECTION_FAILED' = 'WS_USER_CONNECTION_FAILED'
export const WS_USER_GET_ORDERS: 'WS_USER_GET_ORDERS' = 'WS_USER_GET_ORDERS'
export const WS_USER_SEND_ORDERS: 'WS_USER_SEND_ORDERS' = 'WS_USER_SEND_ORDERS'


export type TWsUserActions = 
| IWsUserConnectedStart 
| IWsUserConnectedSuccess 
| IWsUserConnectedClosed 
| IWsUserConnectedFailed 
| IWsUserGetMessage 
| IWsUserSendMessage

export interface IWsUserConnectedStart {
	readonly type: typeof WS_USER_CONNECTION_START
}

export interface IWsUserConnectedSuccess {
	readonly type: typeof WS_USER_CONNECTION_SUCCESS
}

export interface IWsUserConnectedClosed {
	readonly type: typeof WS_USER_CONNECTION_CLOSED
}

export interface IWsUserConnectedFailed {
	readonly type: typeof WS_USER_CONNECTION_FAILED
}

export interface IWsUserGetMessage {
	readonly type: typeof WS_USER_GET_ORDERS
	readonly payload: IWsOrders
}

export interface IWsUserSendMessage {
	readonly type: typeof WS_USER_SEND_ORDERS
	readonly payload: any
}



export const wsUserConnectedStart = () => ({
	type: WS_USER_CONNECTION_START
});

export const wsUserConnectedSuccess = () => ({
	type: WS_USER_CONNECTION_SUCCESS
});

export const wsUserConnectedClosed = () => ({
	type: WS_USER_CONNECTION_CLOSED
});

export const wsUserConnectedFailed = () => ({
	type: WS_USER_CONNECTION_FAILED
});

export const wsUserGetMessage = (order: IWsOrders) => ({
	type: WS_USER_GET_ORDERS,
	payload: order
});

export const wsUserSendMessage = (order: any) => ({
	type: WS_USER_SEND_ORDERS,
	payload: order
});