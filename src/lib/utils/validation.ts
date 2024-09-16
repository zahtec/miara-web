export const nameRegex = /^[a-zA-z ]*$/i;

export const emailRegex =
	/^(?:[a-z0-9!#$%&'*+.=?^_`{|}~-]+|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+")@[a-zA-Z0-9-]{1,256}\.[a-zA-Z0-9-]{2,6}$/i;

export const codeRegex = /^[A-Z0-9]+$/;

export const passwordRegex =
	/^(?=(?:[^0-9\s]*\d){2,})(?=(?:[^A-Z\s]*[A-Z]){3,})(?=(?:[a-zA-Z0-9]*[^a-zA-Z0-9\s]){1,})[^\s]*$/;

export const phoneRegex = /^[0-2][0-9]{9}$/;
