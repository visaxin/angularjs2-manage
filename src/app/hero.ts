export class Repository {
  appId: string;
  repoName: string;
  region: string;
  retention: string;
  capacity: number;
  schema: SchemaObject[];
  createTime: string;
  updateTime: string;
  producerInfo: ProducerInfo[];
  status: number;
  indexVersion: string;
  tempalteVersion: string;
  replica: number;
  primaryField: string;

}

export class SchemaObject {
  key: string;
  valtype: string;
  analyzer: string;
  primary: boolean;
  options: object;
}
export class ProducerInfo {
  status: number;
  custom: number;
  batchSize: number;
  taskSize: number;
  concurrency: number;
  capacity: number;
  transactionCapacity: number;
  hosts: string[];
  updateTime: string;
}


export class RepositoryList {
  hits: number;
  repo_list: Repository[];
}
