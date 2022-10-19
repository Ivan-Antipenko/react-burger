export const WS_CONNECTED_START = 'WS_CONNECTED_START';
export const WS_CONNECTED_SUCCESS = 'WS_CONNECTED_SUCCESS';
export const WS_CONNECTED_FAILED = 'WS_CONNECTED_FAILED';
export const WS_CONNECTED_CLOSED = 'WS_CONNECTED_CLOSED';
export const WS_GET_ORDERS = 'WS_GET_ORDERS';

export const wsConnectedStart = () => {
	return {
		type: WS_CONNECTED_START
	};
};


export const wsConnectedFailed = () => {
	return {
		type: WS_CONNECTED_FAILED
	};
};

export const wsGetMessage = (order) => {
	return {
		type: WS_GET_ORDERS,
		payload: order
	};
};