export class Repository {
  appID = '';
  repoName = '';
  region = '';
  retention = '';
  capacity: number;
  schema: SchemaObject[];
  createTime = '';
 updateTime = '';
  producerInfo: ProducerInfo;
  status: number;
  indexVersion = '';
  templateVersion = '';
  replica: number;
  primaryField = '';
}

export class SchemaObject {
  key = '';
  valtype = '';
  analyzer = '';
  primary = false;
  options = {};
}
export class ProducerInfo {
  status = 0;
  custom = 0;
  batchSize = 0;
  taskSize = 0;
  concurrency = 0;
  capacity: 0;
  transactionCapacity: 0;
  hosts: [''];
  updateTime: '';
}

