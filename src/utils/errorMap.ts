type StringKey = {
  [key: string]: number
};

const ClientErrorResponses: StringKey = {
  BAD_REQUEST: 400,
  UNPROCESSABLE_ENTITY: 422,
};

const ErrorMap = (type: string): number => ClientErrorResponses[type];

export default ErrorMap;
