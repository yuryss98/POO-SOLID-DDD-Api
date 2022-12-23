type StringKey = {
  [key: string]: number
};

const StatusCode: StringKey = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  UNPROCESSABLE_ENTITY: 422,
};

const StatusCodeMapper = (type: string): number => StatusCode[type];

export default StatusCodeMapper;
