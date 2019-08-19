let status = 'EXC Test Message';
let type = 'EXC';

const removeType = (type, status) => {
	const statusType = status.substr(0, type.length);
	return type === statusType
		? status.slice(statusType.length).trim()
		: status.trim();
};

console.log(removeType(type, status));
